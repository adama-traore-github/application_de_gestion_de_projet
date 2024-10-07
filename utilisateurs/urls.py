from django.urls import path
from django.contrib.auth.views import LogoutView
from django.conf import settings
from django.conf.urls.static import static
from .views import (
    home, home00, admin_form, user_form, partner_form , profile_view,logout_view, 
    home_admin, home_user, home_partner, login_view, finance_project,
    admin_dashboard, user_dashboard, partner_dashboard, approve_project, reject_project, under_validation_project
)

urlpatterns = [
    path('', home00, name='home00'),  # Page d'accueil principale
    path('home/', home, name='Inscription'),  # Inscription (ancienne page d'accueil)
    path('login/', login_view, name='login'),  # Connexion
    path('logout/', logout_view, name='logout'),

    # Formulaires d'inscription par rôle
    path('admin_form/', admin_form, name='admin_form'),  # Vue pour le rôle Admin
    path('user_form/', user_form, name='user_form'),  # Vue pour le rôle Utilisateur
    path('partner_form/', partner_form, name='partner_form'),  # Vue pour le rôle Partenaire

    # Tableaux de bord par rôle
    path('admin/dashboard/', admin_dashboard, name='admin_dashboard'),
    path('user/dashboard/', user_dashboard, name='user_dashboard'),
    path('partner/dashboard/', partner_dashboard, name='partner_dashboard'),
    
    path('finance/<int:projet_id>/', finance_project, name='finance_project'),  # Ajoutez cette ligne pour financer le projet
    path('profile/', profile_view, name='profile'),

    path('projets/validation/<int:projet_id>/', under_validation_project, name='under_validation_project'),  
    path('projets/approuver/<int:projet_id>/', approve_project, name='approve_project'),
    path('projets/rejeter/<int:projet_id>/', reject_project, name='reject_project'),    # Pages d'accueil spécifiques par rôle
    path('home_admin/', home_admin, name='home_admin'),  # Page d'accueil pour Admin
    path('home_user/', home_user, name='home_user'),  # Page d'accueil pour Utilisateur
    path('home_partner/', home_partner, name='home_partner'),  # Page d'accueil pour Partenaire


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

