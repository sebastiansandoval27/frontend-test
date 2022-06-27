import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../assets/Logo_ML@2x.png";

const NotFound = () => {
  const history = useHistory();

  return (
    <section className="not-found">
      <img src={Logo} alt="MELI LOGO" />
      <h2>Recurso no encontrado</h2>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Ir al inicio
      </button>
    </section>
  );
};

export default NotFound;
