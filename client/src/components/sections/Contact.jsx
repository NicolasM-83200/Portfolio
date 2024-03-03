import React from "react";
import FormContact from "../FormContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" mb-8 flex-col items-center justify-center px-2 lg:px-24"
    >
      <h2>Contact</h2>
      <div className="flex flex-col items-center">
        <div className="mb-5 flex gap-6">
          <a
            href="https://www.linkedin.com/in/nicolas-manigand-a6910b2a6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-8 hover:animate-rotate-link"
            />
          </a>
          <a
            href="https://github.com/NicolasM-83200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-8 hover:animate-rotate-link"
            />
          </a>
          <a
            href="./src/assets/CV_Manigand_Nicolas.pdf"
            download="CV_Manigand_Nicolas.pdf"
            className="mx-auto rounded-3xl border border-quaternary bg-primary px-3 py-1 text-white transition-all duration-300 hover:bg-quaternary hover:text-primary"
          >
            Téléchargez mon CV
          </a>
        </div>
        <p className="mb-2">
          Vous pouvez également me contacter via le formulaire ci-dessous :
        </p>
        <FormContact />
      </div>
    </section>
  );
};

export default Contact;
