import React from "react";
import FormContact from "../FormContact";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" mb-8 flex-col items-center justify-center px-2 lg:px-24"
    >
      <h2>Contact</h2>
      <p>
        Vous pouvez me contacter par mail à l'adresse suivante :{" "}
        <a
          href="mailto:nicomani@hotmail.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          nicomani@hotmail.fr
        </a>
      </p>
      <FormContact />
    </section>
  );
};

export default Contact;
