import React, { useEffect } from "react";
import { useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { auth } from "../../../../../firebase";

import CardComentario from "./componentes/CardComentario";

const ListaComentarios = (props) => {
  const [comentarios, setComentarios] = useState([]);
  useEffect(() => {
    if (auth.currentUser) {
      setComentarios(props.comentarios);
    }
  }, [props]);

  const listacomentarios = comentarios.map((comentario, index) => (
    <LazyLoadComponent key={index}>
      <CardComentario
        uid={comentario.uid}
        cid={comentario.cid}
        username={comentario.username}
        imagen={comentario.imagen}
        fecha={comentario.fecha}
        cultivo={props.cultivo}
        comentario={comentario.texto}
        usuario={props.usuario}
        date={props.date}
        actualDate={props.actualDate}
        actualDateDB={props.actualDateDB}
        obtenerComentarios={props.obtenerComentarios}
      />
    </LazyLoadComponent>
  ));

  return (
    <ul
      className="list-group px-0 mb-3"
      style={{
        listStyle: "none",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#e7f6a8",
      }}
    >
      {listacomentarios}
    </ul>
  );
};

export default ListaComentarios;
