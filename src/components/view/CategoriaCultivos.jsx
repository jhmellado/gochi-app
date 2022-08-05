import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { auth } from "../../firebase";
import Cargando from "../component/Cargando";
import BannerPublicidad from "./componentesCultivos/BannerPublicidad";
import ComponenteCategoriasCultivo from "./componentesCultivos/ComponenteCategoriasCultivo";
import EncabezadoCultivo from "./componentesCultivos/EncabezadoCultivo";

const CategoriaCultivos = (props) => {
  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser);
    } else {
      console.log(auth.currentUser);
      props.history.push("/login");
    }
    document.title = "Gochi - Categorías";
  }, [props.history]);

  return auth.currentUser !== null ?(
    <div>
      <EncabezadoCultivo />
      <hr className="divider" />
      <div className="row mx-0 px-0">
        <ComponenteCategoriasCultivo />
        <BannerPublicidad />
      </div>
    </div>
  ):(
    <Cargando/>
  );
};

export default withRouter(CategoriaCultivos);
