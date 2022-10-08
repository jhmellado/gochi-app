import React from "react";
import { useState } from "react";
import { withRouter } from "react-router";
import { db } from "../../../firebase";
import Cargando from "../../component/Cargando";
import PaginaDos from "./componentes/PaginaDos";
import PaginaTres from "./componentes/PaginaTres";
import PaginaUno from "./componentes/PaginaUno";

const Encuesta = (props) => {
  const [error, setError] = useState(null);
  const [cambiarPagina, setCambiarPagina] = useState(1);
  const [preguntaUno, setPreguntaUno] = useState(null);
  const [preguntaDos, setPreguntaDos] = useState(null);
  const [preguntaTres, setPreguntaTres] = useState(null);
  const [preguntaCuatro, setPreguntaCuatro] = useState(null);
  const [preguntaCinco, setPreguntaCinco] = useState(null);
  const [preguntaSeis, setPreguntaSeis] = useState(null);

  const encuestaFinalizada = () => {
    db.collection("data")
        .doc(props.usuario.uid)
        .set({
          preguntaUno: preguntaUno,
          preguntaDos: preguntaDos,
          preguntaTres: preguntaTres,
          preguntaCuatro: preguntaCuatro,
          preguntaCinco: preguntaCinco,
          preguntaSeis: preguntaSeis,
        })
        .then((res) => {
          db.collection("usuarios")
                  .doc(props.usuario.uid)
                  .update({
                    encuesta: true,
                  })
                  .then((res) => {
                      props.history.push("/userprofile");
                      props.history.go(0);
                  });

        });
  };

  return props.usuario !== false ? (
    <div className="container my-5">
      <div className="d-flex row justify-content-center">
        <div className="col-12 col-md-8 px-0">
          <div className="container">
            {error && (
              <div className="alert alert-danger text-center">{error}</div>
            )}
            {cambiarPagina === 1 ? (
              <PaginaUno
                pUno={preguntaUno}
                pDos={preguntaDos}
                setPreguntaUno={setPreguntaUno}
                setPreguntaDos={setPreguntaDos}
              />
            ) : cambiarPagina === 2 ? (
              <PaginaDos
                pTres={preguntaTres}
                pCuatro={preguntaCuatro}
                setPreguntaTres={setPreguntaTres}
                setPreguntaCuatro={setPreguntaCuatro}
              />
            ) : cambiarPagina === 3 ? (
              <PaginaTres
                pCinco={preguntaCinco}
                pSeis={preguntaSeis}
                setPreguntaCinco={setPreguntaCinco}
                setPreguntaSeis={setPreguntaSeis}
              />
            ) : null}

            <div className="d-flex row justify-content-center">
              {cambiarPagina === 1 ? (
                preguntaUno !== null && preguntaDos !== null ? (
                  <div className="col-3 text-center">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setCambiarPagina(cambiarPagina + 1);
                        setError(null);
                      }}
                    >
                      Siguiente
                    </button>
                  </div>
                ) : (
                  <div className="col-3 text-center">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        setError(
                          "Debe seleccionar una alternativa para cada pregunta"
                        )
                      }
                    >
                      Siguiente
                    </button>
                  </div>
                )
              ) : cambiarPagina === 2 ? (
                preguntaTres !== null && preguntaCuatro !== null ? (
                  <>
                    <div className="col-3 text-center">
                      <button
                        className="btn btn-secondary"
                        onClick={() => setCambiarPagina(cambiarPagina - 1)}
                      >
                        Anterior
                      </button>
                    </div>
                    <div className="col-3 text-center">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setCambiarPagina(cambiarPagina + 1);
                          setError(null);
                        }}
                      >
                        Siguiente
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-3 text-center">
                      <button
                        className="btn btn-secondary"
                        onClick={() => setCambiarPagina(cambiarPagina - 1)}
                      >
                        Anterior
                      </button>
                    </div>
                    <div className="col-3 text-center">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          setError(
                            "Debe seleccionar una alternativa para cada pregunta"
                          )
                        }
                      >
                        Siguiente
                      </button>
                    </div>
                  </>
                )
              ) : cambiarPagina === 3 ? (
                preguntaCinco !== null && preguntaSeis !== null ? (
                  <>
                    <div className="col-3 text-center">
                      <button
                        className="btn btn-secondary"
                        onClick={() => setCambiarPagina(cambiarPagina - 1)}
                      >
                        Anterior
                      </button>
                    </div>
                    <div className="col-3 text-center">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          encuestaFinalizada();
                          setError(null);
                        }}
                      >
                        Finalizar
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-3 text-center">
                      <button
                        className="btn btn-secondary"
                        onClick={() => setCambiarPagina(cambiarPagina - 1)}
                      >
                        Anterior
                      </button>
                    </div>
                    <div className="col-3 text-center">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          setError(
                            "Debe seleccionar una alternativa para cada pregunta"
                          )
                        }
                      >
                        Finalizar
                      </button>
                    </div>
                  </>
                )
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  ):(<Cargando/>);
};

export default withRouter(Encuesta);
