import React from 'react'
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import gochi_logo from '../../assets/img/gochi_logo_sf.svg'

const Footer = () => {
  return (
    <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center my-2 border-top px-3">
            <p className="col-md-4 mb-0 text-muted">© 2022 Gochi - Chile</p>
            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img src={gochi_logo} width = "9%" height="9%" alt="Gochi"/>
            </a>
            <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="/nosotros" className="nav-link px-2 text-muted">Features</a></li>
            <li className="nav-item"><a href="/contacto" className="nav-link px-2 text-muted">Pricing</a></li>
            <li className="nav-item"><a href="/contacto" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a href="/contacto" className="nav-link px-2 text-muted">About</a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer