from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'password1', 'password2', 'role')

class PartnerCreationForm(UserCreationForm):
    company_name = forms.CharField(max_length=255, label="Nom de l'entreprise")
    company_address = forms.CharField(max_length=255, label="Adresse de l'entreprise")
    company_size = forms.IntegerField(label="Taille de l'entreprise (nombre d'employés)")

    class Meta:
        model = CustomUser
        fields = ('username', 'password1', 'password2', 'company_name', 'company_address', 'company_size')

class AdminCreationForm(UserCreationForm):
    admin_code = forms.CharField(max_length=100, label="Code Admin")

    class Meta:
        model = CustomUser
        fields = ('username', 'password1', 'password2', 'admin_code')
