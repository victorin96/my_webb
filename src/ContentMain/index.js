import React, { useState } from "react";
import "./styles.css";
import { FaEnvelope } from "react-icons/fa";
import PortafolioComponent from "./portafolio";
import TypedNavbarItemsComponent from "./navbarItems";
import NavbarComponent from "./navbar";
import HomeComponent from "./incio";

const ContentMainComponent = () => {
  const [loading, setLoading] = useState(true);
  const contactOffset = -100;

  return (
    <div className="container">
      <div className="container-box">
        <NavbarComponent contactOffset={contactOffset} />
        <div className="container-sidebar-content">
          <div className="box-content">
            <div className="content-wrapper">
              <HomeComponent />
              <PortafolioComponent />
              <div className="contendio-inicio" id="contact"></div>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="content-footer-container">
            <div className="gmail-footer-container">
              <p>
                <span>
                  <a className="icon-gmail" style={{ verticalAlign: "middle" }}>
                    <FaEnvelope />
                  </a>{" "}
                  bisquert89@gmail.com
                </span>
              </p>
            </div>
          </div>
          <div className="web-footer-container">
            ©VictorBisquertDev.com 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMainComponent;
