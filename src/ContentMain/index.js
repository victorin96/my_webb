import React, { useEffect, useState } from "react";
import "./styles.css";
import imageLogo from "../resources/Diseño sin título (6).png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../fonts/Neucha-Regular.ttf";
import { Link } from "react-scroll";
import PortafolioComponent from "./portafolio";
import TypedNavbarItemsComponent from "./navbarItems";

const ContentMainComponent = () => {
  const [loading, setLoading] = useState(true);
  const contactOffset = -100;

  return (
    <div className="container">
      <header className="box-header">
        <img className="logo-header-img" src={imageLogo} />
        <div className="logos-rrss-header">
          <a
            href="https://github.com/victorin96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/victorbisquert/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon-linkedin" />
          </a>
        </div>
      </header>
      <div className="container-sidebar-content">
        <div className="box-sidebar">
          <div className="inside-sidebar-navbar">
            <Link
              className="navbar navbar-home"
              to="home"
              smooth={true}
              duration={500}
              offset={contactOffset}
            >
              INICIO
            </Link>
            <Link
              className="navbar navbar-aboutMe"
              to="aboutMe"
              smooth={true}
              duration={500}
              offset={contactOffset}
            >
              SOBRE MI
            </Link>
            <Link
              className="navbar navbar-portfolio"
              to="portafolio"
              smooth={true}
              duration={500}
              offset={contactOffset}
            >
              PORTAFOLIO
            </Link>
            <Link
              className="navbar navbar-contact"
              to="contact"
              smooth={true}
              duration={500}
              offset={contactOffset}
            >
              CONTACTO
            </Link>
          </div>
        </div>
        <div className="box-content">
          <div className="content-wrapper">
            <div className="contendio-inicio" id="home">
              <h2>Victor Bisquert</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              posuere dignissim orci vel rutrum. Phasellus non odio sagittis,
              vehicula turpis at, facilisis est. In porttitor augue a ultrices
              blandit. Sed auctor hendrerit enim, non dignissim nisi ultricies
              vehicula. Donec non leo nec lacus pretium ullamcorper.
              Pellentesque tincidunt dolor ut dolor tempor, et vehicula nibh
              interdum.
            </div>
            <div className="contendio-inicio" id="aboutMe">
              <h2>Sobre mi</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              posuere dignissim orci vel rutrum. Phasellus non odio sagittis,
              vehicula turpis at, facilisis est. In porttitor augue a ultrices
              blandit. Sed auctor hendrerit enim, non dignissim nisi ultricies
              vehicula. Donec non leo nec lacus pretium ullamcorper.
              Pellentesque tincidunt dolor ut dolor tempor, et vehicula nibh
              interdum. Maecenas congue, turpis vel aliquet suscipit, risus
              velit auctor erat, eu vulputate lacus sem convallis sem. Duis
              venenatis, ligula in tincidunt cursus, sapien purus placerat enim,
              non commodo ex mi sit amet massa.
            </div>
            <div className="contendio-portafolio" id="portafolio">
              <PortafolioComponent />
            </div>
            <div className="contendio-inicio" id="contact">
              <h2>Contacto</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              posuere dignissim orci vel rutrum. Phasellus non odio sagittis,
              vehicula turpis at, facilisis est. In porttitor augue a ultrices
              blandit. Sed auctor hendrerit enim, non dignissim nisi ultricies
              vehicula. Donec non leo nec lacus pretium ullamcorper.
            </div>
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
        <div className="web-footer-container">©VictorBisquertDev.com 2023</div>
      </div>
    </div>
  );
};

export default ContentMainComponent;
