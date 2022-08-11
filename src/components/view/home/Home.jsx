import React from "react";
import { useEffect } from "react";

import InicioHome from "./componentes/InicioHome";
import InforHome from "./componentes/InforHome";

const Home = () => {
  useEffect(() => {
    document.title = "Gochi - Home";
  }, []);

  return (
    <div className="">
      <InicioHome
        titulo="Bienvenido a Gochi"
        descripcion="Participa de un modelo de vida sostenible. Enseña a los demás el
        respeto por la naturaleza y lo que esta ofrece."
      ></InicioHome>
      <InforHome
        titulo="Responsive left-aligned hero with image"
        descripcion="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
        derecha={true}
        imagen="https://laverdadnoticias.com/__export/1578424692103/sites/laverdad/img/2020/01/07/xcoxmo_hacer_un_huerto_en_tu_departamentox.jpg_1902800913.jpg"
      />

      <InforHome
        imagen="https://cdn2.cocinadelirante.com/sites/default/files/images/2019/02/sembrar-alimentos-en-botellas.jpg"
        titulo="Responsive left-aligned hero with image"
        descripcion="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
        derecha={false}
      />
    </div>
  );
};

export default Home;
