// Importation des modules
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

// Importation des routes
const projectRoute = require('./routes/project.routes');
const userRoutes = require('./routes/user.routes');

// Création de l'application Express
const app = express();

// Middleware qui permet de parser les requêtes envoyées par le client
app.use(express.json());

// Middleware qui sécurise les en-têtes HTTP
app.use(helmet({ crossOriginResourcePolicy: false }));

// Middleware qui autorise les requêtes cross-origin (CORS)
app.use(cors());

// Middleware qui permet de servir les fichiers statiques du dossier images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Middleware qui permet de servir les routes dédiées aux livres et aux utilisateurs
app.use('/api/projects', projectRoute);
app.use('/api/auth', userRoutes);

module.exports = app;
