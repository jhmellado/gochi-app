import React, { useEffect } from "react";
import { withRouter } from "react-router";
import BannerPublicidad from "./componentesCultivos/BannerPublicidad";
import EncabezadoCultivo from "./componentesCultivos/EncabezadoCultivo";
import ComponenteCategoriasCultivo from "./componentesCultivos/ComponenteCategoriasCultivo";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const CategoriaCultivos = (props) => {
  useEffect(() => {
    document.title = "Gochi - Categorías";
  }, [props.history]);

  return (
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
  );
};

export default withRouter(CategoriaCultivos);
