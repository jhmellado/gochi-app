import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { auth } from "../../firebase";
import Cargando from "../component/Cargando";
import BannerPublicidad from "./componentesCultivos/BannerPublicidad";
import EncabezadoCultivo from "./componentesCultivos/EncabezadoCultivo";
import ComponenteCategoriasCultivo from "./componentesCultivos/ComponenteCategoriasCultivo";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const CategoriaCultivos = (props) => {
  useEffect(() => {
    if (auth.currentUser) {
      console.log("ok");
    } else {
      //console.log(auth.currentUser);
      props.history.push("/login");
    }
    document.title = "Gochi - Categorías";
  }, [props.history]);

  return auth.currentUser !== null ? (
    <div>
      <EncabezadoCultivo />
      <hr className="divider" />
      <div className="row mx-0 px-0">
        <LazyLoadComponent>
          <ComponenteCategoriasCultivo />
        </LazyLoadComponent>
        <BannerPublicidad />
      </div>
    </div>
  ) : (
    <Cargando />
  );
};

export default withRouter(CategoriaCultivos);
