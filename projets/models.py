from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser, Group, Permission

# Importer CustomUser ici, si nécessaire, mais assurez-vous qu'il n'y a pas de référence circulaire.
from utilisateurs.models import CustomUser  

class Projet(models.Model):
    titre = models.CharField(max_length=200, unique=True)
    description = models.TextField()
    impact_communautaire = models.TextField(help_text="En quoi ce projet va aider la communauté ?")
    budget = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    date_debut = models.DateField()
    date_fin = models.DateField()
    created_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    business_plan = models.FileField(upload_to='business_plans/', blank=True, null=True)
    autres_documents = models.FileField(upload_to='autres_documents/', blank=True, null=True)
    icone = models.CharField(max_length=50, default='fas fa-project-diagram')  # Valeur par défaut
    

       
    status = models.CharField(max_length=20, choices=[
        ('pending', 'En attente'),              # Projet soumis, en attente de validation
        ('under_validation', 'En cours de validation'),  # Projet en cours de validation
        ('approved', 'Approuvé'),                # Projet approuvé
        ('rejected', 'Rejeté')                   # Projet rejeté
    ], default='pending')   
    
    is_financed = models.BooleanField(default=False)
    financed_by = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True, related_name='financed_projects')



    # Champ booléen pour demander si l'utilisateur a une équipe
    has_team = models.BooleanField(default=False, verbose_name="Avez-vous une équipe ?")
    

    def __str__(self):
        return self.titre

# Vous pouvez ajouter d'autres classes comme MessageUserAdmin, MessageAdminPartner, etc.

class CustomUser(AbstractUser):
    is_partner = models.BooleanField(default=False)

    groups = models.ManyToManyField(Group, related_name='projets_groups', blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name='projets_permissions', blank=True)

    def __str__(self):
        return self.username



class MessageUserAdmin(models.Model):
    projet = models.ForeignKey(Projet, on_delete=models.CASCADE, related_name='messages_user_admin')
    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='sent_messages_admin')
    recipient = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='received_messages_admin')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Message de l\'administrateur {self.sender} à l\'utilisateur {self.recipient} sur le projet {self.projet}'
    



class MessageAdminPartner(models.Model):
    projet = models.ForeignKey(Projet, on_delete=models.CASCADE, related_name='messages_admin_partner')
    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='sent_messages_partner')
    recipient = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='received_messages_partner')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Message de l\'administrateur {self.sender} au partenaire {self.recipient} sur le projet {self.projet}'
