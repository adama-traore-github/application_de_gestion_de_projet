from django import forms
from .models import Projet

class ProjetForm(forms.ModelForm):
    class Meta:
        model = Projet
        fields = [
            'titre', 
            'description', 
            'impact_communautaire', 
            'budget', 
            'date_debut', 
            'date_fin', 
            'business_plan', 
            'autres_documents'
        ]
        
        widgets = {
            'titre': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Titre du projet'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Description du projet'}),
            'impact_communautaire': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Impact communautaire'}),
            'budget': forms.NumberInput(attrs={'class': 'form-control', 'placeholder': 'Budget'}),
            'date_debut': forms.DateInput(attrs={'type': 'date', 'class': 'form-control'}),
            'date_fin': forms.DateInput(attrs={'type': 'date', 'class': 'form-control'}),
            'business_plan': forms.ClearableFileInput(attrs={'class': 'form-control'}),
            'autres_documents': forms.ClearableFileInput(attrs={'class': 'form-control'}),
            'has_team': forms.RadioSelect(choices=[(True, 'Oui'), (False, 'Non')]),
        
        }

    def __init__(self, *args, **kwargs):
        super(ProjetForm, self).__init__(*args, **kwargs)
        # Rendre le champ 'autres_documents' facultatif
        self.fields['autres_documents'].required = False

    
class MessageForm(forms.Form):
    # Définissez vos champs ici
    nom = forms.CharField(max_length=100)
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea)

