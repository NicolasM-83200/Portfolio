const Project = require('../models/project.model');
const { S3Client, DeleteObjectCommand } = require('@aws-sdk/client-s3');

// on crée un client S3
const s3 = new S3Client({
  region: process.env.PORTFOLIO_AWS_REGION,
  credentials: {
    accessKeyId: process.env.PORTFOLIO_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.PORTFOLIO_AWS_SECRET_ACCESS_KEY,
  },
});

exports.createProject = async (req, res) => {
  try {
    // on parse le body pour récupérer l'objet project
    const projectObject = JSON.parse(req.body.project);
    // on supprime l'id et l'userId de l'objet project
    delete projectObject._id;
    delete projectObject.userId;
    // on crée un nouvel objet project avec les données de l'objet project et l'userId de la requête
    const project = new Project({
      ...projectObject,
      userId: req.auth.userId,
      // on génère l'url de l'image à partir du nom du fichier
      imageUrl: `https://${process.env.PORTFOLIO_AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${req.file.filename}`,
    });
    // on sauvegarde le projet dans la base de données
    await project.save();
    // on envoie une réponse avec un message de succès et le projet créé
    res.status(201).json({ message: 'Projet créé !', project });
  } catch (error) {
    console.log('Error :', error);
    res.status(400).json({
      error: 'Une erreur est survenue dans le processus de création...',
    });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    // on récupère tous les projets de la base de données
    const projects = await Project.find();
    // on envoie une réponse avec les projets
    res.status(200).json(projects);
  } catch (error) {
    console.log('Error :', error);
    res.status(400).json({
      error: 'Une erreur est survenue dans le processus de récupération...',
    });
  }
};

exports.getOneProject = async (req, res) => {
  try {
    // on récupère le projet correspondant à l'id de la requête
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    console.log('Error :', error);
    res.status(404).json({ error: 'Projet non trouvé !' });
  }
};

exports.modifyProject = async (req, res) => {
  try {
    // on crée un objet project avec les données de la requête
    const projectObject = req.file
      ? // si une image est présente dans la requête, on ajoute l'url de l'image à l'objet project
        {
          ...req.body,
          imageUrl: `https://${process.env.PORTFOLIO_AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${req.file.filename}`,
        }
      : // sinon on crée un objet project avec les données de la requête
        { ...req.body };
    delete projectObject._userId;
    // on récupère le projet correspondant à l'id de la requête
    const project = await Project.findOne({ _id: req.params.id });
    // si l'userId du projet est différent de l'userId de la requête, on envoie une erreur 403
    if (project.userId !== req.auth.userId) {
      return res.status(403).json({ message: 'Non autorisé' });
    }
    // on met à jour le projet correspondant à l'id de la requête avec les données de l'objet project
    await Project.updateOne(
      { _id: req.params.id },
      { ...projectObject, _id: req.params.id }
    );
    res.status(200).json({ message: 'Projet modifié !', projectObject });
  } catch (error) {
    console.log('Error :', error);
    res.status(400).json({
      error: 'Une erreur est survenue dans le processus de modification...',
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    // on supprime l'image du projet de S3
    const data = await s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.PORTFOLIO_AWS_BUCKET_NAME,
        Key: req.body.imageUrl.split('/').pop(),
      })
    );
    console.log('Image supprimée :', data);
    // on récupère le projet correspondant à l'id de la requête
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Projet supprimé !' });
  } catch (error) {
    console.log('Error :', error);
    res.status(400).json({
      error: 'Une erreur est survenue dans le processus de suppression...',
    });
  }
};
