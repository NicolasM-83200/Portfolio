import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getProjects } from "../lib/common";

const GalleryProjects = () => {
  const location = useLocation();
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProjectsList() {
      const data = await getProjects();
      if (data) {
        setProjects(data);
      }
    }
    getProjectsList();
  }, []);

  useEffect(() => {
    if (projects !== null) {
      setLoading(false);
    }
  }, [projects]);

  const loader = (
    <div className="flex flex-row gap-2">
      <div className="h-4 w-4 animate-bounce rounded-full bg-quaternary"></div>
      <div className="h-4 w-4 animate-bounce rounded-full bg-quaternary [animation-delay:-.3s]"></div>
      <div className="h-4 w-4 animate-bounce rounded-full bg-quaternary [animation-delay:-.5s]"></div>
    </div>
  );

  return (
    <>
      {loading ? (
        <div className="flex min-h-36 flex-col items-center justify-center">
          <h1 className="text-4xl text-quaternary">
            Chargement en cours
            <span className="ml-7 inline-block">{loader}</span>{" "}
          </h1>
        </div>
      ) : (
        <div className="my-5 grid grid-cols-1 items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project._id}
              to={`/modal/${project._id}`}
              state={{ previousLocation: location }}
              className="h-[340px] w-[340px]"
            >
              <figure className="relative h-full w-full rounded-2xl transition-all duration-500 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-2xl after:bg-gradient-to-b after:from-[#ffffff00] after:from-75% after:to-[#000000b9] hover:scale-105 hover:after:from-0%">
                <img
                  className="h-[340px] w-[340px] rounded-2xl object-cover drop-shadow-xl"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <figcaption className="absolute bottom-2 left-2 z-[1] text-lg font-medium text-white">
                  {project.title}
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default GalleryProjects;
