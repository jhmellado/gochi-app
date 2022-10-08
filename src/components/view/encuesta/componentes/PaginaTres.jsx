import React from "react";

const PaginaTres = (props) => {
    const preguntaCinco = (x) => {
        props.setPreguntaCinco(x);
    };
    const preguntaSeis = (x) => {
        props.setPreguntaSeis(x);
    };
  return (
    <div>
      <div className="mb-3">
      <h2 className="text-center">Las últimas preguntas 😎👍</h2>
        <div className="d-flex row justify-content-center">
          <p> ¿Qué productos compraría por internet para su huerta?</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta5"
              id="pre51"
              value={true}
              onChange={(event) => preguntaCinco(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre51">
              Humus de lombriz
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta5"
              id="pre52"
              value={false}
              onChange={(event) => preguntaCinco(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre52">
              Abonos para la huerta
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="d-flex row justify-content-center">
          <p> ¿Qué cultivo es de su preferencia?</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta6"
              id="pre61"
              value={true}
              onChange={(event) => preguntaSeis(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre61">
              Frutales
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta6"
              id="pre62"
              value={false}
              onChange={(event) => preguntaSeis(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre62">
              Vegetales
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta6"
              id="pre62"
              value={false}
              onChange={(event) => preguntaSeis(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre62">
              Especias
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta6"
              id="pre62"
              value={false}
              onChange={(event) => preguntaSeis(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre62">
              Aromáticas
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta6"
              id="pre62"
              value={false}
              onChange={(event) => preguntaSeis(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre62">
              Flores
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta6"
              id="pre62"
              value={false}
              onChange={(event) => preguntaSeis(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre62">
              Suculentas
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaTres;
