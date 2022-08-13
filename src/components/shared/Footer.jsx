import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import gochi_logo from '../../assets/img/gochi_logo_sf.svg'

const Footer = () => {
  return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center border-top px-4 ">
            <p className="col-12 col-md-4 mb-0 text-center text-md-start text-muted">© 2022 Gochi - Chile</p>
            <a href="/" className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-0 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img src={gochi_logo} width = "9%" height="9%" alt="Gochi"/>
            </a>
            <ul className="nav col-12 col-md-4 justify-content-center justify-content-md-end">
            <li className="nav-item py-0 my-auto"><a href="/" className="nav-link px-2 text-muted my-auto">Home</a></li>
            <li className="nav-item py-0 my-auto"><a href="/nosotros" className="nav-link px-2 text-muted my-auto">Nosotros</a></li>
            <li className="nav-item py-0 my-auto"><a href="/" className="nav-link px-2 fs-1 my-auto text-danger"><RiInstagramFill/></a></li>
            <li className="nav-item py-0 my-auto"><a href="/" className="nav-link px-2 text- fs-2 my-auto"><ImFacebook2/></a></li>
            <li className="nav-item py-0 my-auto" ><a href="/" className="nav-link px-2  fs-1 my-auto text-info"><FaTwitterSquare/> </a></li>
            </ul>
        </footer>
  )
}

export default Footer