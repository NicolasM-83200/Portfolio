import React from "react";

const Hamburger = ({ isOpen }) => {
  return (
    <div className="flex h-8 w-8 cursor-pointer flex-col justify-around md:hidden">
      <div
        className={`h-1 w-8 rounded-xl bg-white transition-all duration-300 ${isOpen ? "translate-y-[275%] rotate-45" : "translate-y-0 rotate-0"}`}
      ></div>
      <div
        className={`h-1 w-8 rounded-xl bg-white transition-all duration-300 ${isOpen ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
      ></div>
      <div
        className={`h-1 w-8 rounded-xl bg-white transition-all duration-300 ${isOpen ? "-translate-y-[275%] -rotate-45" : "translate-y-0 rotate-0"}`}
      ></div>
    </div>
  );
};

export default Hamburger;
