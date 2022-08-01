import React from "react";
import { useEffect } from "react";
import { withRouter } from "react-router";
import { auth } from "../../firebase";


const Cursos = (props) => {
  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser);
    } else {
      props.history.push("/login");
    }
    document.title = "Gochi - Cursos";
  }, [props.history]);

  return <div>Cursos</div>;
};

export default withRouter(Cursos);
