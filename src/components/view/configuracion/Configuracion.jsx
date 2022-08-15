import React, { useState } from "react";
import gochi from "../../../assets/img/GOCHI.svg";
import ImagenPerfil from "./componentes/ImagenPerfil";
import MiPerfil from "./componentes/MiPerfil";
import RedesSociales from "./componentes/RedesSociales";
import Seguridad from "./componentes/Seguridad";

const Configuracion = (props) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container my-3">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-4 bg-white border px-0">
          <div className="container text-center">
            <div className="d-flex row justify-content-around justify-content-lg-center">
              <div className="col-5 my-auto">
                <div>
                  <img
                    className="img-fluid mt-3 rounded-circle"
                    src={
                      props.usuario.img_profile !== ""
                        ? props.usuario.img_profile
                        : gochi
                    }
                    alt={props.usuario.username}
                  />
                </div>
                <div className="h6 mt-3">{props.usuario.displayName}</div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="d-flex row justify-content-center">
              <div className="col my-auto px-0 mb-3">
                <ul className="nav">
                  <li className="nav-item w-100">
                    <button
                      className="btn btn-outline-dark w-100 text-start "
                      style={{borderStyle: "none",borderRadius:"0px"}}
                      onClick={() => toggleTab(1)}
                    >
                     <p className="ps-5 my-0">Mi perfil</p> 
                    </button>
                  </li>
                  <li className="nav-item w-100">
                    <button
                      className="btn btn-outline-dark w-100 text-start"
                      style={{borderStyle: "none",borderRadius:"0px"}}
                      onClick={() => toggleTab(2)}
                    >
                     <p className="ps-5 my-0">Imagen de perfil</p> 
                    </button>
                  </li>
                  <li className="nav-item w-100">
                    <button
                      className="btn btn-outline-dark w-100 text-start"
                      style={{borderStyle: "none",borderRadius:"0px"}}
                      onClick={() => toggleTab(3)}
                    >
                      <p className="ps-5 my-0">Redes sociales</p> 
                    </button>
                  </li>
                  <li className="nav-item w-100">
                    <button
                      className="btn btn-outline-dark w-100 text-start"
                      style={{borderStyle: "none",borderRadius:"0px"}}
                      onClick={() => toggleTab(4)}
                    >
                      <p className="ps-5 my-0">Seguridad</p> 
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-8">
      {toggleState === 1 ? (
          <MiPerfil/>
        ) : null}
        {toggleState === 2 ? (
          <ImagenPerfil/>
        ) : null}
        {toggleState === 3 ? (
          <RedesSociales/>
        ) : null}
        {toggleState === 4 ? (
          <Seguridad/>
        ) : null}
      </div>
    </div>
  );
};

export default Configuracion;
