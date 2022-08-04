import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import gochi_logo from '../../../../assets/img/gochi_logo_sf.svg'

const NavbarNoLogin = () => {
  return (
<nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e7f6a8"}}>
        <div className="container-fluid">
            <a className="navbar-brand ps-2" href="/" style ={{fontSize: "140%"}}>
                <img src={gochi_logo}
                        width="50px" 
                        height="50px"  
                        alt="Gochi"
                />
                Gochi
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse justify-content-end pe-2" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/categoria">Cultivos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/nosotros">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Iniciar Sesión</a>
                    </li>
                    <li className="nav-item pe-2">
                        <a className="nav-link" href="/registro">Registrarse</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavbarNoLogin