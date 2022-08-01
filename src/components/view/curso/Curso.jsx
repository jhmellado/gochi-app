import React from "react";
import { useEffect } from "react";
import { withRouter } from "react-router";
import { auth } from "../../../firebase";
import Acercade from "./cursoComponentes/Acercade";
import ContenidoCurso from "./cursoComponentes/ContenidoCurso";
import NavbarCurso from "./cursoComponentes/NavbarCurso";
import Reproductor from "./cursoComponentes/Reproductor";

const Curso = (props) => {
  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser);
    } else {
      props.history.push("/login");
    }
    document.title = "Gochi - Curso";
  }, [props.history]);

  const data = [
    {
      name: "Germinar Semillas",
      category: "Varios",
      about:
        "La germinación permite facilitar el nacimiento precoz de las diferentes plantas a cultivar, el máximo rendimiento de la semilla y, por ende, de plantas útiles, la obtención de mejores frutos y mayores cosechas, evitando el deshijamiento (eliminación de plántulas por exceso).",
      description:
        "Los germinadores y propagadores nos apoyarán a la hora de procesar o germinar nuestras semillas en el período invernal, cuando es un poco más difícil obtener condiciones idóneas de humedad, temperatura y necesitamos protegerles del viento para que puedan prosperar.",
      intructor: [
        {
          name: "Jeferson Mellado",
          email: "jefersonmellado@gmail.com",
          oficio: "TNS Analista Programador",
          url_profile_image:
            "https://scontent.fscl13-2.fna.fbcdn.net/v/t1.6435-9/147255901_255408999487770_84653461078968456_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0K8XTxwYqZ-sdtuU6EOtoJuj59eskrF8m6Pn16ySsX0-TU0_FoQby5fUEF_dscBcFOd0Nj4Erct7ftsaAx_nP&_nc_ohc=9iVfj0rnWCoAX_X464M&_nc_ht=scontent.fscl13-2.fna&oh=00_AT8SjQVXVJjvLsHf66A89A0VpJy-RyS-ngpYW1GzvX3Uwg&oe=630398F7",
          socialmedia: [
            {
              name: "instagram",
              url_perfil: "https://www.instagram.com/j3f3rm0n/",
              url_image_social:
                "https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png",
            },
          ],
        },
      ],
      secciones: [
        {
          name: "S1 - Germinar Cítricos",
          url: "https://www.youtube.com/embed/TQxLTxkuFKk",
          duration: "30 min",
          nsubseccion: true,
          subsecciones: [
            {
              name: "Limón",
              description: "Germinar en 4 días",
              url: "https://www.youtube.com/embed/TQxLTxkuFKk",
              duration: "10:02 min",
            },
            {
              name: "Naranja",
              description: "Germinar en 8 días",
              url: "https://www.youtube.com/embed/JilnnHUNyuk",
              duration: "7:59 min",
            },
          ],
        },
        {
          name: "S2 - Germinar Frutilla",
          url: "https://www.youtube.com/embed/YPR9FE3A7eE",
          duration: "7:56 min",
          nsubsecciones: false,
          subsecciones: [{}],
        },
        {
          name: "S3 - Germinar Kiwi",
          url: "https://www.youtube.com/embed/TbzXfmGLWW0",
          duration: "20 min",
          nsubsecciones: false,
          subsecciones: [{}],
        },
      ],
    },
  ];

  const data_curso = data.map((info_curso) => info_curso);

  return (
    <div className="row">
      <div className="col-lg-9">
        <div className="container">
          <div className="row embed-responsive embed-responsive-16by9">
            <Reproductor src={data_curso[0].secciones[0].url} />
          </div>
          <div className="row">
            <NavbarCurso />
          </div>
          <div className="row">
            <Acercade
              about={data_curso[0].about}
              description={data_curso[0].description}
              name={data_curso[0].intructor[0].name}
              oficio={data_curso[0].intructor[0].oficio}
              profile_img={data_curso[0].intructor[0].url_profile_image}
              url_perfil={data_curso[0].intructor[0].socialmedia[0].url_perfil}
              url_image_social={
                data_curso[0].intructor[0].socialmedia[0].url_image_social
              }
            />
          </div>
        </div>
      </div>
      <div className="col">
        <ContenidoCurso secciones={data_curso[0].secciones} />
      </div>
    </div>
  );
};

export default withRouter(Curso);
