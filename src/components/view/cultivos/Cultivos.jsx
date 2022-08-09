import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { auth } from "../../../firebase";
import Cargando from "../../component/Cargando";
import Album from "./componentes/Album";

const Cultivos = (props) => {
  useEffect(() => {
    if (auth.currentUser) {
      console.log("ok");
    } else {
      props.history.push("/login");
    }
    document.title = `Gochi - ${props.categoria}`;
  }, [props]);
  return auth.currentUser !== null ? (
    <div>
      {props.categoria}
      <Album categoria={props.categoria} />
    </div>
  ):(
    <Cargando/>
  );
};

export default withRouter(Cultivos);
