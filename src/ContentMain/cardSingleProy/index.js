import React from "react";
import "./styles.css";

const ProyectComponent = ({ itemProyect, setShowSingleProyect }) => {
  const closeSingleProyectFunc = () => {
    setShowSingleProyect(false);
  };
  return (
    <div className="singleProyect-card-container">
      <div className="singleProyect-card-container-img">
        <img
          className="singleProyect-image-card"
          src={itemProyect.img[0].img1}
          alt="Proyecto"
        />
      </div>
      <div className="singleProyect-longDescription-card">
        <p>{itemProyect.longDescription}</p>
      </div>
      <button onClick={closeSingleProyectFunc}>salir</button>
    </div>
  );
};

export default ProyectComponent;
