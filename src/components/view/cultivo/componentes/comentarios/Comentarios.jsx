import React from "react";

import ListaComentarios from "./componentes/ListaComentarios";

const Comentarios = (props) => {

  return (
      <ListaComentarios comentarios={props.comentarios} />
  );
};

export default Comentarios;
