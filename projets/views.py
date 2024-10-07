from django.shortcuts import render, redirect, get_object_or_404
from .models import Projet, MessageUserAdmin, CustomUser, MessageAdminPartner
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import ProjetForm
from .forms import MessageForm  # Assurez-vous que ce formulaire est défini


@login_required  # Assurez-vous que l'utilisateur est connecté pour voir les détails du projet
def forum_user_admin(request, project_id):
    projet = get_object_or_404(Projet, id=project_id)
    messages_list = projet.user_admin_messages.all()  # Récupérer les messages

    if request.method == 'POST':
        content = request.POST.get('content')
        if content:  # Vérifiez que le contenu n'est pas vide
            MessageUserAdmin.objects.create(
                projet=projet,
                sender=request.user,  # L'utilisateur admin qui envoie le message
                recipient=projet.created_by,  # L'utilisateur qui a soumis le projet
                content=content
            )
            messages.success(request, "Votre message a été envoyé.")  # Message de confirmation
            return redirect('forum_user_admin', project_id=projet.id)  # Rediriger après l'envoi du message
        else:
            messages.error(request, "Le message ne peut pas être vide.")  # Message d'erreur

    return render(request, 'utilisateurs/forum_user_admin.html', {
        'projet': projet,
        'messages': messages_list,  # Passer la liste des messages
    })

@login_required  # Assurez-vous que l'utilisateur est connecté pour accéder à cette vue
def forum_admin_partner(request, project_id):
    projet = get_object_or_404(Projet, id=project_id)
    messages = projet.admin_partner_messages.all()  # Récupérer les messages

    if request.method == 'POST':
        content = request.POST.get('content')
        # Assurez-vous de sélectionner le partenaire approprié
        recipient = CustomUser.objects.filter(is_partner=True).first()  
        if recipient:  # Vérifier si un partenaire existe
            MessageAdminPartner.objects.create(projet=projet, sender=request.user, recipient=recipient, content=content)
            messages.success(request, "Votre message a été envoyé au partenaire.")  # Message de confirmation
        else:
            messages.error(request, "Aucun partenaire trouvé.")
        return redirect('forum_admin_partner', project_id=projet.id)  # Rediriger après l'envoi du message

    return render(request, 'admin/forum_admin_partner.html', {
        'projet': projet,
        'messages': messages,
    })



@login_required

def submit_projet(request):
    if request.method == 'POST':
        form = ProjetForm(request.POST, request.FILES)
        if form.is_valid():
            projet = form.save(commit=False)
            projet.created_by = request.user  # Assurez-vous que l'utilisateur est authentifié
            projet.save()
            return redirect('success_page')  # Remplacez 'success_page' par votre URL de succès
    else:
        form = ProjetForm()
    
    return render(request, 'projets/submit_projet.html', {'form': form})

@login_required
def edit_project(request, project_id):
    projet = get_object_or_404(Projet, id=project_id)

    # Vérifier si l'utilisateur a le droit de modifier
    if request.user != projet.created_by and not request.user.is_staff:
        return redirect('projet_detail', project_id=project_id)

    if request.method == 'POST':
        # Mettre à jour les champs seulement si les données existent
        titre = request.POST.get('titre')
        description = request.POST.get('description')
        impact_communautaire = request.POST.get('impact_communautaire')
        budget = request.POST.get('budget')
        date_debut = request.POST.get('date_debut')
        date_fin = request.POST.get('date_fin')

        if titre:
            projet.titre = titre
        if description:
            projet.description = description
        if impact_communautaire:
            projet.impact_communautaire = impact_communautaire
        if budget:
            projet.budget = budget
        if date_debut:
            projet.date_debut = date_debut
        if date_fin:
            projet.date_fin = date_fin

        # Traitement des fichiers
        if request.FILES.get('business_plan'):
            projet.business_plan = request.FILES['business_plan']
        if request.FILES.get('autres_documents'):
            projet.autres_documents = request.FILES['autres_documents']

        projet.save()
        messages.success(request, "Le projet a été mis à jour avec succès.")
        return redirect('projet_detail', projet_id=project_id)

    return render(request, 'projets/edit_project.html', {'projet': projet})

@login_required
def update_project_status(request, project_id):
    projet = get_object_or_404(Projet, id=project_id)

    # Vérifier si l'utilisateur est admin
    if not request.user.is_staff:
        return redirect('project_detail_user', project_id=project_id)

    if request.method == 'POST':
        projet.status = request.POST.get('status')
        projet.save()
        messages.success(request, "Le statut du projet a été mis à jour.")
        return redirect('project_detail_user', project_id=project_id)

    return render(request, 'admin/update_status.html', {'projet': projet})

@login_required  # Assurez-vous que l'utilisateur est connecté
def user_projects_list(request):
    # Filtrer les projets par l'utilisateur connecté
    projets = Projet.objects.filter(created_by=request.user)

    return render(request, 'projets/user_projects_list.html', {
        'projets': projets
    })


def success_page(request):
    return render(request, 'projets/success.html')  # Assurez-vous que le chemin est correct




@login_required

def mes_projets(request):
    # Filtrer les projets créés par l'utilisateur actuellement connecté
    projets = Projet.objects.filter(created_by=request.user)
    return render(request, 'projets/mes_projets.html', {'projets': projets})

@login_required
def projet_detail(request, projet_id):
    projet = get_object_or_404(Projet, id=projet_id)
    return render(request, 'projets/projet_detail.html', {'projet': projet})
