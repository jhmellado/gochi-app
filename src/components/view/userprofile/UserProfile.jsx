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
  }, [props]);

  return props.usuario !== false ? (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex">
                <div className="col my-auto">
                  <img
                    className="mw-100 rounded-circle"
                    src={
                      props.usuario.img_profile !== ""
                        ? props.usuario.img_profile
                        : gochi
                    }
                    alt={props.usuario.username}
                  />
                </div>
                <div className="col my-auto">
                  <div>{props.usuario.displayName}</div>
                  <div>{props.usuario.username}</div>
                  <div>{props.usuario.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
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
