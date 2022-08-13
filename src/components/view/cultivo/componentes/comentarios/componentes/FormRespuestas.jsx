import React, { useState } from "react";
import { db } from "../../../../../../firebase";
import { BiSend } from "react-icons/bi";
import { BiCommentX } from "react-icons/bi";

const FormRespuestas = (props) => {
  const [error, setError] = useState(null);
  const [respuesta, setRespuesta] = useState("");

  const setModoRespuesta = () => {
    props.cambiarModoRespuesta();
  };

  const updateRespuestas = (event) => {
    event.preventDefault();
    if (!respuesta.trim()) {
      setError("La respuesta no puede ir vacía");
      return;
    }
    db.collection("comentarios_cultivos")
      .doc(props.cultivo)
      .collection("comentarios")
      .doc(props.cid)
      .collection("respuestas")
      .doc(props.cid + "_" + props.usuario.uid + `${props.actualDateDB()}`)
      .set({
        uid: `${props.usuario.uid}`,
        cid: props.cid + "_" + props.usuario.uid + `${props.actualDateDB()}`,
        respuesta: true,
        username: `${props.usuario.username}`,
        imagen: `${
          props.usuario.img_profile !== ""
            ? props.usuario.img_profile
            : "https://static.platzi.com/media/avatars/avatars/pabloerazo_1c128cb8-315f-4e4a-bfbc-c36aa60aee4b.jpg"
        }`,
        fecha: `${props.actualDate()}`,
        date: `${props.date()}`,
        texto: `${respuesta}`,
      });
    props.obtenerRespuestas();
    setError(null);
    setRespuesta("");
    props.cambiarModoRespuesta();
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <div className="d-flex justify-content-start my-auto mx-2">
          <div className="p-0">
            <img
              className="rounded-circle"
              alt={`${props.usuario.username}`}
              src={
                props.usuario.img_profile !== ""
                  ? props.usuario.img_profile
                  : "https://static.platzi.com/media/avatars/avatars/pabloerazo_1c128cb8-315f-4e4a-bfbc-c36aa60aee4b.jpg"
              }
              height="30"
              width="30"
            />
          </div>
          <div className="my-auto ms-2">
            <strong>{props.usuario.username}</strong>
          </div>
        </div>
      </div>

      <div className="card-body">
        <form onSubmit={updateRespuestas}>
          <div className="mb-3">
            {error && <div className="alert alert-danger">{error}</div>}
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
            ></label>
            <textarea
              className="form-control"
              placeholder="Escriba su respuesta..."
              id="exampleFormControlTextarea1"
              rows="1"
              onChange={(event) => setRespuesta(event.target.value)}
              value={respuesta}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-danger btn-sm py-0 me-1"
                    onClick={setModoRespuesta}>
              <BiCommentX className="me-1"  />
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-sm py-0 float-end"
            >
              <BiSend className="me-1" />
              Responder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRespuestas;
