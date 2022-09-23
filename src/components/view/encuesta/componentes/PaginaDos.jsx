import React from "react";

const PaginaDos = (props) => {
    const preguntaTres = (x) => {
        props.setPreguntaTres(x);
    };
    const preguntaCuatro = (x) => {
        props.setPreguntaCuatro(x);
    };
  return (
    <div>
      <div className="mb-3">
        <div className="d-flex row justify-content-center">
          <p> ¿P3?</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta3"
              id="pre31"
              value={true}
              onChange={(event) => preguntaTres(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre31">
              Sí
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta3"
              id="pre32"
              value={false}
              onChange={(event) => preguntaTres(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre32">
              No
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="d-flex row justify-content-center">
          <p> ¿P4?</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta4"
              id="pre41"
              value={true}
              onChange={(event) => preguntaCuatro(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre41">
              Sí
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pregunta4"
              id="pre42"
              value={false}
              onChange={(event) => preguntaCuatro(event.target.value)}
            />
            <label className="form-check-label" htmlFor="pre42">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaDos;
