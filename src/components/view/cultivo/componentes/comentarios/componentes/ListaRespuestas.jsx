import React, { useEffect } from "react";
import { useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { auth } from "../../../../../../firebase";
import CardRespuesta from "./CardRespuesta";

const ListaRespuestas = (props) => {
  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    if (auth.currentUser) {
      setRespuestas(props.listaRespuestas);
    }
  }, [props]);

  const listarespuestas = respuestas.map((respuesta, index) => (
    <LazyLoadComponent key={index}>
      <CardRespuesta
        uid={respuesta.uid}
        cid={respuesta.cid}
        username={respuesta.username}
        imagen={respuesta.imagen}
        fecha={respuesta.fecha}
        texto={respuesta.texto}
        cid_comentario = {props.cid_comentario}
        cultivo={props.cultivo}
        usuario={props.usuario}
        obtenerRespuestas={props.obtenerRespuestas}
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
      {listarespuestas}
    </ul>
  );
};

export default ListaRespuestas;
