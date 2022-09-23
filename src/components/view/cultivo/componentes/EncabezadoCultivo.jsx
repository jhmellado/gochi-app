import React from "react";
import BotonFavoritos from "../../../component/BotonFavoritos";

const EncabezadoCultivo = (props) => {
  return (
    <div className="row">
      <div className="col">
        <div
          className="p-4 p-md-5 mb-4 rounded text-bg-dark"
          style={{
            backgroundImage: `url(${props.imagen_banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "auto 100%",
          }}
        >
          <div className="col-md-6 px-0">
            <h1
              className="display-4"
              style={{ textShadow: "0 0 2px #b3c760", color: "white" }}
            >
              {props.nombreCultivo}
            </h1>
            <h2
              className="display-5 fst-italic"
              style={{ textShadow: "0 0 2px #b3c760", color: "white" }}
            >
              {props.nombre_cientifico}
            </h2>
            <p
              className="lead my-3 rounded"
              style={{
                textShadow: "0 0 2px black",
                color: "white",
                background: "rgba(0,0,0,0.2)",
                textAlign: "justify",
              }}
            >
              {" "}
              <b>{props.descripcion}</b>{" "}
            </p>
          </div>
          {props.usuario !== null ? <BotonFavoritos nameColeccion = {"cultivos"}
                          idUser = {props.usuario.uid}
                          nameDoc ={props.nombreCultivo}
                          urlDoc = {`/cultivo/${props.nombreCultivo}/${props.idCultivo}`}
                          idDoc = {props.idCultivo}
                          imgDoc ={props.imgCultivo}/> : null}
        </div>
      </div>
    </div>
  );
};

export default EncabezadoCultivo;
