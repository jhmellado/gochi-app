import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import gochi_logo from "../../../../assets/img/gochi_logo_sf.svg";
import { withRouter } from "react-router";
import { auth } from "../../../../firebase";

const NavbarLogin = (props) => {
  const cerrarSesion = () => {
    auth.signOut().then(() => {
      props.history.push("/");
      props.history.go(0);
    });
  };
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
              <a className="nav-link" href="/cursos">
                GochiMedia
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/nosotros">
                {" "}
                Nosotros
              </a>
            </li>
            <li
              className="nav-item dropdown"

            >
              <a
                href="/"
                className="link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={gochi_logo}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
                style={{fontFamily:"sans-serif"}}
              >
                <li>
                  <a className="dropdown-item" href="/userprofile">
                    Mi perfil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href={`/configuracion/${auth.currentUser.uid}`}>
                    Configuración
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => cerrarSesion()}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          style={{
            backgroundColor: "#e7f6a8",
            width: "50%",
            height: "100%",
            fontFamily: "Helvetica",
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
              href="/cursos"
              id="dropdownMenu"
              className="btn btn-outline-warning text-dark shadow w-100"
            >
              GochiMedia
            </a>
          </div>
          <div className="dropdown offcanvas-header">
            <a
              href="/userprofile"
              id="dropdownMenu"
              className="btn btn-outline-warning text-dark shadow w-100"
            >
              Mi perfil
            </a>
          </div>
          <div className="dropdown offcanvas-header">
            <a
              href={`/configuracion/${auth.currentUser.uid}`}
              id="dropdownMenu"
              className="btn btn-outline-warning text-dark shadow w-100"
            >
              Configuracion
            </a>
          </div>
          <hr className="offcanvas-divider" />
          <div className="dropdown offcanvas-header">
            <a
              href="-"
              onClick={() => cerrarSesion()}
              className="btn btn-outline-warning text-dark shadow w-100"
            >
              Cerrar sesion
            </a>
          </div>
          <hr className="offcanvas-divider" />
          <div className="offcanvas-header pt-5 justify-content-center p-0">
            <img
              src={gochi_logo}
              alt="mdo"
              width="70"
              height="70"
              className="rounded-circle"
            />
          </div>
          <div className="offcanvas-header justify-content-center p-0">
            <a href="wwww.elgochiapp.com" id="sddfs" className="">
              <BsInstagram
                className="mx-2"
                style={{ color: "red", fontSize: "30px" }}
              />
              <a href="https://twitter">
                <BsFacebook className="mx-2" style={{ fontSize: "30px" }} />
              </a>
              <a href="twitter">
                <BsTwitter
                  className="mx-2"
                  style={{
                    color: "#27F4F1",
                    fontSize: "30px",
                  }}
                />
              </a>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(NavbarLogin);
