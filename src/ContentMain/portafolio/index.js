import React, { useState } from "react";
import "./styles.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import imgTaskGeneral from "../resources2/task/taskGeneral2.png";
import imgTaskCreate from "../resources2/task/taskCrear.png";
import imgTaskEdit from "../resources2/task/taskEditar.png";
import imgTaskSubtask from "../resources2/task/taskSubtareas.png";
import imgTaskSearch from "../resources2/task/taskBuscardor.png";
import imgTaskInfoResp from "../resources2/task/taskInfoResponsable.png";
import imgTaskSearchResp from "../resources2/task/taskBuscadorResponsable.png";
import imgTaskSearchNotResp from "../resources2/task/taskNoHayResp.png";
import ProjectComponent from "../showProject";

const PortafolioComponent = ({ clickProject }) => {
  const [item, setItem] = useState([
    {
      id: "task",
      title: "Gestor de tareas",
      description1:
        "El ejercicio consiste en desarrollar una aplicación de gestión de tareas utilizando React. La aplicación debe permitir al usuario crear, editar, eliminar y organizar tareas, así como también realizar un seguimiento de su estado, esfuerzo, encargado y fechas. Estas son las características y funcionalidades de la aplicación:",
      description2:
        "1. Formulario de creación de tareas: El usuario puede ingresar información como título, notas, esfuerzo, estado, subtareas, encargado, fecha de inicio y fecha de fin para crear una tarea./ 2. Jerarquía de tareas: Las tareas pueden tener subtareas y las subtareas también pueden tener más subtareas. Esto permite una estructura de tareas anidada./ 3. Estados de las tareas: Las tareas pueden tener tres estados: por hacer, en curso y finalizada. Esto permite al usuario rastrear el progreso de cada tarea./ 4. Tablero de tareas: Existe un tablero donde las tareas se distribuyen según su estado. Esto brinda una visión general de todas las tareas y su estado actual. Al hacer clic en una tarea, se puede acceder a una vista detallada que muestra las subtareas de la tarea seleccionada en el mismo tablero./ 5. Eliminación de tareas: El usuario puede eliminar tareas individuales según sea necesario./ 6. Arrastrar y soltar: Las tareas se pueden arrastrar y soltar entre las secciones de estado en el tablero. Esto proporciona flexibilidad al usuario para cambiar el estado de una tarea según el progreso real./ 7. Edición de tareas: Los datos de una tarea se pueden editar mediante un modal. Esto permite al usuario actualizar la información de la tarea según sea necesario./ 8. Exportación e importación de datos: Se puede descargar todo el árbol de tareas en formato JSON como un archivo de texto. Además, se puede importar un archivo JSON para cargar un nuevo árbol de tareas en la aplicación. Estos son los puntos principales de la gestión de tareas.",
      descriptionResponsible1:
        "También tenemos el apartado de responsables. El apartado de Responsables es una funcionalidad añadida al ejercicio original de gestión de tareas. Esta funcionalidad permite gestionar y asignar responsables a las tareas existentes en el sistema. A continuación se describe el flujo y las características principales de esta funcionalidad:",
      descriptionResponsible2:
        "1. Creación de responsables./ 2. Edición de responsables./ 3. Eliminación de responsables./ 4. Ver la información de responsables./ 5. Asignación de Responsables a Tareas. Otras características es que se han implementado diversas características adicionales, como la posibilidad de filtrar los responsables existentes por nombre, la opción de agregar o eliminar una foto de perfil del responsable y la visualización del número total de tareas asignadas a cada responsable, así como los puntos de esfuerzo asociados.",
      images: [
        imgTaskGeneral,
        imgTaskCreate,
        imgTaskEdit,
        imgTaskSubtask,
        imgTaskSearch,
        imgTaskInfoResp,
        imgTaskSearchResp,
        imgTaskSearchNotResp,
      ],
    },
    { id: "energyApp", title: "energyApp", description: "", images: [] },
    { id: "hoursApp", title: "hoursApp", description: "", images: [] },
    { id: "movies", title: "movies", description: "", images: [] },
  ]);

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

  const handleClickProject = (project) => {
    clickProject(project);
  };

  /*const handleCardClick = (project) => {
    const currentURL = window.location.href;
    const newURL = `${currentURL}/${project.id}`;
    window.open(newURL, "_blank");
    setShowProject(true);
  };*/

  return (
    <section className="content-portafolio" id="portafolio">
      <div className="container-into-portafolio">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="h2-portafolio">Portafolio</h2>
              <p className="p-portafolio"></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                slidesToShow={1}
                swipeable={true}
              >
                {item.map((project) => (
                  <div className="item link-card" key={project.id}>
                    <Link
                      to={`/project/${project.id}`}
                      onClick={() => handleClickProject(project)}
                    >
                      {project.images.length > 0 && (
                        <img src={project.images[0]} alt="Image" />
                      )}
                      <h5>{project.title}</h5>
                    </Link>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortafolioComponent;
