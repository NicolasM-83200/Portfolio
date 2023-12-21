const mongoose = require("mongoose");
// Plugin pour s'assurer que deux utilisateurs ne peuvent pas partager la même adresse email
const uniqueValidator = require("mongoose-unique-validator");

// Création du schéma de données attendu pour un utilisateur
const userSchema = mongoose.Schema({
  // email unique et obligatoire
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Application du plugin au schéma avant d'en faire un modèle
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
