import React from "react";
import "../../../view/home/componentes/stylecomponentes/iniciohome.css";
import "../../../../fuentes/Playball/Playball-Regular.ttf";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import gochi_logo from "../../../../assets/img/gochi_logo_sf.svg";
function NavbarNoLogin() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#e7f6a8",
        fontFamily: "fuenteTitulo",
        fontSize: "22px",
      }}
    >
      <div className="container-fluid ">
        <a className="navbar-brand ps-2" href="/" style={{ fontSize: "140%" }}>
          <img src={gochi_logo} width="50px" height="50px" alt="Gochi" />
          Gochi
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas"
          aria-expanded="false"
          aria-labelledby="offcanvasLabel"
        >
          <span className="navbar-toggler-icon"></span>
        </button>{" "}
        <div
          className="container-fluid justify-content-end"
          style={{
            display: "inline-block",
          }}
        >
          <ul className="navbar-nav offcanvas pe-2 my-auto justify-content-end  ">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/categoria">
                Cultivos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/nosotros">
                Nosotros
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/login">
                {" "}
                Iniciar Sesión
              </a>
            </li>
            <li className="nav-item pe-2">
              <a className="nav-link" href="/registro">
                Registrarse
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            backgroundColor: "#e7f6a8",
            width: "50%",
            height: "100%",
          }}
          className="offcanvas offcanvas-end"
          tabIndex="1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset opacity-100 border border-dark rounded-circle"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{ color: "red" }}
            ></button>
          </div>
          <div className="offcanvas--">
            <div className="dropdown offcanvas-header ">
              <a
                href="/categoria"
                id="dropdownMenu"
                className="btn btn-outline-warning text-dark  shadow w-100"
              >
                Cultivos
              </a>
            </div>
          </div>
          <div className="dropdown offcanvas-header">
            <a
              href="/nosotros"
              id="dropdownMenu"
              className="btn btn-outline-warning text-dark shadow w-100"
            >
              Nosotros
            </a>
          </div>
          <div className="dropdown offcanvas-header">
            <a
              href="/login"
              id="dropdownMenu"
              className="btn btn-outline-warning text-dark shadow w-100"
            >
              Iniciar Sesion
            </a>
          </div>
          <div className="dropdown offcanvas-header">
            <a
              href="/registro"
              id="dropdownMenu"
              className="btn btn-outline-warning text-dark shadow w-100"
            >
              Registrarse
            </a>
          </div>
          <div className="offcanvas-header m-auto justify-content-between">
            <a href="wwww.elgochiapp.com" id="sddfs" className="sfds">
              <BsInstagram className="mx-2"
                style={{ color: "red", marginTop: "12rem", fontSize: "30px" }}/>
              </a>
              <a href="https://twitter">
                <BsFacebook className="mx-2" style={{ marginTop: "12rem", fontSize: "30px" }} />
              </a>
              <a href="twitter">
                <BsTwitter className="mx-2"
                  style={{
                    color: "#27F4F1",
                    marginTop: "12rem",
                    fontSize: "30px",
                  }}
                />
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default NavbarNoLogin