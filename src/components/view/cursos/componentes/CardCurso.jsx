import React from 'react'

const CardCurso = (props) => {
  return (
    <div className="col">
          <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" src={props.imagen} alt={props.name} />
            <div className="card-body">
                <p><strong>{props.name}</strong></p>
              <p className="card-text">{props.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href={`/curso/${props.id}`} type="button" className="btn btn-sm btn-outline-secondary">Ir a la recopilación</a>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CardCurso