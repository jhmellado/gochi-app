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
      <Nosotro titulo="hola" descripcion="loremmmmmmm" />
      <Nosotro></Nosotro>
      <Nosotro></Nosotro>
    </div>
  );
};

export default Nosotros;
