import React from 'react'

const ItemListaSubseccionCurso = (props) => {
  return (
    <a href={props.href} target="iframe_gochi" className="list-group-item list-group-item list-group-item-action">
            <div className="row">
                {props.indice + ". " + props.name}
            </div>
            <div className="row ps-1">
                <small>{props.description}</small>
            </div>
            <span className="badge bg-primary rounded-pill ms-1">{props.duration}</span>    
    </a>
  )
}

export default ItemListaSubseccionCurso