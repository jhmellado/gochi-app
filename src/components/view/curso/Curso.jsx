import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router";
import { auth } from "../../../firebase";
import BotonFavoritos from "../../component/BotonFavoritos";
import Cargando from "../../component/Cargando";
import Acercade from "./cursoComponentes/Acercade";
import ContenidoCurso from "./cursoComponentes/ContenidoCurso";
import NavbarCurso from "./cursoComponentes/NavbarCurso";
import Publicidad from "./cursoComponentes/Publicidad";
import Reproductor from "./cursoComponentes/Reproductor";

const Curso = (props) => {
  const [curso, setCurso] = useState(null);
 
  const obtenerDatos = useCallback(async () => {
    const data = await fetch(
      `http://a0f8ad0f-c3e0-4ad1-b6e5-b9cd87a74995.clouding.host:3000/recopilations/${props.id}`
    );
    const users = await data.json();
    console.log(users);
    setCurso(users);
  }, [props]);

  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser);
    } else {
      props.history.push("/login");
    }
    obtenerDatos();
    document.title = "Gochi - Curso";
  }, [props.history, obtenerDatos]);

  return curso !== null ? (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="container">
            <div className="row embed-responsive embed-responsive-16by9">
              <Reproductor src={curso.reco_secciones_go[0].url} />
            </div>
            <div className="row justify-content-around py-2">
              <div className="col-8 h2">Curso: {curso.reco_name_go}</div>
              <div className="col-4 mx-auto">
                <BotonFavoritos nameColeccion = {"cursos"}
                                idUser = {props.usuario.uid}
                                nameDoc ={curso.reco_name_go}
                                urlDoc = {`/curso/${props.id}`}
                                idDoc = {`${props.id}`}
                                imgDoc ={curso.reco_imagen_go}/>
              </div>
            </div>
            <div className="row">
              <NavbarCurso />
            </div>
            <div className="row bg-white">
              <Acercade
                about={curso.reco_about_go}
                description={curso.reco_description_go}
                instructor={curso.reco_instructor_go}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <ContenidoCurso secciones={curso.reco_secciones_go} />
          <Publicidad lista={curso.reco_publicidad_go} />
        </div>
      </div>
    </div>
  ) : (
    <Cargando />
  );
};

export default withRouter(Curso);
