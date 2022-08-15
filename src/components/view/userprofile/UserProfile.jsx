import gochi from "../../../assets/img/GOCHI.svg";
import { useEffect } from "react";
import { withRouter } from "react-router";
import Cargando from "../../component/Cargando";
import Tabs from "./componentes/Tabs";
const UserProfile = (props) => {
  useEffect(() => {
    if (props.usuario) {
      console.log("❤");
      console.log(props.usuario);
    } else {
      props.history.push("/login");
    }
    document.title = "Gochi - Mi Perfil";
  }, [props]);

  return props.usuario !== false ? (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-4 mb-3">
          <div className="card" style={{borderRadius: "0px"}}>
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
                  <div><strong>{props.usuario.displayName}</strong></div>
                  <div>{props.usuario.username}</div>
                  <div>{props.usuario.email}</div>
                </div>
              </div>
            </div>
            <div className="card-body container text-center">
              <div className="d-flex row justify-content-around justify-content-lg-center">
              <div className="col-3 col-lg-3 my-auto">
                  <div><h3>{'21K'}</h3></div>
                  <div className="small">{props.usuario.username}</div>
                </div>
                <div className="col-3 col-lg-3 my-auto">
                  <div><h3>{'21K'}</h3></div>
                  <div className="small">{props.usuario.username}</div>
                </div>
                <div className="col-3 col-lg-3 my-auto">
                  <div><h3>{'21K'}</h3></div>
                  <div className="small">{props.usuario.username}</div>
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
          <div className="card" style={{borderRadius: "0px"}}>
            <div className="card-body">
              <Tabs/>
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
