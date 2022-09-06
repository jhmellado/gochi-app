import React from "react";
import { useEffect } from "react";
import "../../stylesheets/Nosotros.css";
import Nosotro from "./nosotros/Nosotro";

const Nosotros = () => {
  useEffect(() => {
    document.title = "Gochi - Cursos";
  }, []);

  return (
    <div className="container contenedor-todo pt-1">
    <Nosotro titulo1="Quienes somos" descripcion1="Somos estudiantes" 
    titulo2="Mision" descripcion2="Nuestra mision es brindar informacion para la implementación de .. para mejorar la calidad de vida en familias y en la comunidad, a traves de la conexion con las raices y la tierra"
    titulo3="Vision" descripcion3="Nuestra vision es promover informacion a las familiar y la comunidad, ampliando la variedad categorias y cultivos, entregan calidad de informacion "
    titulo4="Jeferson Mellado"
    descripcion4="alumno"
   />
   
  </div>
  );
};

export default Nosotros;
