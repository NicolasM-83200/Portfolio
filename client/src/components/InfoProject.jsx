import React, { useState, useEffect } from "react";
import { getProject, deleteProject } from "../lib/common";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const InfoProject = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const params = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItem() {
      const data = await getProject(params.id);
      if (data) {
        setProject(data);
      }
    }
    getItem();
  }, [params.id]);

  useEffect(() => {
    if (project) {
      setLoading(false);
    }
  }, [project]);

  const onDelete = async (e) => {
    if (e.key && e.key !== "Enter") {
      return;
    }
    const check = confirm("Voulez-vous vraiment supprimer ce projet ?");
    if (check) {
      const del = await deleteProject(project.id);
      navigate("/");
      window.location.reload();
      if (del) {
        setProject((oldValue) => ({ ...oldValue, delete: true }));
      }
    }
  };

  const loadingContent = (
    <h1 className="text-4xl text-primary">Chargement ...</h1>
  );

  const projectContent =
    !loading && !project.delete ? (
      <>
        <div className="grid w-full grid-cols-2 content-center justify-items-center md:grid-cols-3">
          <h2 className="col-start-1 col-end-2 text-3xl text-primary md:col-start-2 md:col-end-3">
            {project.title}
          </h2>
          {token && (
            <div className="col-start-2 col-end-3 flex items-center md:col-start-3 md:col-end-4">
              <Link
                to={`/projet/modifier/${project.id}`}
                className="text-secondary"
              >
                modifier
              </Link>
              <span className="px-2 text-secondary"> / </span>
              <button
                className="text-red-500"
                onKeyUp={onDelete}
                onClick={onDelete}
              >
                supprimer
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            className="object-cover"
            src={project.imageUrl}
            alt={`screenshot de ${project.title}`}
          />

          <div className="w-full text-black">
            <h3 className="text-2xl text-primary">Description:</h3>
            <p className="mb-4 line-clamp-5 overflow-y-auto p-0 text-left md:line-clamp-3 md:overflow-y-auto">
              {project.description}
            </p>
            <div className="relative grid grid-cols-2 before:absolute before:-top-2 before:left-1/2 before:h-[1px] before:w-[90%] before:-translate-x-1/2  before:bg-primary">
              <div className="relative flex flex-col items-start after:absolute after:right-0 after:h-full after:w-[1px] after:bg-primary">
                <div className="">
                  <p className="mb-0">Lien vers le repo Github:</p>
                  <a
                    className="rounded-xl bg-secondary px-2 text-quaternary  transition-all hover:bg-quaternary hover:text-secondary"
                    href={project.githubUrl}
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
                {project?.projectUrl && (
                  <div className="">
                    <p className="mb-0">Lien vers le Site web:</p>
                    <a
                      className="rounded-xl bg-secondary px-2 text-quaternary  transition-all hover:bg-quaternary hover:text-secondary"
                      href={project.projectUrl}
                      target="_blank"
                    >
                      Site web
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start pl-2">
                <p className="mb-0">Technologies utilisées:</p>
                <div className="flex flex-wrap items-center justify-evenly gap-1">
                  {project.technologies.map((technologie) => (
                    <span
                      className="rounded-2xl bg-primary px-2 py-1 text-xs text-white"
                      key={technologie}
                    >
                      {technologie}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ) : null;

  const deletedContent = project?.delete ? (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl text-primary">Projet supprimé</h2>
      {/* <Link
        className="rounded-xl bg-secondary px-2 text-quaternary  transition-all hover:bg-quaternary hover:text-secondary"
        to="/"
      >
        Retour à l'accueil
      </Link> */}
    </div>
  ) : null;

  return (
    <div className="flex flex-col items-center">
      {loading ? loadingContent : null}
      {projectContent}
      {project?.delete ? deletedContent : null}
    </div>
  );
};

export default InfoProject;
