import React from "react";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { db } from "../../../firebase";
import { BiCommentAdd } from "react-icons/bi";
import Cargando from "../../component/Cargando";
import Archivos from "./componentes/Archivos";
import BannerPublicidad from "./componentes/BannerPublicidad";
import ListaComentarios from "./componentes/comentarios/ListaComentarios";
import ComoCultivar from "./componentes/ComoCultivar";
import CuandoCultivar from "./componentes/CuandoCultivar";
import EncabezadoCultivo from "./componentes/EncabezadoCultivo";
import Fertilizantes from "./componentes/Fertilizantes";
import GoodBadVecinos from "./componentes/GoodBadVecinos";
import InfoBeneContraCultivo from "./componentes/InfoBeneContraCultivo";
import InfoNutricional from "./componentes/InfoNutricional";
import MetodosReproduccion from "./componentes/MetodosReproduccion";
import Plagas from "./componentes/Plagas";
import { useCallback } from "react";

const Cultivo = (props) => {
  const [cultivo, setCultivo] = useState([]);
  const [listacomentarios, setListaComentarios] = useState([]);
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState(null);

  const obtenerDatos = useCallback(
    async (e) => {
      const data = await fetch(
        `http://a0f8ad0f-c3e0-4ad1-b6e5-b9cd87a74995.clouding.host:3000/cultivos/${props.id}`
      );
      const users = await data.json();
      setCultivo(users);
      await db
        .collection("comentarios_cultivos")
        .doc(users.cul_name_go)
        .set({
          cul_id_go: users._id,
          cul_name_go: users.cul_name_go,
          cul_url_api: `http://0b993829-ecd8-4c41-b93f-032c40fcb786.clouding.host:3000/cultivos/${props.id}`,
          cul_icon_go: users.cul_icon_go,
          cul_cultivo_go: true,
        });
      db.collection("comentarios_cultivos")
        .doc(users.cul_name_go)
        .collection("comentarios")
        .orderBy("date", "asc")
        .get()
        .then((querySnapshot) => {
          var comentarios = [];
          querySnapshot.forEach((doc) => {
            comentarios.push(doc.data());
          });
          setListaComentarios(comentarios);
        });
    },
    [props]
  );

  const obtenerComentarios = () => {
    db.collection("comentarios_cultivos")
      .doc(cultivo.cul_name_go)
      .collection("comentarios")
      .orderBy("date", "asc")
      .get()
      .then((querySnapshot) => {
        var comentarios = [];
        querySnapshot.forEach((doc) => {
          comentarios.push(doc.data());
        });
        setListaComentarios(comentarios);
      });
  };

  const actualDate = () => {
    var fecha = new Date();
    var semana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    var mes = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    var fechaactual =
      semana[fecha.getDay()] +
      ", " +
      fecha.getDate() +
      " de " +
      mes[fecha.getMonth()] +
      " de " +
      fecha.getFullYear();
    return fechaactual;
  };

  const actualDateDB = () => {
    var fecha = new Date();
    var semana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    var mes = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    var fechaactual =
      semana[fecha.getDay()] +
      fecha.getDate() +
      mes[fecha.getMonth()] +
      fecha.getFullYear() +
      fecha.getHours() +
      "_" +
      fecha.getMinutes() +
      "_" +
      fecha.getSeconds();
    return fechaactual;
  };

  const date = () => {
    var fecha = new Date();
    return fecha;
  };

  const updateComentarios = (event) => {
    event.preventDefault();
    if (!comentario.trim()) {
      setError("El comentario no puede ir vacío");
      return;
    }
    db.collection("comentarios_cultivos")
      .doc(cultivo.cul_name_go)
      .collection("comentarios")
      .doc(props.usuario.uid + `${actualDateDB()}`)
      .set({
        uid: `${props.usuario.uid}`,
        cid: props.usuario.uid + `${actualDateDB()}`,
        comentario: true,
        username: `${props.usuario.username}`,
        imagen: `${
          props.usuario.img_profile !== ""
            ? props.usuario.img_profile
            : "https://static.platzi.com/media/avatars/avatars/pabloerazo_1c128cb8-315f-4e4a-bfbc-c36aa60aee4b.jpg"
        }`,
        fecha: `${actualDate()}`,
        date: `${date()}`,
        texto: `${comentario}`,
      });
    obtenerComentarios();
    setError(null);
    setComentario("");
  };

  useEffect(() => {
    if (props.usuario) {
      obtenerDatos();
    } else {
      props.history.push("/login");
    }
    document.title = `Gochi - ${props.name}`;
  }, [props, obtenerDatos]);

  return props.usuario !== null ? (
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
            {(cultivo.cul_categoria_go !== "Florales" &&
            cultivo.cul_categoria_go !== "Suculentas") &&
            cultivo.cul_categoria_go !== "Aromaticas" ? (
              <InfoNutricional
                info_nutricional={cultivo.cul_info_nutricional_go}
              />
            ) : (null)}
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
                    alt={`${props.usuario.username}`}
                    src={
                      props.usuario.img_profile !== ""
                        ? props.usuario.img_profile
                        : "https://static.platzi.com/media/avatars/avatars/pabloerazo_1c128cb8-315f-4e4a-bfbc-c36aa60aee4b.jpg"
                    }
                    height="30"
                    width="30"
                  />
                </div>
                <div className="my-auto ms-2">
                  <strong>{props.usuario.username}</strong>
                </div>
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
                    rows="1"
                    onChange={(event) => setComentario(event.target.value)}
                    value={comentario}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary py-0 float-end"
                >
                  <BiCommentAdd className="me-1" />
                  Comentar
                </button>
              </form>
            </div>
          </div>
          {listacomentarios.length > 0 ? (
            <ListaComentarios
              cultivo={cultivo.cul_name_go}
              usuario={props.usuario}
              comentarios={listacomentarios}
              date={date}
              actualDate={actualDate}
              actualDateDB={actualDateDB}
              obtenerComentarios={obtenerComentarios}
            />
          ) : null}
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
