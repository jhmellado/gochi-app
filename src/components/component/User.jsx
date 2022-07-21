import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const User = () => {

  const [usuario, setUsuario] = useState([])
    
  const {id} = useParams()

  useEffect(()=> {
    const obtenerInfo = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const user = await data.json()
        const nombre = JSON.stringify(user.name)
        document.title = 'Gochi - ' + nombre
        setUsuario(user)
    }
    obtenerInfo()
  },[id])

  return (
    <div>
        <h2>{usuario.name}</h2>
        <h3>Username: {usuario.username}</h3>
        <h3>Email: {usuario.email}</h3>
        <h3>Phone: {usuario.phone}</h3>
    </div>
  )
}

export default User