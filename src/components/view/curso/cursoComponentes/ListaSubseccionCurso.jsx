import React from 'react'

import ItemListaSubseccionCurso from './ItemListaSubseccionCurso'

const ListaSubseccionCurso = (props) => {
 
    const subsecciones = props.subsecciones
    const listItems = subsecciones.map((subseccion, index) =>
        <ItemListaSubseccionCurso key={index}
                                  name={subseccion.name}
                                  description={subseccion.description}
                                  href={subseccion.url}
                                  duration={subseccion.duration}
                                  indice={index+1}/>
                                  );
  return (
    <div className="list-group list-group-flush">
        {listItems}
    </div>
  )
}

export default ListaSubseccionCurso