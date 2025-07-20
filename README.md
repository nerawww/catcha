# 🐱 Catcha

Un captcha original et amusant où il faut caresser un chat pour prouver que vous n'êtes pas un robot !

## ✨ Fonctionnalités

- **Interface moderne** avec fond animé de particules
- **Texte dégradé animé** pour un effet visuel attrayant
- **Zone de clic précise** sur la tête du chat
- **Bulle "Miaou !"** qui apparaît à l'endroit du clic
- **Animation de validation** avec effet de particules
- **Design responsive** et accessible

## 🚀 Installation

1. **Clonez le projet**

   ```bash
   git clone https://github.com/votre-username/catcha.git
   cd catcha
   ```

2. **Installez les dépendances**

   ```bash
   npm install
   ```

3. **Lancez le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrez votre navigateur** sur `http://localhost:3000`

## 🛠️ Technologies utilisées

- **React** - Framework JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **Vite** - Outil de build rapide
- **React Icons** - Icônes pour l'interface

## 🎮 Comment jouer

1. Cliquez sur "Commencer le Catcha"
2. Caressez le chat en cliquant sur sa tête
3. Répétez jusqu'à validation complète
4. Profitez des animations "Miaou !" 😸

## 📁 Structure du projet

```
src/
├── components/
│   ├── Catcha.jsx          # Composant principal du captcha
│   ├── GradientText.jsx    # Texte avec dégradé animé
│   ├── ParticlesBackground.jsx # Fond de particules animées
│   └── ClickSpark.jsx      # Effet de particules au clic
├── assets/
│   └── cat-svgrepo-com.svg # Image du chat
├── App.jsx                 # Composant racine
├── App.css                 # Styles globaux
└── main.jsx               # Point d'entrée
```

## 🎨 Personnalisation

Vous pouvez facilement personnaliser :

- Les couleurs des particules dans `ParticlesBackground`
- Les couleurs du dégradé dans `GradientText`
- Le nombre de caresses requises dans `Catcha.jsx`
- Les animations et transitions CSS

## 📝 Licence

Ce projet est sous licence MIT. Libre d'utilisation et de modification !

---

**Créé avec ❤️ et beaucoup de miaulements** 🐾
