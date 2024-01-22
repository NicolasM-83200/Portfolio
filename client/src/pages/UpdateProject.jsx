import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { APP_ROUTES } from "../utils/constants";
import ProjectForm from "../components/ProjectForm";
import { getProject } from "../lib/common";
import BackArrow from "../components/BackArrow";

const UpdateProject = () => {
  const [project, setProject] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [created, setCreated] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate(APP_ROUTES.SIGN_IN);
    }
  }, [token]);

  useEffect(() => {
    async function getItem() {
      const data = await getProject(params.id);
      if (data) {
        setProject(data);
      }
    }
    getItem();
  }, []);

  return (
    <div className="my-5 flex min-h-screen flex-col items-center justify-center">
      <BackArrow />
      {!created ? (
        <>
          <h2 className="mb-0">Modifier un projet</h2>
          <p>Vous pouvez modifier tous les champs</p>
          <ProjectForm project={project} validate={setCreated} />
        </>
      ) : (
        <>
          <h2>Merci !</h2>
          <p>Votre projet à bien été mis à jour</p>
          <Link to="/">Retour à l'accueil</Link>
        </>
      )}
    </div>
  );
};

export default UpdateProject;
