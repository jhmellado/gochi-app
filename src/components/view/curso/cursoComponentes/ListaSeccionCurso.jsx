import React from 'react'
import ItemListaSeccionCurso from './ItemListaSeccionCurso'

const ListaSeccionCurso = (props) => {

  const secciones = props.secciones
    const listItems = secciones.map((seccion, index) =>
        <ItemListaSeccionCurso key={index}
                                  name={seccion.name}
                                  href={seccion.url}
                                  duration={seccion.duration}
                                  nsubseccion={seccion.nsubseccion}
                                  subsecciones = {seccion.subsecciones}/>
                                  );

  return (
    <ul className="list-group list-group-flush px-0">
        {listItems}
    </ul>
  )
}

export default ListaSeccionCurso