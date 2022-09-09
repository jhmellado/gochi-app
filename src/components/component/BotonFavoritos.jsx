import React from "react";
import { useState } from "react";
import { BsBookmarkHeartFill, BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkXFill } from "react-icons/bs";
//import { db } from "../../firebase";

const BotonFavoritos = (props) => {
  const [favoritos, setFavoritos] = useState(false);
  const [listafavoritos, setListaFavoritos] = useState(true);

  const changefavoritos = () => {
    if (listafavoritos) {
     /* db.collection(props.nameColeccion)
        .doc("")
        .collection("comentarios")
        .doc(props.usuario.uid)
        .set({
          uid: `${props.usuario.uid}`,
          cid: props.usuario.uid,
          comentario: true,
          username: `${props.usuario.username}`,
          imagen: `${
            props.usuario.img_profile !== ""
              ? props.usuario.img_profile
              : "https://static.platzi.com/media/avatars/avatars/pabloerazo_1c128cb8-315f-4e4a-bfbc-c36aa60aee4b.jpg"
          }`
        });*/
      setListaFavoritos(false);
    } else {
      setListaFavoritos(true);
    }
  };

  const cambiarTextoBoton = () => {
    if (favoritos) {
      setFavoritos(false);
    } else {
      setFavoritos(true);
    }
  };

  return (
    <div>
      {listafavoritos ? (
        <button
          className="btn btn-secondary w-100"
          onClick={() => changefavoritos()}
        >
          <BsBookmarkPlus /> Añadir a favoritos
        </button>
      ) : (
        <button
          className={
            favoritos ? "btn btn-warning w-100" : "btn btn-danger w-100"
          }
          onClick={() => changefavoritos()}
          onMouseEnter={() => cambiarTextoBoton()}
          onMouseLeave={() => cambiarTextoBoton()}
        >
          {favoritos ? (
            <div>
              <BsBookmarkHeartFill /> En favoritos
            </div>
          ) : (
            <div>
              <BsBookmarkXFill /> Eliminar de favoritos
            </div>
          )}
        </button>
      )}
    </div>
  );
};

export default BotonFavoritos;
