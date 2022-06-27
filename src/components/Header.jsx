import React from "react";
import Logo from "../assets/Logo_ML.png";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <div className="content">
        <img src={Logo} alt="Logo" />
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
