import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router";
import { auth } from "../../../firebase";
import Cargando from "../../component/Cargando";
import CardCurso from "./componentes/CardCurso";

const Cursos = (props) => {

  const [recopilations, setRecopilations] = useState([]);

  useEffect(() =>  {
    if (auth.currentUser) {
      console.log(auth.currentUser);
    } else {
      props.history.push("/login");
    }
    obtenerDatos();
    document.title = "Gochi - Cursos";
  }, [props.history]);

  const obtenerDatos = async () => {
    const data = await fetch('http://a0f8ad0f-c3e0-4ad1-b6e5-b9cd87a74995.clouding.host:3000/recopilations')
    const users = await data.json()
    console.table(users.docs);
    setRecopilations(users.docs);
}

const recopilaciones = recopilations.map((recopilacion, index)=>
    <CardCurso key = {index} 
               id = {recopilacion._id}
               name = {recopilacion.reco_name_go}
               imagen = {recopilacion.reco_imagen_go}
               description = {recopilacion.reco_description_go}
               />
  );

  return auth.currentUser !== null ?(
  <div>
    <div className="container"> Cursos V1</div>
    <div className="album pt-3 bg-white">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {recopilaciones}
                </div>
              </div>
            </div>
   
  </div>):(<Cargando/>);
};
 
export default withRouter(Cursos);