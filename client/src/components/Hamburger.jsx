import React from "react";

const Hamburger = () => {
  return (
    <div className="flex h-8 w-8 cursor-pointer flex-col justify-around md:hidden">
      <div className="h-1 w-8 rounded-xl bg-white transition-all duration-300"></div>
      <div className="h-1 w-8 rounded-xl bg-white transition-all duration-300"></div>
      <div className="h-1 w-8 rounded-xl bg-white transition-all duration-300"></div>
    </div>
  );
};

export default Hamburger;
