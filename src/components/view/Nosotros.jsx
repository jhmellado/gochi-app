import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../../stylesheets/Nosotros.css";
import Nosotro from "./nosotros/Nosotro";

const Nosotros = () => {
  useEffect(() => {
    document.title = "Gochi - Cursos";
    obtenerDatos();
  }, []);

  const [equipo, setEquipo] = useState([]);

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    setEquipo(users);
  };

  return (
    <div className="container contenedor-todo pt-1">
      <Nosotro titulo="hola" descripcion="loremmmmmmm" />
      <Nosotro></Nosotro>
      <Nosotro></Nosotro>

      {/*api */}
      <div className="container pt-3 ">
        <div className="text-center ">
          <ul className="list-inline">
            {equipo.map((item) => (
              <li key={item.id}>
                {item.name} - {item.email} - {item.address.street}
              </li>
            ))}
          </ul>
        </div>
        <hr class="border border-4"></hr>
      </div>
    </div>
  );
};

export default Nosotros;
