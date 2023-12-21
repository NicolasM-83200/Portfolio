require("dotenv").config({ path: "./config/.env" });
const http = require("http");
const app = require("./app");

// Normalise le port d'écoute du serveur
const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;

  return false;
};

// Définition du port d'écoute du serveur
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Gestion des erreurs
const errorHandler = (error) => {
  if (error.syscall !== "listen") throw error;
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// Création du serveur
const server = http.createServer(app);

// Gestionnaire d'évènements
server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

// Le serveur écoute le port défini
server.listen(port);
