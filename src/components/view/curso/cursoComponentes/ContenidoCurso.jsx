import React from 'react'
import ListaSeccionCurso from './ListaSeccionCurso'

const ContenidoCurso = (props) => {
  return (
    <div className='container'>
        <div className="row bg-light">
          <p className='mt-3'><strong>Contenido del curso</strong></p>
          <hr className='px-0 my-0'/>
        </div>
        <div className="row bg-light">
          <ListaSeccionCurso secciones = {props.secciones}/>
        </div>
    </div>
  )
}

export default ContenidoCurso