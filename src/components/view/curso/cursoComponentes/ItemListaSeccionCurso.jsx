import React from 'react'
import ListaSubseccionCurso from './ListaSubseccionCurso'

const ItemListaSeccionCurso = (props) => {
  return (
    <div>
        {props.nsubseccion ? (<li className="list-group-item" style={{backgroundColor: "#e7f6a8"}}>
                                <p className="fw-bold mb-2">{props.name}</p>
                                <ListaSubseccionCurso subsecciones ={props.subsecciones}/>
                            </li>) : 
                            (<a className="list-group-item w-100 text-start"
                                     href={props.href}
                                     target="iframe_gochi"
                                     style={{backgroundColor: "#e7f6a8"}}>
                                <p className="fw-bold mb-0">{props.name}</p>
                             </a>)
        }
    </div>
  )
}

export default ItemListaSeccionCurso