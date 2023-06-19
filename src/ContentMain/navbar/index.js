import React from "react";
import { Link } from "react-scroll";
import logo from "../resources2/Diseño sin título (6).png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./styles.css";

const NavbarComponent = ({ contactOffset }) => {
  return (
    <header className="box-header">
      <div className="navbar-left">
        <img className="logo-header-img" src={logo} alt="Logo" />
      </div>
      <div className="navbar-right">
        <div className="box-sidebar">
          <div className="inside-sidebar-navbar">
            <Link
              className="navbar navbar-portfolio"
              to="portafolio"
              smooth={true}
              duration={500}
              offset={contactOffset}
            >
              PORTAFOLIO
            </Link>
          </div>
        </div>
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
      </div>
    </header>
  );
};

export default NavbarComponent;
