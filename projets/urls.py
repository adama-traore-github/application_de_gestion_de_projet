from django.urls import path
from .views import submit_projet, user_projects_list, edit_project, success_page, mes_projets, projet_detail
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('submit/', submit_projet, name='submit_projet'),  # Soumettre un nouveau projet
    path('projets/', user_projects_list, name='user_projects_list'),  # URL pour la liste des projets de l'utilisateur
    path('projets/<int:project_id>/edit/', edit_project, name='edit_project'),  # Éditer un projet existant
    path('projet/<int:projet_id>/', projet_detail, name='projet_detail'),  # Détails d'un projet
    path('success/', success_page, name='success_page'),  # Page de succès après une action
    path('mes_projets/', mes_projets, name='mes_projets'),  # Liste des projets personnels
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # Configuration pour servir les fichiers médias
