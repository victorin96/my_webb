import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import { FaEnvelope } from "react-icons/fa";
import PortafolioComponent from "./portafolio";
import NavbarComponent from "./navbar";
import HomeComponent from "./incio";
import ProjectComponent from "./showProject";

const ContentMainComponent = () => {
  const [showProject, setShowProject] = useState(false);
  const [project, setProject] = useState();
  const contactOffset = -100;

  useEffect(() => {
    document.title = "Victor Bisquert Web";
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      setShowProject(false);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const popstate = () => {
      setShowProject(false);
    };

    window.onpopstate = popstate;

    return () => {
      window.onpopstate = null;
    };
  }, []);

  const clickProject = (project) => {
    setProject(project);
    setShowProject(true);
  };

  if (showProject) {
    return (
      <div className="container">
        <ProjectComponent project={project} />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Helmet>
          <title>Victor Bisquert Web</title>
        </Helmet>
        <div className="container-box">
          <NavbarComponent contactOffset={contactOffset} />
          <div className="container-sidebar-content">
            <div className="box-content">
              <div className="content-wrapper">
                <HomeComponent />
                <PortafolioComponent clickProject={clickProject} />
                <Routes>
                  <Route
                    path="/project/:id"
                    element={
                      showProject ? (
                        <ProjectComponent
                          project={project}
                          setShowProject={setShowProject}
                        />
                      ) : null
                    }
                  />
                </Routes>
                <div className="contendio-inicio" id="contact"></div>
              </div>
            </div>
          </div>
          <div className="footer-container">
            <div className="content-footer-container">
              <div className="gmail-footer-container">
                <p>
                  <span>
                    <a
                      className="icon-gmail"
                      style={{ verticalAlign: "middle" }}
                    >
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
    </BrowserRouter>
  );
};

export default ContentMainComponent;
