import React from "react";
import { useState } from "react";
import { BsBookmarkHeartFill, BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkXFill } from "react-icons/bs";
import { db } from "../../firebase";

const BotonFavoritos = (props) => {
  const [favoritos, setFavoritos] = useState(false);
  const [listafavoritos, setListaFavoritos] = useState(true);

  const changefavoritos = () => {
    if (listafavoritos) {
      db.collection("favoritos")
        .doc(props.idUser)
        .collection(props.nameColeccion)
        .doc(props.idCurso)
        .set({
          id: `${props.idCurso}`,
          name: `${props.nameCurso}`,
          url: `${props.urlCurso}`,
          imagen: `${props.imgCurso}`,
        })
        .then((res) => {
          setListaFavoritos(false);
          setFavoritos(true);
        });
    } else {
      db.collection("favoritos")
        .doc(props.idUser)
        .collection(props.nameColeccion)
        .doc(props.idCurso)
        .delete()
        .then((res) => {
          setListaFavoritos(true);
          setFavoritos(false);
        });
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
