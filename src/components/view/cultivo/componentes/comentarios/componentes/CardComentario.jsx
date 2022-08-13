import React, { useEffect } from "react";
import { useState } from "react";
import { auth, db } from "../../../../../../firebase";
import FormRespuestas from "./FormRespuestas";
import { FiTrash2 } from "react-icons/fi";
import ListaRespuestas from "./ListaRespuestas";
import { useCallback } from "react";

const CardComentario = (props) => {
  const [modoRespuesta, setModoRespuesta] = useState(false);
  const [miComentario, setMiComentario] = useState(false);
  const [listaRespuestas, setListaRespuestas] = useState([{}]);

  const obtenerRespuestas = useCallback((e) => {
    db.collection("comentarios_cultivos")
      .doc(props.cultivo)
      .collection("comentarios")
      .doc(props.cid)
      .collection("respuestas")
      .orderBy("date","asc")
      .get()
      .then((querySnapshot) => {
        var respuestas = [];
        querySnapshot.forEach((doc) => {
          respuestas.push(doc.data());
        });
        setListaRespuestas(respuestas);
      });
  },[props]);

  const cambiarModoRespuesta = () => {
    if (modoRespuesta) {
      setModoRespuesta(false);
    } else {
      setModoRespuesta(true);
    }
  };

  const obtenerComentarios = () => {
    props.obtenerComentarios();
  };

  const eliminarComentario = () => {
    db.collection("comentarios_cultivos")
      .doc(props.cultivo)
      .collection("comentarios")
      .doc(props.cid)
      .delete();
    obtenerComentarios();
  };

  useEffect(() => {
    if (auth.currentUser.uid === props.uid) {
      setMiComentario(true);
    } else {
      setMiComentario(false);
    }
    obtenerRespuestas();
  }, [props,obtenerRespuestas]);

  


  

  

  return (
    <li className="list-group-item">
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between  mx-auto">
            <div className="d-flex justify-content-start my-auto">
              <div className="p-0">
                <img
                  className="rounded-circle"
                  alt="soypabloerazo"
                  src={props.imagen}
                  height="30"
                  width="30"
                />
              </div>
              <div className="my-auto ms-2">
                {" "}
                <strong>{props.username}</strong>
              </div>
            </div>
            <div
              className="d-flex justify-content-end  ms-4 text-center"
              style={{ fontSize: "75%" }}
            >
              {" "}
              <p className="my-auto">{props.fecha}</p>
              {miComentario ? (
                <button
                  className="btn bg-outline-dark"
                  onClick={eliminarComentario}
                >
                  <FiTrash2 />
                </button>
              ) : (null)}
            </div>
          </div>
        </div>

        <div className="card-body">
          <p className="card-text text-justify mx-4">{props.comentario}</p>
          <div className="justify-constent-end">
            {listaRespuestas.length > 0 ? (
              <ListaRespuestas listaRespuestas={listaRespuestas}
                                usuario = {props.usuario}
                                cultivo = {props.cultivo}
                                cid_comentario = {props.cid}
                                obtenerRespuestas={obtenerRespuestas}
                                 />
            ) : null}
            {modoRespuesta ? (
              <FormRespuestas
                usuario={props.usuario}
                cultivo={props.cultivo}
                cid={props.cid}
                date={props.date}
                actualDate={props.actualDate}
                actualDateDB={props.actualDateDB}
                obtenerRespuestas={obtenerRespuestas}
                cambiarModoRespuesta={cambiarModoRespuesta}
              />
            ) : (
              <button
                className="btn btn-primary btn-sm py-0 float-end"
                onClick={cambiarModoRespuesta}
              >
                Responder
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardComentario;
