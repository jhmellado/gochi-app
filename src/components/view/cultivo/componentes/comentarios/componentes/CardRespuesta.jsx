import React, { useEffect } from 'react'
import { FiTrash2 } from "react-icons/fi";
import { useState } from 'react';
import { auth, db } from '../../../../../../firebase';

const CardRespuesta = (props) => {
  const [miRespuesta, setMiRespuesta] = useState(false);

  const eliminarRespuesta = () => {
    db.collection("comentarios_cultivos")
      .doc(props.cultivo)
      .collection("comentarios")
      .doc(props.cid_comentario)
      .collection("respuestas")
      .doc(props.cid)
      .delete();
    props.obtenerRespuestas();
  }

  useEffect(() => {
    if (auth.currentUser.uid === props.uid) {
      setMiRespuesta(true);
    } else {
      setMiRespuesta(false);
    }
  }, [props]);


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
              {miRespuesta ? (
                <button
                  className="btn bg-outline-dark"
                  onClick={eliminarRespuesta}
                >
                  <FiTrash2 />
                </button>
              ) : (null)}
            </div>
          </div>
        </div>

        <div className="card-body">
          <p className="card-text text-justify mx-4">{props.texto}</p>
        </div>
      </div>
    </li>
  )
}

export default CardRespuesta