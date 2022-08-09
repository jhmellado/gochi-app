import React from "react";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { auth } from "../../../firebase";
import Cargando from "../../component/Cargando";
import Archivos from "./componentes/Archivos";
import BannerPublicidad from "./componentes/BannerPublicidad";
import Comentarios from "./componentes/comentarios/Comentarios";
import ComoCultivar from "./componentes/ComoCultivar";
import CuandoCultivar from "./componentes/CuandoCultivar";
import EncabezadoCultivo from "./componentes/EncabezadoCultivo";
import Fertilizantes from "./componentes/Fertilizantes";
import GoodBadVecinos from "./componentes/GoodBadVecinos";
import InfoBeneContraCultivo from "./componentes/InfoBeneContraCultivo";
import InfoNutricional from "./componentes/InfoNutricional";
import MetodosReproduccion from "./componentes/MetodosReproduccion";
import Plagas from "./componentes/Plagas";

const Cultivo = (props) => {
  const [cultivo, setCultivo] = useState([]);
  const [listacomentarios, setListaComentarios] = useState([]);
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      const obtenerDatos = async () => {
        const data = await fetch(
          `http://0b993829-ecd8-4c41-b93f-032c40fcb786.clouding.host:3000/cultivos/${props.id}`
        );
        const users = await data.json();
        setCultivo(users);
        setListaComentarios(users.cul_comentarios_go);
      };
      obtenerDatos();
    } else {
      props.history.push("/login");
    }
    document.title = `Gochi - ${props.name}`;
  }, [props]);


  const updateComentarios = (event) => {
    event.preventDefault();
    if (!comentario.trim()) {
      setError("El comentario no puede ir vacio");
      return;
    }
    setListaComentarios([...listacomentarios , {
      id_usuario:`${''}`,
      username:`${'j3f3rm0n'}`,
      imagen: `${'https://scontent.fccp1-1.fna.fbcdn.net/v/t1.6435-9/147255901_255408999487770_84653461078968456_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MlMgybOm6kQAX8bNh33&_nc_ht=scontent.fccp1-1.fna&oh=00_AT-xh_T7P-55-dG2ozcD5WFED117HXl6S5gGyAMn9XY5nQ&oe=63175F77'}`,
      fecha: `${'2012-04-23T18:25:43.511Z'}`,
      comentario: `${comentario}`,
      respuestas:[]
    }]);
    setError(null);
    setComentario('')
  };


  return auth.currentUser !== null ? (
    <div className="container">
      <EncabezadoCultivo
        nombre={cultivo.cul_name_go}
        nombre_cientifico={cultivo.cul_cientifico_name_go}
        descripcion={cultivo.cul_description_go}
        imagen_banner={cultivo.cul_banner_go}
      />
      <InfoBeneContraCultivo
        info_beneficios={cultivo.cul_beneficios_go}
        info_contraindicaciones={cultivo.cul_contraindicaciones_go}
      />
      <div className="row">
        <div className="col-md-8">
          <article className="blog-post">
            <InfoNutricional
              info_nutricional={cultivo.cul_info_nutricional_go}
            />
            <CuandoCultivar
              info_cuando_cultivar={cultivo.cul_cuando_cultivar_go}
            />
            <ComoCultivar info_como_cultivar={cultivo.cul_como_cultivar_go} />
            <Fertilizantes info_fertilizantes={cultivo.cul_fertelizantes_go} />
            <GoodBadVecinos
              info_buenos_vecinos={cultivo.cul_buenos_vecinos_go}
              info_malo_vecinos={cultivo.cul_malos_vecinos_go}
            />

            <Plagas info_plagas={cultivo.cul_plagas_comunes} />

            <MetodosReproduccion
              info_m_reproduccion={cultivo.cul_metodo_reproduccion_go}
            />
          </article>
          <h2 className="my-3">Comentarios sobre este cultivo</h2>
          <div className="card mb-3">
            <div className="card-header">
              <div className="d-flex justify-content-start my-auto mx-2">
                <div className="p-0">
                  <img
                    className="rounded-circle"
                    alt="soypabloerazo"
                    src="https://static.platzi.com/media/avatars/avatars/pabloerazo_1c128cb8-315f-4e4a-bfbc-c36aa60aee4b.jpg"
                    height="30"
                    width="30"
                  />
                </div>
                <div className="my-auto ms-2">nombre</div>
              </div>
            </div>

            <div className="card-body">
              <form onSubmit={updateComentarios}>
                <div className="mb-3">
                  {error && <div className="alert alert-danger">{error}</div>}
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Ingrese su comentario, sea respetuoso 😊
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Escriba su comentario..."
                    id="exampleFormControlTextarea1"
                    rows="2"
                    onChange={(event) => setComentario(event.target.value)}
                    value={comentario}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm py-0 float-end"
                >
                  Comentar
                </button>
              </form>
            </div>
          </div>
          <Comentarios
            comentarios={listacomentarios}
          />
        </div>
        <div className="col-md-4">
          <div className="position-sticky" style={{ top: "2rem" }}>
            <BannerPublicidad />
            <Archivos />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Cargando />
  );
};

export default withRouter(Cultivo);
