import gochi from "../../../assets/img/GOCHI.svg";
import { useEffect } from "react";
import { withRouter } from "react-router";
import Cargando from "../../component/Cargando";
import Tabs from "./componentes/Tabs";
import { db } from "../../../firebase";
import { useState } from "react";
const UserProfile = (props) => {
  const [cultivosFavoritos, setCultivosFavoritos] = useState(0);
  const [recopilaciones, setRecopilacionFavoritos] = useState(0);

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
    <div>
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
      <div className="card-body container">
        <div className="d-flex row justify-content-around justify-content-lg-center">
          <div className="col-8 col-lg-12 my-auto">
          <div className=" fade show active">
            <table
              className="table table-striped"
              style={{ border: "4px solid #e7f6a8" }}
            >
              <tbody>
                <tr>
                  <td></td>
                  <td colSpan={12} className="text-center bg-dark text-white">
                    Época de Siembra
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="bg-dark text-white">Meses</td>
                  <td>E</td>
                  <td>F</td>
                  <td>M</td>
                  <td>A</td>
                  <td>M</td>
                  <td>J</td>
                  <td>J</td>
                  <td>A</td>
                  <td>S</td>
                  <td>O</td>
                  <td>N</td>
                  <td>D</td>
                </tr>
                <tr>
                  <td>Acelga</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Ají</td>
                  <td className="bg-white" colSpan={6}></td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Ajo</td>
                  <td className="bg-white" colSpan={3}></td>
                  <td className="bg-success" colSpan={5}></td>
                  <td className="bg-white" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Albahaca</td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={3}></td>
                </tr>
                <tr>
                  <td>Apio</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Berenjena</td>
                  <td className="bg-white" colSpan={8}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Betarraga</td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={3}></td>
                </tr>
                <tr>
                  <td>Brócoli</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Cebolla</td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success " colSpan={3}></td>
                </tr>
                <tr>
                  <td>Choclo</td>
                  <td className="bg-white" colSpan={8}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Cilantro</td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={3}></td>
                </tr>
                <tr>
                  <td>Coliflor</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Espinaca</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Lechuga</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Melón</td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={6}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Papas</td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success" colSpan={3}></td>
                  <td className="bg-white" colSpan={2}></td>
                </tr>
                <tr>
                  <td>Pepino</td>
                  <td className="bg-white" colSpan={8}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Perejil</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Pimentón</td>
                  <td className="bg-white" colSpan={6}></td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Porotos</td>
                  <td className="bg-success" colSpan={1}></td>
                  <td className="bg-white" colSpan={8}></td>
                  <td className="bg-success" colSpan={3}></td>
                </tr>
                <tr>
                  <td>Puerros</td>
                  <td className="bg-success" colSpan={5}></td>
                  <td className="bg-white" colSpan={3}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Rábanos</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Repollo</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Sandía</td>
                  <td className="bg-white" colSpan={8}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Tomate</td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={3}></td>
                </tr>
                <tr>
                  <td>Zanahoria</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Zapallo</td>
                  <td className="bg-white" colSpan={8}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Zapallo Italiano</td>
                  <td className="bg-success" colSpan={1}></td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
              </tbody>
            </table>
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
