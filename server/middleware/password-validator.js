const passwordValidator = require("password-validator");

// The validatePassword middleware is used to check whether a password meets certain security requirements
const validatePassword = (req, res, next) => {
  const userPassword = req.body.password;

  const schema = new passwordValidator();
  schema
    .is()
    .min(8)
    .has()
    .uppercase()
    .has()
    .digits(1)
    .has()
    .symbols(1)
    .has()
    .not()
    .spaces();

  if (!schema.validate(userPassword)) {
    return res.status(400).json({
      error:
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un symbole.",
    });
  }
  next();
};

module.exports = validatePassword;
