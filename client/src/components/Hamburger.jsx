import PropTypes from "prop-types";
import React from "react";

const Hamburger = ({ isOpen }) => {
  return (
    <div className="relative h-8 w-9">
      <div
        className={`absolute top-0 h-1 w-full rounded-xl bg-white transition-all duration-300 ${isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""}`}
      ></div>
      <div
        className={`absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-xl bg-white transition-all duration-300 ${isOpen ? "translate-x-full opacity-0" : ""}`}
      ></div>
      <div
        className={`absolute bottom-0 h-1 w-full rounded-xl bg-white transition-all duration-300 ${isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""}`}
      ></div>
    </div>
  );
};

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Hamburger;
