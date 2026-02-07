# 📦 Guide de Déploiement - Étape par Étape

## ✅ Pré-requis

- [x] Compte GitHub (gratuit)
- [x] Compte Vercel (gratuit)
- [x] Git installé sur votre ordinateur

## 🎯 Étape 1 : Préparer GitHub

### 1.1 Créer un repository sur GitHub

1. Aller sur [github.com](https://github.com)
2. Cliquer sur le bouton **"+"** en haut à droite
3. Sélectionner **"New repository"**
4. Nommer le repository : `giulia-petit-website`
5. Laisser **Public** (ou Private si vous préférez)
6. **NE PAS** cocher "Add a README file"
7. Cliquer sur **"Create repository"**

### 1.2 Uploader le code sur GitHub

Ouvrir un terminal dans le dossier du projet et exécuter :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Site Giulia Petit"

# Définir la branche principale
git branch -M main

# Connecter au repository GitHub (remplacer VOTRE-USERNAME)
git remote add origin https://github.com/VOTRE-USERNAME/giulia-petit-website.git

# Pousser le code
git push -u origin main
```

**Note :** Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub.

## 🚀 Étape 2 : Déployer sur Vercel

### 2.1 Créer un compte Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer sur **"Sign Up"**
3. Choisir **"Continue with GitHub"**
4. Autoriser Vercel à accéder à GitHub

### 2.2 Importer le projet

1. Sur le dashboard Vercel, cliquer sur **"Add New..."**
2. Sélectionner **"Project"**
3. Cliquer sur **"Import Git Repository"**
4. Trouver `giulia-petit-website` dans la liste
5. Cliquer sur **"Import"**

### 2.3 Configurer le projet

Vercel détecte automatiquement Next.js. Paramètres par défaut :

- **Framework Preset:** Next.js
- **Root Directory:** ./
- **Build Command:** `npm run build`
- **Output Directory:** `.next`

**Laisser tous les paramètres par défaut** et cliquer sur **"Deploy"**

### 2.4 Attendre le déploiement

Le déploiement prend généralement **1-2 minutes**. Vercel va :
- ✅ Installer les dépendances
- ✅ Builder le projet
- ✅ Déployer sur le CDN global

### 2.5 Récupérer l'URL

Une fois terminé, vous obtiendrez une URL comme :
```
https://giulia-petit-website-xyz123.vercel.app
```

## 🌐 Étape 3 : Configurer un Domaine Personnalisé (Optionnel)

### 3.1 Ajouter un domaine sur Vercel

1. Sur Vercel, aller dans **"Settings"** du projet
2. Cliquer sur **"Domains"**
3. Entrer votre domaine (ex: `giuliapetit.fr`)
4. Cliquer sur **"Add"**

### 3.2 Configurer les DNS

Vercel vous donnera les enregistrements DNS à ajouter :

**Type A :**
```
@ → 76.76.21.21
```

**Type CNAME :**
```
www → cname.vercel-dns.com
```

### 3.3 Attendre la propagation

La propagation DNS prend généralement **24-48 heures** mais peut être plus rapide (parfois quelques minutes).

## 🔄 Étape 4 : Mettre à Jour le Site

Pour toute modification future :

```bash
# Modifier les fichiers du projet
# Puis dans le terminal :

git add .
git commit -m "Description des modifications"
git push
```

**Vercel déploiera automatiquement les changements** en 1-2 minutes ! 🎉

## 📊 Monitoring et Analytics

### Voir les déploiements
- Aller sur [vercel.com/dashboard](https://vercel.com/dashboard)
- Cliquer sur votre projet
- Voir l'historique des déploiements

### Analytics (si activé)
- Aller dans l'onglet **"Analytics"**
- Voir les visiteurs, pages vues, etc.

## 🆘 Dépannage

### Erreur lors du push Git
```bash
# Forcer le push si nécessaire
git push -f origin main
```

### Build échoue sur Vercel
1. Vérifier les logs dans Vercel
2. S'assurer que `package.json` est correct
3. Redéployer manuellement depuis le dashboard

### Site ne se charge pas
1. Vérifier que le déploiement est **"Ready"** sur Vercel
2. Vider le cache du navigateur (Ctrl + F5)
3. Attendre quelques minutes

## ✨ Fonctionnalités Vercel

- ✅ **HTTPS automatique** (SSL gratuit)
- ✅ **CDN global** (chargement ultra-rapide)
- ✅ **Déploiement automatique** (à chaque push Git)
- ✅ **Preview deployments** (pour tester avant production)
- ✅ **Rollback facile** (revenir à une version précédente)
- ✅ **Analytics** (optionnel, gratuit)

## 🎓 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [Guide Git](https://git-scm.com/doc)

---

**Bon déploiement ! 🚀**
