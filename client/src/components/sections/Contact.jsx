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
              className="hover:animate-rotate-link h-8"
            />
          </a>
          <a
            href="https://github.com/NicolasM-83200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:animate-rotate-link h-8"
            />
          </a>
        </div>
        <p className="mb-1">
          Vous pouvez me contacter par mail à l'adresse suivante :{" "}
          <a
            href="mailto:manigand.nicolas@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            manigand.nicolas@gmail.com
          </a>
        </p>
        <span>OU</span>
        <p className="mb-2">
          Vous pouvez également me contacter via le formulaire ci-dessous :
        </p>
        <FormContact />
      </div>
    </section>
  );
};

export default Contact;
