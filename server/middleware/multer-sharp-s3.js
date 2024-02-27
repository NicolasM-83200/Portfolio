const multer = require('multer');
const s3storage = require('multer-sharp-s3');
const aws = require('aws-sdk');

// aws.config.update({
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   region: process.env.AWS_REGION,
// });

const s3 = new aws.S3();

const storage = s3storage({
  s3,
  Bucket: 'cyclic-unusual-clam-suspenders-eu-west-1',
  resize: {
    width: 800,
    height: 400,
  },
  toFormat: 'webp',
});

const upload = multer({ storage: storage }).single('image');

exports.upload = upload;
