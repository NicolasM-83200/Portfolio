import React from "react";
import { Link } from "react-router-dom";
import GalleryProjects from "../GalleryProjects";
import { useAuth } from "../../provider/authProvider";

const Projects = () => {
  const { token } = useAuth();

  return (
    <section
      id="projects"
      className="flex-col items-center justify-center bg-secondary px-2 lg:px-24"
    >
      <h2>Mes projets</h2>
      {token && (
        <Link to="/ajouter" className="animate-bounce">
          Ajouter un projet ...
        </Link>
      )}
      <GalleryProjects />
    </section>
  );
};

export default Projects;
