import React, { useState } from "react";
import "./styles.css";
import image from "../resources2/Captura de pantalla (559).png";
import ProyectComponent from "../cardSingleProy";

const PortafolioComponent = () => {
  const [showSingleProyect, setShowSingleProyect] = useState(false);
  const [itemProyect, setItemProyect] = useState();

  const proyects = [
    {
      type: "Proyecto 1",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Namposuere dignissim orci vel rutrum. Phasellus non odio sagittis,vehicula turpis at, facilisis est. In porttitor augue a ultricesblandit. Sed auctor hendrerit enim, non dignissim nisi ultriciesvehicula. Donec non leo nec lacus pretium ullamcorper.Pellentesque tincidunt dolor ut dolor tempor, et vehicula nibhinterdum. Maecenas congue, turpis vel aliquet suscipit, risusvelit auctor erat, eu vulputate lacus sem convallis sem. Duisvenenatis, ligula in tincidunt cursus, sapien purus placerat enim,non commodo ex mi sit amet massa.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere dignissim orci vel rutrum.",
      img: [
        {
          img1: "https://www.educaciontrespuntocero.com/wp-content/uploads/2017/01/paginas_web-pixabay.png",
        },
        {
          img2: "https://www.yeeply.com/wp-content/uploads/2017/04/crear-una-pagina-web-para-vender-2-1024x728-1.jpg",
        },
        {
          img3: "https://profesionistas.org.mx/wp-content/uploads/2018/06/Comocrearunapaginaweb.png",
        },
      ],
    },
    {
      type: "Proyecto 2",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Namposuere dignissim orci vel rutrum. Phasellus non odio sagittis,vehicula turpis at, facilisis est. In porttitor augue a ultricesblandit. Sed auctor hendrerit enim, non dignissim nisi ultriciesvehicula. Donec non leo nec lacus pretium ullamcorper.Pellentesque tincidunt dolor ut dolor tempor, et vehicula nibhinterdum. Maecenas congue, turpis vel aliquet suscipit, risusvelit auctor erat, eu vulputate lacus sem convallis sem. Duisvenenatis, ligula in tincidunt cursus, sapien purus placerat enim,non commodo ex mi sit amet massa.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere dignissim orci vel rutrum.",
      img: [
        {
          img1: "https://www.educaciontrespuntocero.com/wp-content/uploads/2017/01/paginas_web-pixabay.png",
        },
        {
          img2: "https://www.yeeply.com/wp-content/uploads/2017/04/crear-una-pagina-web-para-vender-2-1024x728-1.jpg",
        },
        {
          img3: "https://profesionistas.org.mx/wp-content/uploads/2018/06/Comocrearunapaginaweb.png",
        },
      ],
    },
    {
      type: "Proyecto 3",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Namposuere dignissim orci vel rutrum. Phasellus non odio sagittis,vehicula turpis at, facilisis est. In porttitor augue a ultricesblandit. Sed auctor hendrerit enim, non dignissim nisi ultriciesvehicula. Donec non leo nec lacus pretium ullamcorper.Pellentesque tincidunt dolor ut dolor tempor, et vehicula nibhinterdum. Maecenas congue, turpis vel aliquet suscipit, risusvelit auctor erat, eu vulputate lacus sem convallis sem. Duisvenenatis, ligula in tincidunt cursus, sapien purus placerat enim,non commodo ex mi sit amet massa.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere dignissim orci vel rutrum.",
      img: [
        {
          img1: "https://www.educaciontrespuntocero.com/wp-content/uploads/2017/01/paginas_web-pixabay.png",
        },
        {
          img2: "https://www.yeeply.com/wp-content/uploads/2017/04/crear-una-pagina-web-para-vender-2-1024x728-1.jpg",
        },
        {
          img3: "https://profesionistas.org.mx/wp-content/uploads/2018/06/Comocrearunapaginaweb.png",
        },
      ],
    },
  ];

  const showSingleProyectFunc = (proyect) => {
    setShowSingleProyect(true);
    setItemProyect(proyect);
  };

  return (
    <div className="card-container">
      <h2 className="h2-portafolio">Portafolio</h2>
      {!showSingleProyect &&
        proyects.map((proyect) => (
          <div
            key={proyect.type}
            className="card-container-item"
            onClick={() => showSingleProyectFunc(proyect)}
          >
            <div className="card-container-image">
              <img
                className="image-card"
                src={proyect.img[0].img1}
                alt="Proyecto"
              />
            </div>
            <div className="card-container-info">
              <p>{proyect.description}</p>
            </div>
          </div>
        ))}
      {showSingleProyect && (
        <ProyectComponent
          itemProyect={itemProyect}
          setShowSingleProyect={setShowSingleProyect}
        />
      )}
    </div>
  );
};

export default PortafolioComponent;
