import React from "react";
import "./styles.css";
import logo from "../resources2/logo.svg";

const ProyectComponent = ({ itemProyect, setShowSingleProyect }) => {
  const closeSingleProyectFunc = () => {
    setShowSingleProyect(false);
  };
  return (
    <div className="singleProyect-card-container">
      <div className="singleProyect-card-container-img">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="singleProyect-longDescription-card">
        <p>{itemProyect.longDescription}</p>
      </div>
      <button onClick={closeSingleProyectFunc}>salir</button>
    </div>
  );
};

export default ProyectComponent;
