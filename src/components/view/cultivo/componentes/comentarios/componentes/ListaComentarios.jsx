import React, { useEffect } from "react";
import { useState } from "react";
import CardComentario from "./CardComentario";

const ListaComentarios = (props) => {

  useEffect(() => {
    setComentarios(props.comentarios)
    document.title = "Gochi - Registro";
  }, [props]);
  
  const [comentarios, setComentarios]=useState([]);

 const listacomentarios = comentarios.map((comentario, index) => (
    <CardComentario
      key={index}
      id={comentario.id_usuario}
      username={comentario.username}
      imagen={comentario.imagen}
      fecha={comentario.fecha}
      comentario={comentario.comentario}
      respuestas={comentario.respuestas}
    />
  ));

  return (
    <ul className="px-0" style={{ listStyle: "none" }}>
      {listacomentarios}
    </ul>
  );
};

export default ListaComentarios;
