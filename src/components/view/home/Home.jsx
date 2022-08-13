import React from "react";
import { useEffect } from "react";
/*import foto1 from "../../../assets/img/foto_home.png";
import foto2 from "../../../assets/img/foto_home_final.png";
import foto3 from "../../../assets/img/foto_carru_1.png";
*/
import InicioHome from "./componentes/InicioHome";
import InforHome from "./componentes/InforHome";
import Final from "./componentes/Final";

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
        derecha={true}
        imagen="https://laverdadnoticias.com/__export/1578424692103/sites/laverdad/img/2020/01/07/xcoxmo_hacer_un_huerto_en_tu_departamentox.jpg_1902800913.jpg"
        link="https://www.ospat.com.ar/blog/medio-ambiente/huerta-organica/"
        titulo="Qué es una huerta orgánica"
        descripcion="La huerta orgánica es una forma de cultivo que se basa en la fertilidad del suelo y diversidad de especies. ¿Qué busca? Obtener plantas sanas que se conviertan en alimentos saludables."
      />

      <InforHome
        derecha={false}
        imagen="https://cdn2.cocinadelirante.com/sites/default/files/images/2019/02/sembrar-alimentos-en-botellas.jpg"
        link="https://www.sodimac.cl/static/Homy/html/blog-Homy/decodisfrute/como-crear-huerta-en-departamento.html"
        titulo="¿Cómo crear una huerta en tu departamento?"
        descripcion="Si bien la falta de patio es un tema, puedes instalar tu huerta en un espacio pequeño fácilmente.
        Lo primero que debes definir es en qué lugar de tu departamento irá. En general, necesitarás un lugar bien iluminado, ya que la mayor parte de las frutas y verduras necesitan varias horas de sol para crecer. 
        De todas maneras, todo dependerá de lo que quieras cosechar. Investiga qué hierbas o plantas son adecuadas para la cantidad de luz que recibes y, a partir de ahí, haz la selección."
      />
      <Final
        //tarjeta1
        fondo1="https://www.hogarmania.com/archivos/201910/remedios-naturales-con-plantas-medicinales-848x477x80xX.jpg"
        titulo1="Plantas medicinales, sus efectos y contraindicacio"
        link1="https://psicologiaymente.com/salud/plantas-medicinales"
        //tarjeta2
        fondo2="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-plantas-flores-verano-1625816917.jpg?resize=640:*"
        titulo2="Por qué son importantes las flores en la naturaleza"
        link2="https://www.ecologiaverde.com/por-que-son-importantes-las-flores-en-la-naturaleza-1370.html#:~:"
        //tarjeta3
        fondo3="https://www.hogarmania.com/archivos/202202/calendario-fruta-verduras-temporada-668x400x80xX-1.jpg"
        titulo3="La importancia de las frutas y verduras para tu salud"
        link3="https://libbys.es/blog/habitos-saludables/la-importancia-de-las-frutas-y-las-verduras/4671"
      />
    </div>
  );
};

export default Home;
