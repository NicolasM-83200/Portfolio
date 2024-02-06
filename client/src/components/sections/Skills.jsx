import React from "react";
import {
  html,
  css,
  js,
  react,
  tailwind,
  node,
  express,
  mongodb,
} from "../../assets/icons";

const Skills = () => {
  return (
    <section id="skills" className="flex-col items-center justify-center">
      <h2>Mes compétences</h2>
      <div className="flex w-full justify-around">
        <img src={html} alt="icon html" />
        <img src={css} alt="icon css" />
        <img src={js} alt="icon javascript" />
      </div>
      <p>
        J'ai acquis une solide expertise dans un large éventail de technologies
        essentielles au développement web. Mon savoir-faire s'étend de la
        construction de l'ossature avec HTML5, la stylisation avec CSS3, jusqu'à
        la dynamisation des pages avec JavaScript. J'ai approfondi mes
        compétences en optimisation SEO pour assurer une visibilité optimale des
        sites que je développe.
      </p>
      <div className="flex w-full justify-around">
        <img src={react} alt="icon react" />
        <img src={tailwind} alt="icon tailwind" />
      </div>
      <p>
        Je maîtrise également des bibliothèques modernes tels que React, qui me
        permettent de créer des interfaces utilisateur interactives et
        réactives. Cette compétence m'a permis de concevoir des expériences
        utilisateur fluides et hautement performantes, répondant aux normes les
        plus élevées de l'industrie.
      </p>
      <div className="flex w-full justify-around">
        <img src={node} alt="icon node" />
        <img src={express} alt="icon express" />
        <img src={mongodb} alt="icon mongodb" />
      </div>
      <p>
        Du côté du back-end, je me suis plongé dans l'écosystème Node.js et
        Express.js, ce qui m'a permis de construire des applications web
        robustes et évolutives. J'ai également acquis une expertise dans la
        gestion de bases de données en utilisant MongoDB, garantissant une
        manipulation efficace des données et une intégrité optimale.
      </p>
      <p>
        Ce qui caractérise ma méthode, c'est ma capacité à travailler de manière
        complète, du front-end au back-end, afin d'assurer une expérience
        utilisateur intégrée et fluide. Mon parcours de formation m'a doté des
        compétences nécessaires pour concevoir, développer et optimiser des
        projets web de A à Z.
      </p>
    </section>
  );
};

export default Skills;
