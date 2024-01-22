import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="self grid min-h-screen items-center justify-items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-9xl">404</h1>
        <h2 className="text-center text-4xl after:content-none">
          Oups... La page demandée n'existe pas
        </h2>
        <Link to={"/"}>Retour à l'accueil</Link>
      </div>
    </div>
  );
};

export default NoMatch;
