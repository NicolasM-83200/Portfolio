import React, { useState } from "react";
import ProjectForm from "../components/ProjectForm";
import { Link } from "react-router-dom";
import BackArrow from "../components/BackArrow";

const AddProject = () => {
  const [created, setCreated] = useState(false);

  return (
    <div className=" my-5 flex min-h-screen flex-col items-center justify-center">
      <BackArrow />
      {!created ? (
        <>
          <h2>Ajouter un projet</h2>
          <p>Tous les champs sont obligatoires</p>
          <ProjectForm validate={setCreated} />
        </>
      ) : (
        <>
          <h2>Merci !</h2>
          <p>Votre projet à bien été ajouté</p>
          <Link to="/">Retour à l'accueil</Link>
        </>
      )}
    </div>
  );
};

export default AddProject;
