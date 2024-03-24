import React from "react";
import photoProfil from "../../assets/images/profil.webp";
import titreSvgDesktop from "../../assets/images/titre-portfolio.svg";
import titreSvgMobile from "../../assets/images/titre-portfolio-mobile.svg";

const Intro = () => {
  return (
    <section
      id="intro"
      className="mt-[50px] h-[calc(100vh-50px)] items-center justify-center"
    >
      <span className="absolute bottom-0 left-1/2 size-[460px] -translate-x-1/2 translate-y-1/2 animate-scale rounded-full bg-secondary md:-left-0 md:top-0 md:-translate-x-1/2 md:translate-y-1/2"></span>
      <div className="flex flex-col-reverse items-center gap-5 md:flex-row">
        <div className="basis-1/2 animate-trans-left self-center text-white">
          <img
            className="hidden md:block"
            src={titreSvgDesktop}
            alt="Titre 'Bonjour ! Je suis Nicolas Manigand Développeur Web.'"
          />
          <img
            className="block md:hidden"
            src={titreSvgMobile}
            alt="Titre 'Bonjour ! Je suis Nicolas Manigand Développeur Web.'"
          />
          <p className="md:mt-6 md:text-left md:text-xl">
            <strong>
              Je suis passionné par l&apos;innovation, la résolution de
              problèmes et la création d&apos;expériences en ligne
              exceptionnelles.
            </strong>{" "}
            Mon portfolio reflète non seulement mes compétences techniques, mais
            aussi mon engagement envers l&apos;excellence. Explorez mon travail
            pour découvrir comment je peux apporter une valeur ajoutée à votre
            projet.
          </p>
        </div>
        <div className="flex basis-1/2 justify-center md:justify-end">
          <img
            id="profileImage"
            className="w-[70%] md:w-auto"
            src={photoProfil}
            width={470}
            height={654}
            alt="Photo de profil de Nicolas Manigand"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
