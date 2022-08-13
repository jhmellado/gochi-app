import CardProfile from "../component/CardProfile";
import gochi from "../../assets/img/GOCHI.svg";
import { useEffect } from "react";
import { withRouter } from "react-router";
import Cargando from "../component/Cargando";
const UserProfile = (props) => {
  
  useEffect(() => {
    if (props.usuario) {
      console.log('❤');
      console.log(props.usuario);
    } else {
      props.history.push("/login");
    }
  }, [props]);

  return props.usuario !== false ?(
    <div>
      <section className="shadow-sm py-5 p-md-5 mb-2 mt-2 rounded text-bg-secondary text-center container">
        <div className="row py-lg">
          <div className="col-lg-6 col-md-8 mx-auto">
            <img
              className="col-3 mw-100 rounded-circle"
              src={props.usuario.img_profile !== ""?(props.usuario.img_profile):(gochi)}
              alt="Profile"
            />
            <h2 className="fw-light">{props.usuario.displayName}</h2>
            <p>
              <a href="/userprofile" className="btn btn-primary mx-1">
                Cultivos
              </a>
              <a href="/userprofile" className="btn btn-secondary mx-1">
                Cursos
              </a>
            </p>
          </div>
        </div>
      </section>
      <hr />
      <div className="album py-2 bg-white">
        <div className="container">
          <h2 className="text-center pb-2">Mis Cultivos</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <CardProfile />
            <CardProfile />
            <CardProfile />
          </div>
        </div>
        <hr />
        <div className="container">
          <h2 className="text-center pb-2">Mis Cursos</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <CardProfile />
            <CardProfile />
            <CardProfile />
          </div>
        </div>
      </div>
    </div>
  ):(<Cargando/>);
};

export default withRouter(UserProfile);
