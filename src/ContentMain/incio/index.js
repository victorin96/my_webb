import React from "react";
import "./styles.css";
import { Button } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";

const HomeComponent = () => {
  const handleOpenResume = () => {
    window.open(
      "https://drive.google.com/file/d/17mGjEmUlkdfFdaGEeI2x4Fem1eyXXF6A/view",
      "_blank"
    );
  };

  return (
    <div className="contenido-inicio" id="home">
      <div className="container-info-me">
        <h1 className="h1-title">
          Hola! Soy <span className="text-gradient">Víctor Bisquert</span>
        </h1>
        <h2 className="h2-title">Desarrollador full stack</h2>
        <p className="instructions">
          Apasionado y comprometido programador junior full stack con formación
          en desarrollo multiplataforma. Me entusiasma aprender y aplicar nuevas
          tecnologías para crear soluciones innovadoras
          <br />
        </p>
        <button className="button-cv" onClick={handleOpenResume}>
          Descargar CV
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
