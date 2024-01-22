const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      email: req.body.email,
      password: hash,
    });
    await user.save();
    res.status(201).json({ message: "Utilisateur créé !", id: user._id });
  } catch (error) {
    console.log("Error :", error);
    res.status(400).json({ error: "Utilisateur déjà existant !" });
  }
};

exports.login = async (req, res, next) => {
  try {
    const userFound = await User.findOne({ email: req.body.email });
    if (!userFound) {
      return res
        .status(401)
        .json({ error: "Identifiant ou mot de passe incorrect !" });
    }
    const valid = await bcrypt.compare(req.body.password, userFound.password);
    if (!valid) {
      return res
        .status(401)
        .json({ error: "Identifiant ou mot de passe incorrect !" });
    }
    res.status(200).json({
      userId: userFound._id,
      token: jwt.sign({ userId: userFound._id }, process.env.TOKEN_SECRET, {
        expiresIn: "24h",
      }),
    });
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ error });
  }
};
