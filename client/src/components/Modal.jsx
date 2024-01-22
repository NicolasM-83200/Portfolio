import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import InfoProject from "./InfoProject";
import { getProjects } from "../lib/common";

const Modal = () => {
  const modalRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const observeRefValue = modalRef.current;
    disableBodyScroll(observeRefValue);
    return () => {
      if (observeRefValue) {
        enableBodyScroll(observeRefValue);
      }
    };
  }, []);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjectsList() {
      const data = await getProjects();
      if (data) {
        setProjects(data);
      }
    }
    getProjectsList();
  }, []);

  const project = projects.find((project) => project._id === id);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[1] flex items-center justify-center backdrop-blur"
      onClick={() => navigate("/")}
    >
      <div
        className="fixed flex w-[80vw] max-w-[1024px] flex-col items-center justify-center rounded-lg bg-quaternary p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <InfoProject projectData={project} />
      </div>
    </div>
  );
};

export default Modal;
