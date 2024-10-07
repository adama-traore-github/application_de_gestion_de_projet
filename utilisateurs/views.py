from django.shortcuts import render, redirect, get_object_or_404
from .forms import CustomUserCreationForm, PartnerCreationForm, AdminCreationForm
from .models import CustomUser
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth import logout
from django.views.decorators.http import require_POST
from projets.models import Projet  # Assure-toi d'importer correctement le modèle Projet

# Nouvelle page d'accueil
def home00(request):
    return render(request, 'utilisateurs/home00.html')

# Page d'accueil spécifique par rôle
def home_admin(request):
    return render(request, 'utilisateurs/home_admin.html')

def home_user(request):
    return render(request, 'utilisateurs/home_user.html')

def home_partner(request):
    return render(request, 'utilisateurs/home_partner.html')

# Vue pour la page de connexion personnalisée
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            auth_login(request, user)  # Connexion de l'utilisateur
            
            # Redirection en fonction du rôle
            if user.role == 'admin':
                return redirect('admin_dashboard')  # Redirige vers le tableau de bord admin
            elif user.role == 'user':
                return redirect('user_dashboard')  # Redirige vers le tableau de bord utilisateur
            elif user.role == 'partner':
                return redirect('partner_dashboard')  # Redirige vers le tableau de bord partenaire
        else:
            return render(request, 'utilisateurs/login.html', {'error': 'Identifiants incorrects'})
    
    return render(request, 'utilisateurs/login.html')



def home(request):
    if request.method == 'POST':
        role = request.POST.get('role')
        print(f"Rôle sélectionné : {role}")  # Pour le débogage
        if role == 'admin':
            return redirect('admin_form')
        elif role == 'user':
            return redirect('user_form')
        elif role == 'partner':
            return redirect('partner_form')

    return render(request, 'utilisateurs/home.html')

# Formulaire pour admin
def admin_form(request):
    if request.method == 'POST':
        form = AdminCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.role = 'admin'
            user.save()
            return redirect('admin_dashboard')
    else:
        form = AdminCreationForm()
    return render(request, 'utilisateurs/admin_form.html', {'form': form})

# Formulaire pour user
def user_form(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.role = 'user'
            user.save()
            return redirect('user_dashboard')
    else:
        form = CustomUserCreationForm()
    return render(request, 'utilisateurs/user_form.html', {'form': form})

# Formulaire pour partner
def partner_form(request):
    if request.method == 'POST':
        form = PartnerCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.role = 'partner'
            user.save()
            return redirect('partner_dashboard')
    else:
        form = PartnerCreationForm()
    return render(request, 'utilisateurs/partner_form.html', {'form': form})


def is_admin(user):
    return user.role == 'admin'

def is_user(user):
    return user.role == 'user'

def is_partner(user):
    return user.role == 'partner'

@user_passes_test(is_admin)
@login_required
def admin_dashboard(request):
    # Récupérer des statistiques pour l'administrateur
    total_users = CustomUser.objects.filter(role='user').count()
    total_partners = CustomUser.objects.filter(role='partner').count()

    context = {
        'total_users': total_users,
        'total_partners': total_partners
    }

    return render(request, 'utilisateurs/admin/dashboard.html', context)  # Correct path

@user_passes_test(is_user)
@login_required
def user_dashboard(request):
    return render(request, 'utilisateurs/user/dashboard.html')  # Correct path

@user_passes_test(is_partner)
@login_required
def partner_dashboard(request):
    return render(request, 'utilisateurs/partner/dashboard.html')  # Correct path


@login_required
def partner_dashboard(request):
    projets_en_cours_de_validation = Projet.objects.filter(status='under_validation')

    # Pour le débogage
    print(f'Nombre de projets en cours de validation: {projets_en_cours_de_validation.count()}')

    context = {
        'projets': projets_en_cours_de_validation,
    }
    
    return render(request, 'utilisateurs/partner/dashboard.html', context)


@login_required
def admin_dashboard(request):
    # Récupérer des statistiques pour l'administrateur
    projets = Projet.objects.filter(status='pending').distinct()  # Assurez-vous d'utiliser distinct()
    total_users = CustomUser.objects.filter(role='user').count()
    total_partners = CustomUser.objects.filter(role='partner').count()
    
    # Récupérer tous les projets
    projets = Projet.objects.all()  # Récupère tous les projets

    context = {
        'total_users': total_users,
        'total_partners': total_partners,
        'projets': projets,  # Passez la liste des projets au contexte
    }

    return render(request, 'utilisateurs/admin/dashboard.html', context)

def user_dashboard(request):
    return render(request, 'utilisateurs/user/dashboard.html')  # Chemin vers le template utilisateur


def logout_view(request):
    logout(request)
    return render(request, 'utilisateurs/logout.html') 

@login_required
def approve_project(request, projet_id):
    projet = get_object_or_404(Projet, id=projet_id)
    projet.status = 'approved'
    projet.save()
    return redirect('admin_dashboard')  # Redirigez vers la page souhaitée

@login_required
def reject_project(request, projet_id):
    projet = get_object_or_404(Projet, id=projet_id)
    projet.status = 'rejected'
    projet.save()
    return redirect('admin_dashboard')  # Redirigez vers la page souhaitée



@login_required
def under_validation_project(request, projet_id):
    projet = get_object_or_404(Projet, id=projet_id)
    projet.status = 'under_validation'
    projet.save()
    return redirect('admin_dashboard')  # Redirigez vers la page souhaitée


@login_required
def finance_project(request, projet_id):
    projet = get_object_or_404(Projet, id=projet_id)
    
    # Vérifier si le projet n'est pas déjà financé
    if not projet.is_financed:
        projet.is_financed = True
        projet.financed_by = request.user  # Mettre à jour le champ avec l'utilisateur connecté
        projet.save()

    return redirect('partner_dashboard')  # Redirigez vers le tableau de bord des partenaires


@login_required
def profile_view(request):
    user = request.user
    return render(request, 'utilisateurs/profile.html', {'user': user})