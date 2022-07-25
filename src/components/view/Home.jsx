import React from 'react'
import { useEffect } from 'react';
import '../../App.css';

const Home = () => {

  useEffect(()=> {
    document.title = "Gochi - Home";
  },[])

  return (
      <div className='container'>
        
        <div className='fondo_home'>
          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
              <h1 className="display-4 fw-normal text-white">Bienvenidos a GOCHI</h1>
              <p className="lead fw-normal text-white"> Participa de un modelo de vida sostenible. Enseña a los demás el respeto por la naturaleza y lo que esta ofrece.</p>
              <a className="btn btn-success w-100" href="/">Registrate</a>
            </div>
          </div>
        </div>


        <div className='row'>
          <h2 className="text-center">

          </h2>
        </div>
      </div>
  )
}

export default Home