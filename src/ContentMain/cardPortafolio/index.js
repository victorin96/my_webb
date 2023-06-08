import React from "react";
import "./styles.css";

const CardComponent = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card-container-image">
        <div className="image-card">{item.image}</div>
      </div>
      <div className="card-container-info">
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
