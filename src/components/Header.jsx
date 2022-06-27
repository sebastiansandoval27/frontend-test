import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../assets/Logo_ML.png";
import SearchBar from "./SearchBar";

const Header = () => {
  const history = useHistory();

  return (
    <header className="header">
      <div className="content">
        <img src={Logo} alt="Logo" onClick={() => history.push("/")} />
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
