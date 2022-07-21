import React from 'react'
import { useEffect } from 'react';

const Cursos = () => {

  useEffect(()=> {
    document.title = "Gochi - Cursos";
  },[])

  return (
    <div>Cursos</div>
  )
}

export default Cursos