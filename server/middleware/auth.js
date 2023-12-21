const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // on récupère le token dans le header de la requête
    const token = req.headers.authorization.split(" ")[1];
    // on décode le token avec la clé secrète
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    // on extrait l'ID utilisateur du token
    const userId = decodedToken.userId;
    // On ajoute l'ID utilisateur à l'objet req.auth afin de le rendre accessible dans les middlewares
    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
