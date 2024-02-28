const Project = require('../models/project.model');

exports.createProject = async (req, res) => {
  try {
    const projectObject = JSON.parse(req.body.project);
    // const projectObject = req.body;
    delete projectObject._id;
    delete projectObject.userId;
    const project = new Project({
      ...projectObject,
      userId: req.auth.userId,
      // imageUrl: `${req.protocol}://${req.get('host')}/images/${
      //   req.file.filename
      // }`,
      imageUrl: `https://${process.env.PORTFOLIO_AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${req.file.filename}`,
    });
    await project.save();
    console.log('Project :', project);
    console.log('bucketName: ', process.env.AWS_BUCKET_NAME);
    console.log('fileName: ', req.file.filename);
    res.status(201).json({ message: 'Projet créé !', project });
  } catch (error) {
    console.log('Error :', error);
    console.log(req.body.project);
    res.status(400).json({
      error: 'Une erreur est survenue dans le processus de création...',
    });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
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
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    console.log('Error :', error);
    res.status(404).json({ error: 'Projet non trouvé !' });
  }
};

exports.modifyProject = async (req, res) => {
  try {
    const projectObject = req.file
      ? {
          ...req.body,
          imageUrl: `${req.protocol}://${req.get('host')}/images/${
            req.file.filename
          }`,
        }
      : { ...req.body };
    delete projectObject._userId;
    const project = await Project.findOne({ _id: req.params.id });
    if (project.userId !== req.auth.userId) {
      return res.status(403).json({ message: 'Non autorisé' });
    }
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
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Projet supprimé !' });
  } catch (error) {
    console.log('Error :', error);
    res.status(400).json({
      error: 'Une erreur est survenue dans le processus de suppression...',
    });
  }
};
