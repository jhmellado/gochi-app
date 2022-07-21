import React from 'react'
import { useEffect } from 'react';
import '../../App.css';

const Home = () => {

  useEffect(()=> {
    document.title = "Gochi - Home";
  },[])

  return (
    <div className = "fondo_home" >
      <div className='container row'>
        <div className='col'>
          <h2 className="text-center">
            Hola
          </h2>
        </div>
        <div className='col'>
          <h2 className="text-center">
      
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Home