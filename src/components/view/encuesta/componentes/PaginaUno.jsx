import React from "react";

const PaginaUno = (props) => {
    const preguntaUno = (x) => {
        props.setPreguntaUno(x)
    };
    const preguntaDos = (x) => {
        props.setPreguntaDos(x)
    };
  return (
    <div>
      <div className="mb-3">
      <h2 className="text-center">Preguntas sobre sus espectativas respecto a mihuertafacil.com</h2>
        <div className="d-flex row justify-content-center">
          <p> ¿Considera que encontrará la información que anda buscando?</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta1"
              id="pre11"
              value={true}
              onChange={(event) => preguntaUno(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre11">
              Sí
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta1"
              id="pre12"
              value={false}
              onChange={(event) => preguntaUno(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre12">
              No
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="d-flex row justify-content-center">
          <p> ¿Cómo se enteró de mihuertafacil.com?</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta2"
              id="pre21"
              value={true}
              onChange={(event) => preguntaDos(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre21">
              Redes Sociales
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta2"
              id="pre22"
              value={false}
              onChange={(event) => preguntaDos(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre22">
              Buscando información por la web
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaUno;
