import React from "react";
import { useEffect } from "react";
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
        .doc(props.idDoc)
        .set({
          id: `${props.idDoc}`,
          name: `${props.nameDoc}`,
          url: `${props.urlDoc}`,
          imagen: `${props.imgDoc}`,
        })
        .then((res) => {
          setListaFavoritos(false);
          setFavoritos(true);
        });
    } else {
      db.collection("favoritos")
        .doc(props.idUser)
        .collection(props.nameColeccion)
        .doc(props.idDoc)
        .delete()
        .then((res) => {
          setListaFavoritos(true);
          setFavoritos(false);
        });
    }
  };

  useEffect(() => {
    db.collection("favoritos")
    .doc(props.idUser)
    .collection(props.nameColeccion)
    .where("id","==",props.idDoc).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          if (doc.id === props.idDoc) {
            setListaFavoritos(false);
            setFavoritos(true);
          }
      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });
  }, [props]);

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
          onMouseEnter={() => setFavoritos(false)}
          onMouseLeave={() => setFavoritos(true)}
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
