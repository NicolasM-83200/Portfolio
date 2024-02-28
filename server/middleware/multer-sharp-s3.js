const sharp = require('sharp');
const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const AWS = require('aws-sdk');

const s3 = new S3Client({
  region: process.env.PORTFOLIO_AWS_REGION,
  credentials: {
    accessKeyId: process.env.PORTFOLIO_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.PORTFOLIO_AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({ storage: multer.memoryStorage() }).single('image');

// Middleware pour compresser les images
const compressImage = async (req, res, next) => {
  if (!req.file) return next();
  // On récupère le nom de l'image
  const name = req.file.originalname.split(' ').join('_').split('.')[0];
  // On ajoute un timestamp pour rendre le nom unique
  const timestamp = Date.now();
  //  On crée le nom du fichier
  const filename = `${name}_${timestamp}.webp`;

  try {
    // On compresse l'image
    const optimizedImage = await sharp(req.file.buffer)
      .resize(800, 400)
      .webp({ lossless: true })
      .toBuffer();

    // On envoie l'image compressée sur S3
    const uploadParams = {
      Bucket: process.env.PORTFOLIO_AWS_BUCKET_NAME,
      Key: filename,
      ACL: 'public-read',
      Body: optimizedImage,
    };

    await s3.send(new PutObjectCommand(uploadParams));

    // On ajoute le nom du fichier à la requête
    req.file.filename = filename;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Erreur lors de la compression de l'image et de l'envoi sur S3",
    });
  }
};

module.exports = { upload, compressImage };
