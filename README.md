# Site Web Cabinet Giulia Petit

Site web professionnel pour le Cabinet d'Avocate Giulia Petit à Marseille.

## 🚀 Déploiement sur Vercel via GitHub

### Étape 1 : Créer un repository GitHub

1. Allez sur [github.com](https://github.com)
2. Connectez-vous ou créez un compte
3. Cliquez sur le bouton **"New"** (ou **"+"** en haut à droite → **"New repository"**)
4. Remplissez les informations :
   - **Repository name** : `giuliapetit-site` (ou le nom de votre choix)
   - **Description** : "Site web Cabinet Giulia Petit"
   - Laissez **Public** ou choisissez **Private**
   - Ne cochez PAS "Add a README file"
5. Cliquez sur **"Create repository"**

### Étape 2 : Uploader les fichiers sur GitHub

**Option A : Via l'interface web (le plus simple)**
1. Sur la page de votre nouveau repository, cliquez sur **"uploading an existing file"**
2. Glissez-déposez tous les fichiers de ce dossier :
   - `index.html`
   - `package.json`
   - `vercel.json`
   - `.gitignore`
   - `README.md`
3. Ajoutez un message de commit : "Premier commit - Site initial"
4. Cliquez sur **"Commit changes"**

**Option B : Via la ligne de commande (si vous êtes à l'aise)**
```bash
cd chemin/vers/giuliapetit-site
git init
git add .
git commit -m "Premier commit - Site initial"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/giuliapetit-site.git
git push -u origin main
```

### Étape 3 : Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"** et choisissez **"Continue with GitHub"**
3. Autorisez Vercel à accéder à votre GitHub
4. Sur le dashboard Vercel, cliquez sur **"Add New"** → **"Project"**
5. Trouvez votre repository `giuliapetit-site` et cliquez sur **"Import"**
6. Configurez le projet :
   - **Framework Preset** : Laissez "Other"
   - **Root Directory** : `./` (par défaut)
   - **Build Command** : Laissez vide ou mettez `echo "No build"`
   - **Output Directory** : Laissez vide
7. Cliquez sur **"Deploy"**

### Étape 4 : Votre site est en ligne ! 🎉

- Vercel va vous donner une URL comme : `giuliapetit-site.vercel.app`
- Vous pouvez configurer un nom de domaine personnalisé dans les paramètres

## 📝 Mises à jour du site

Pour mettre à jour le site :
1. Modifiez `index.html` sur GitHub (ou localement puis poussez les changements)
2. Vercel redéploiera automatiquement votre site !

## 🌐 Nom de domaine personnalisé

Pour utiliser `www.giuliapetitavocat.fr` :
1. Dans Vercel, allez dans **Settings** → **Domains**
2. Ajoutez votre domaine
3. Configurez les DNS chez votre registrar (OVH, Gandi, etc.) comme indiqué par Vercel

## 📧 Support

Pour toute question, contactez le développeur ou consultez la documentation Vercel.
