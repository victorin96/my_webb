import React, { useState } from "react";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgProyectTask from "../resources2/Captura de pantalla (559).png";
import image from "../resources2/Captura de pantalla (559).png";
import ProyectComponent from "../cardSingleProy";

const PortafolioComponent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="content-portafolio" id="portafolio">
      <div className="container-into-portafolio">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Portafolio</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                slidesToShow={1}
                swipeable={true}
              >
                <div className="item">
                  <img src={imgProyectTask} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={imgProyectTask} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={imgProyectTask} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={imgProyectTask} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={imgProyectTask} alt="Image" />
    </section>
  );
};

export default PortafolioComponent;
