import gochi from "../../../assets/img/GOCHI.svg";
import { useEffect } from "react";
import { withRouter } from "react-router";
import Cargando from "../../component/Cargando";
import Tabs from "./componentes/Tabs";
import { db } from "../../../firebase";
import { useState } from "react";
const UserProfile = (props) => {
  const [cultivosFavoritos, setCultivosFavoritos] = useState(null);
  const [recopilaciones, setRecopilacionFavoritos] = useState(null);

  useEffect(() => {
    if (props.usuario) {
      db.collection("favoritos")
        .doc(props.usuario.uid)
        .collection("cultivos")
        .get()
        .then((querySnapshot) => {
          var cultivos = [];
          querySnapshot.forEach((doc) => {
            cultivos.push(doc.data());
          });
          setCultivosFavoritos(cultivos.length);
        });
        db.collection("favoritos")
        .doc(props.usuario.uid)
        .collection("cursos")
        .get()
        .then((querySnapshot) => {
          var cursos = [];
          querySnapshot.forEach((doc) => {
            cursos.push(doc.data());
          });
          setRecopilacionFavoritos(cursos.length);
        });
    } else {
      props.history.push("/login");
    }
    document.title = "Gochi - Mi Perfil";
  }, [props]);

  return props.usuario !== false ? (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-4 mb-3">
          <div className="card" style={{ borderRadius: "0px" }}>
            <div className="card-body container">
              <div className="d-flex row justify-content-around justify-content-lg-center">
                <div className="col-4 col-lg-5 my-auto">
                  <img
                    className="img-fluid rounded-circle"
                    src={
                      props.usuario.img_profile !== ""
                        ? props.usuario.img_profile
                        : gochi
                    }
                    alt={props.usuario.username}
                  />
                </div>
                <div className="col-5 col-lg-6 my-auto">
                  <div>
                    <strong>{props.usuario.displayName}</strong>
                  </div>
                  <div>{props.usuario.username}</div>
                  <div>{props.usuario.email}</div>
                </div>
              </div>
            </div>
            <div className="card-body container text-center">
              <div className="d-flex row justify-content-around justify-content-lg-center">
                <div className="col-6 col-lg-5 my-auto">
                  <div>
                    <h3>{cultivosFavoritos}</h3>
                  </div>
                  <div className="small">{"Cultivos 🌱"}</div>
                </div>
                <div className="col-6 col-lg-5 my-auto">
                  <div>
                    <h3>{recopilaciones}</h3>
                  </div>
                  <div className="small">{"Recopilaciones 🎞"}</div>
                </div>
              </div>
            </div>
            <div className="card-body container text-center">
              <div className="d-flex row justify-content-around justify-content-lg-center">
                <div className="col-10 my-auto">
                  <div className="small">{props.usuario.about_me}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card" style={{ borderRadius: "0px" }}>
            <div className="card-body">
              <Tabs usuario={props.usuario} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Cargando />
  );
};

export default withRouter(UserProfile);
