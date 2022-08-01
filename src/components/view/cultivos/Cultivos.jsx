import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { auth } from "../../../firebase";
import Album from "./componentes/Album";

const Cultivos = (props) => {
  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser);
    } else {
      props.history.push("/login");
    }
    document.title = "Gochi - Curso";
  }, [props.history]);
  return (
    <div>
      {props.categoria}
      <Album categoria={props.categoria} />
    </div>
  );
};

export default withRouter(Cultivos);
