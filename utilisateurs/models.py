from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('user', 'User'),
        ('partner', 'Partner'),
    )
    
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')
    
    # Spécifiez des related_name uniques pour éviter les conflits
    groups = models.ManyToManyField(Group, related_name='utilisateur_groups', blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name='utilisateur_permissions', blank=True)

    def __str__(self):
        return self.username
