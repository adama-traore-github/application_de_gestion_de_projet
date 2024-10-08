Je vais te créer un fichier `README.md` détaillant les fonctionnalités de l'application Django que tu m'as décrite. Voici un exemple de ce que je vais inclure dans ce fichier :

```markdown
# Gestion de Projet - Application Django

## Description
L'application **Gestion de Projet** est une plateforme web développée avec Django permettant la gestion de projets, avec des rôles distincts pour les administrateurs, les utilisateurs, et les partenaires. Chaque type d'utilisateur a des droits spécifiques et des accès personnalisés en fonction de son rôle.

## Fonctionnalités

### Authentification et rôles
- **Page de connexion personnalisée** : Authentification via le nom d'utilisateur et le mot de passe.
- **Gestion des rôles** : Chaque utilisateur appartient à l'un des rôles suivants :
  - **Admin** : Gère l'ensemble des utilisateurs et partenaires, approuve ou rejette les projets.
  - **Utilisateur** : Soumet des projets.
  - **Partenaire** : Valide et finance les projets.
  
### Tableaux de bord
Chaque utilisateur, en fonction de son rôle, est redirigé vers un tableau de bord spécifique :
- **Admin Dashboard** : Affiche des statistiques sur le nombre total d'utilisateurs et de partenaires, et liste les projets en attente d'approbation.
- **User Dashboard** : Affiche les informations personnelles de l'utilisateur et son activité liée aux projets.
- **Partner Dashboard** : Permet de consulter les projets en attente de financement ou validation et d'agir sur ces projets.

### Gestion des Projets
- **Soumission de projets** : Les utilisateurs peuvent soumettre des projets pour validation.
- **Approbation/rejet de projets** : Les administrateurs peuvent approuver ou rejeter des projets.
- **Financement de projets** : Les partenaires peuvent financer des projets approuvés.
- **Statut des projets** : Chaque projet peut avoir différents statuts (`pending`, `approved`, `rejected`, `under_validation`, `financed`).

### Vues spécifiques
- **Page d'accueil par rôle** : Chaque utilisateur, après connexion, est redirigé vers une page d'accueil spécifique à son rôle.
- **Formulaires de création d'utilisateurs** : Des formulaires spécifiques sont disponibles pour la création d'un administrateur, d'un utilisateur, ou d'un partenaire.

### Profil utilisateur
- **Vue profil** : Chaque utilisateur peut consulter les détails de son profil.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone <url-du-repo>
   ```
2. Installez les dépendances :
   ```bash
   pip install -r requirements.txt
   ```
3. Appliquez les migrations :
   ```bash
   python manage.py migrate
   ```
4. Démarrez le serveur :
   ```bash
   python manage.py runserver
   ```

## Structure du projet

- **views.py** : Contient les vues qui gèrent la logique de l'application, telles que la connexion, la gestion des utilisateurs, et les tableaux de bord.
- **models.py** : Contient les modèles `CustomUser` et `Projet`.
- **forms.py** : Définit les formulaires pour la création des utilisateurs selon leur rôle.
- **templates/** : Contient les fichiers HTML utilisés pour l'affichage des vues (tableaux de bord, formulaires, etc.).

## Gestion des rôles

L'application utilise des fonctions et des décorateurs pour restreindre l'accès en fonction des rôles :
- **`user_passes_test`** : Vérifie le rôle d'un utilisateur avant d'accéder à une vue spécifique.
- **`@login_required`** : Protège les vues afin que seuls les utilisateurs authentifiés puissent y accéder.



## License
Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).
```

### Prochaines étapes
Je vais également extraire et analyser le fichier que tu as téléchargé afin de vérifier s'il contient des informations supplémentaires pertinentes pour l'ajout au `README.md`.

Souhaitez-vous que je le fasse maintenant ?
