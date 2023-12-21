const sharp = require("sharp");
const multer = require("multer");

const storage = multer.memoryStorage();
// fait appel à la fonction memoryStorage() de multer qui permet de stocker les fichiers dans la mémoire
const upload = multer({ storage }).single("image");

// Middleware pour compresser les images
const compressImage = async (req, res, next) => {
  if (!req.file) return next();
  // On récupère le nom de l'image
  const name = req.file.originalname.split(" ").join("_").split(".")[0];
  // On ajoute un timestamp pour rendre le nom unique
  const timestamp = Date.now();
  //  On crée le nom du fichier
  const filename = `${name}_${timestamp}.webp`;
  // On crée le chemin du fichier
  const path = `images/${filename}`;

  // On compresse l'image
  await sharp(req.file.buffer)
    .resize(null, 560)
    .webp({ lossless: true })
    .toFile(path);

  // On ajoute le nom du fichier à la requête
  req.file.filename = filename;
  next();
};

module.exports = { upload, compressImage };
