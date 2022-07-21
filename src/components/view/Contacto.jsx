import React from 'react'
import { useEffect } from 'react'

const Contacto = () => {

  useEffect(()=> {
    document.title = "Gochi - Contacto";
  },[])

  return (
    <div>Contacto</div>
  )
}

export default Contacto