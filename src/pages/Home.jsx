import React from "react";
import Logo from "../assets/Logo_ML@2x.png";

const Home = () => {
  return (
    <section className="home-container">
      <img src={Logo} alt="MELI LOGO" />
      <h2>Bienvenido</h2>
      <p>Realiza una búsqueda para ver tus productos favoritos</p>
    </section>
  );
};

export default Home;
