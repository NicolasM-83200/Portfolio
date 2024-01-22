const API_URL = "https://portfolio-manigand-nicolas.onrender.com";

export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  PROJECTS: `${API_URL}/api/projects`,
};

export const APP_ROUTES = {
  SIGN_UP: "/inscription",
  SIGN_IN: "/connexion",
  ADD_PROJECT: "/ajouter",
  PROJECT: "/projet/:id",
  UPDATE_PROJECT: "projet/modifier/:id",
};
