import React from "react";
import "./styles.css";

const ProjectComponent = ({ project }) => {
  const description2 = project.description2.split("/");
  const descriptionResponsible2 = project.descriptionResponsible2.split("/");
  return (
    <div className="container-project-page">
      <h1 className="h1-title-project">
        <span className="text-gradient">{project.title}</span>
      </h1>
      <section className="section-project">
        <img src={project.images[0]} alt="Image 1" />
        <img src={project.images[1]} alt="Image 2" />
        <img src={project.images[2]} alt="Image 3" />
        <img src={project.images[3]} alt="Image 4" />
      </section>
      <section className="section-project">
        <img src={project.images[4]} alt="Image 5" />
        <img src={project.images[5]} alt="Image 6" />
        <img src={project.images[6]} alt="Image 7" />
        <img src={project.images[7]} alt="Image 8" />
      </section>
      <section className="section-project">
        <img src={project.images[8]} alt="Image 9" />
        <img src={project.images[9]} alt="Image 10" />
        <img src={project.images[10]} alt="Image 11" />
        <img src={project.images[11]} alt="Image 12" />
      </section>
      <div className="container-description-project">
        <h2 className="h2-description">Descripción del proyecto</h2>
        <p className="container-description1">
          {project.description1}
          <br />
        </p>
        {description2.map((point, index) => (
          <p className="pointers-description" key={index}>
            {point.trim()}
          </p>
        ))}
        <p className="container-descriptionResponsible1">
          {project.descriptionResponsible1}
        </p>
        {descriptionResponsible2.map((point, index) => (
          <p className="pointers-description" key={index}>
            {point.trim()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
