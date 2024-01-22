import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="fixed z-10 w-full bg-secondary shadow-xl">
      <div className="mx-auto flex h-[50px] max-w-[1440px] justify-between p-2 text-white lg:px-24">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
