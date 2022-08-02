import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "../../stylesheets/Nosotros.css"

const Nosotros = () => {

    useEffect(()=> {
        document.title = "Gochi - Cursos"
        obtenerDatos()
      },[])

    const [equipo, setEquipo] = useState([])
    

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        setEquipo(users)
    }

  return (
    <div className="container contenedor-todo pt-5">
      <section class="banner">
        <div className="containerB">
          <div className="boxB col1 ">
            <img
              src="https://blog.aepla.es/wp-content/uploads/2020/06/cultivos-sanos-mejora-agricultura-aepla_redes.jpeg"
              className="imgbanner "
              alt="hola"
            ></img>
          </div>
          <div className="boxB col2">
            <h1>Gochi</h1>
            <p id="txtBanner">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, ad.
            </p>
          </div>
        </div>
      </section>
      <section class="sobre-nosotro">
        <div className="subSobre-nosotros pt-5">
          <h2>Sobre nosotros</h2>
        </div>
        <div className="containerS">
          <div className="boxS">
            <h2>Mision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              eveniet rerum! Voluptatum ad corporis optio amet, praesentium in
              voluptatibus aperiam!
            </p>
          </div>
          <div className="boxS">
            <h2>Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              eveniet rerum! Voluptatum ad corporis optio amet, praesentium in
              voluptatibus aperiam!
            </p>
          </div>
        </div>
      </section>
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

export default Nosotros