const sharp = require('sharp');
const multer = require('multer');
const AWS = require('aws-sdk');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      'https://s3.amazonaws.com/cyclic-unusual-clam-suspenders-eu-west-1/'
    );
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Middleware pour compresser les images
const compressImage = async (req, res, next) => {
  if (!req.file) return next();
  // On récupère le nom de l'image
  const name = req.file.originalname.split(' ').join('_').split('.')[0];
  // On ajoute un timestamp pour rendre le nom unique
  const timestamp = Date.now();
  //  On crée le nom du fichier
  const filename = `${name}_${timestamp}.webp`;
  // On crée le chemin du fichier
  const path = `https://s3.amazonaws.com/cyclic-unusual-clam-suspenders-eu-west-1/${filename}`;

  // On compresse l'image
  await sharp(req.file.buffer)
    .resize(800, 400)
    .webp({ lossless: true })
    .toFile(path);

  // On ajoute le nom du fichier à la requête
  req.file.filename = filename;
  next();
};

module.exports = { upload, compressImage };
