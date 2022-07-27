import React from 'react'
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import gochi_logo from '../../assets/img/gochi_logo_sf.svg'

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e7f6a8",padding:"0px 20px 0px 20px"}}>
          <a className="navbar-brand col-4" href="/" style ={{fontSize: "140%"}}>
            <img src={gochi_logo}
                       width="50px" 
                       height="50px"  
                       alt="Gochi"
            />
            Gochi
            
            
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 aling-self-end">
              <li className="nav-item">
               <a className="nav-link" href="/nosotros">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/registro'>Registro</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/registro'>Registro</a>
              </li>
            </ul>
          </div>
      </nav>
  )
}

export default Navbar