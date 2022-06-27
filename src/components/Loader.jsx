import React from "react";
import Logo from "../assets/Logo_ML@2x.png";

const Loader = () => {
  return (
    <div className="loader">
      <img src={Logo} alt="MELI Logo" />
      <h3>Loader</h3>
    </div>
  );
};

export default Loader;
