import React from 'react'

const CardCultivo = (props) => {
  return (
    <div class="col">
        <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          src={props.imagen}
          alt="gochi"
        />
        <div className="card-body">
          <p className="card-text">
            {props.nombre} - {props.descripcion}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={props.href}
                className="btn btn-sm btn-outline-secondary px-5"
              >
                Ver Cultivos
              </a>
            </div>
            <small className="text-muted">{props.total} cultivos</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCultivo