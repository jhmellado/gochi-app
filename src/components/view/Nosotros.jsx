import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Nosotros = () => {

    useEffect(()=> {
        document.title = "Gochi - Cursos"
        obtenerDatos()
      },[])

    const [equipo, setEquipo] = useState([])
    

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        setEquipo(users)
    }

  return (
    <div className='container'>
      <div className="text-center">
      <h1 className='text-center'> Nosotros </h1>
        <ul>
            {
                equipo.map(item => (
                    <li key={item.id}>{item.name} - {item.email} - {item.address.street}</li>
                ))
            }
        </ul>
      </div>    
    </div>
  )
}

export default Nosotros