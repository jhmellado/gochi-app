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
        <div className="d-flex row justify-content-center">
          <p> ¿P5?</p>
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
              Sí
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
              No
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="d-flex row justify-content-center">
          <p> ¿P6?</p>
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
              Sí
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
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaTres;
