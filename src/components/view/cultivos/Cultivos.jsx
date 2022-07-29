import React from 'react'
import Album from './componentes/Album'

const Cultivos = (props) => {
  return (
    <div>{props.categoria}
    <Album/>
    </div>
  )
}

export default Cultivos