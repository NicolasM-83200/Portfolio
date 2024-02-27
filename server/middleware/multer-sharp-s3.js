const sharp = require('sharp');
const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const s3 = new S3Client();

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
      Bucket: 'cyclic-unusual-clam-suspenders-eu-west-1',
      Key: filename,
      Body: optimizedImage,
      ACL: 'public-read',
    };

    await s3.send(new PutObjectCommand(uploadParams));

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Erreur lors de la compression de l'image et de l'envoi sur S3",
    });
  }
};

module.exports = { upload, compressImage };
