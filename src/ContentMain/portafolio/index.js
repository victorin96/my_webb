import React from "react";
import "./styles.css";
import image from "../resources2/Captura de pantalla (559).png";

const PortafolioComponent = () => {
  const proyects = [
    {
      type: "Proyecto 1",
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
  return (
    <div className="card-container">
      <h2>Portafolio</h2>
      {proyects.map((proyect) => (
        <div key={proyect.type} className="card-container-item">
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
    </div>
  );
};

export default PortafolioComponent;
