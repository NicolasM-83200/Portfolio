import React, { useState, useEffect } from "react";
import { useAuth } from "../provider/authProvider";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

const Navigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const { token, setToken } = useAuth();

  const [activeSection, setActiveSection] = useState("intro");

  const disconnect = () => {
    localStorage.removeItem("userId");
    setToken();
  };

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Récupérer toutes les sections de votre page
      const sections = document.querySelectorAll("section");

      // Parcourir les sections pour déterminer laquelle est actuellement visible
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top >= 50 && rect.top <= 150) {
          // Mettez à jour l'état avec l'identifiant ou l'index de la section actuelle
          setActiveSection(section.id);
        } else if (
          section.id === "contact" &&
          rect.bottom <= window.innerHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "A propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Mes projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const classLink =
    "relative text-terciary after:absolute after:h-[2px] after:w-0 after:rounded-xl after:-bottom-[12px] after:left-1/2 after:-translate-x-1/2 after:bg-terciary after:animate-link-active";

  return (
    <>
      <nav
        onClick={toggleHamburger}
        className={`${hamburgerOpen ? "right-0 w-screen" : "-right-full"} absolute top-[50px] h-screen  self-center transition-all duration-500 md:relative md:inset-auto md:h-auto md:w-auto md:translate-x-0`}
      >
        <ul
          className={` md:bg-transparent flex h-full flex-col items-center justify-evenly bg-quaternary/60 px-12 text-primary  backdrop-blur transition-all duration-500  md:flex-row md:bg-secondary md:px-0 md:text-quaternary`}
        >
          {links.map((link) => (
            <li key={link.name} className="text-lg md:ml-9">
              <a
                onClick={toggleHamburger}
                href={link.href}
                className={
                  `#${activeSection}` === link.href ? `${classLink}` : ""
                }
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="text-lg md:ml-9">
            {!token ? (
              <NavLink
                to="/connexion"
                className={`transition-all hover:text-terciary`}
              >
                Se connecter
              </NavLink>
            ) : (
              <span
                onClick={disconnect}
                className={`cursor-pointer transition-all hover:text-terciary`}
              >
                Déconnexion
              </span>
            )}
          </li>
        </ul>
      </nav>
      <div
        className="absolute right-2 top-2 z-10 flex items-center justify-center md:hidden"
        onClick={toggleHamburger}
      >
        <Hamburger isOpen={hamburgerOpen} />
      </div>
    </>
  );
};

export default Navigation;
