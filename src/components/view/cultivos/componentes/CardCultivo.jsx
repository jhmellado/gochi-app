import React from 'react'

const CardCultivo = (props) => {
  return (
    <div className="col">
        <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          src={props.imagen}
          alt="gochi"
        />
        <div className="card-body">
          <p className="card-text">
            {props.nombre}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={`/cultivo/${props.nombre}/${props.href}`}
                className="btn btn-sm btn-outline-secondary px-5"
              >
                Ver Cultivo
              </a>
            </div>
            <small className="text-muted">{props.temporada}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCultivo