import React, { useState } from "react";
import { RiPlantFill, RiTeamLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

/*import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap/dist/css/bootstrap.min.css'*/
import gochi_logo from "../../../../assets/img/gochi_logo_sf.svg";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";

function NavbarNoLogin({ name }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <div>
          <a href="/">
            <span class="spinner">
              <span>G</span>
              <span>O</span>
              <span>C</span>
              <span>H</span>
              <span>I</span>
            </span>
            <img src={gochi_logo} width="50px" height="50px" alt="Gochi" />
          </a>
        </div>

        <div className={`links ${clicked ? "active" : ""}`}>
          <a className="btn-cultivos mihover btn-estilo" href="/categoria">
            <RiPlantFill className="miicons" />
            Cultivos
          </a>
          <a className="btn-nosotros mihover btn-estilo" href="/nosotros">
            <RiTeamLine className="miicons" />
            Nosotros
          </a>
          <a className="btn-iniciar-sesion mihover btn-estilo" href="/login">
            Iniciar Sesión
          </a>
          <a className="btn-registro" href="/registro">
            Registrarse
            
          </a>
          <FaTwitterSquare className="miicons redtwitter"/>   
        </div>
        
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default NavbarNoLogin;

const NavContainer = styled.nav`
@font-face {
  font-family: fuentetitulo;
  src: url("../../../../fuentes/Caveat//Playball/Playball-Regular.ttf");
}
  h2 {
    font-weight: 400;
    span {
      font-weight: bold;
    }
  } 
  .miicons{
    display: none;
  }
  position:fixed;
  top:0;
  left:0;
  height:60px;
  width: 100%;
  background: rgba(231, 246, 168, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #fff;
    text-decoration: none;
    padding:10px 10px;
    text-transform: uppercase;
    font-family: Lucida Sans ;

  }
  .links a:hover{
    background:rgba(0, 0, 0, 0.2);
    border-radius:6px;
  }
  .links {
    position: absolute;
    top: -1160px;
    left:110;
    right: -1000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a {
      color: transparent ;
      display: block;
      transition: all .4s ease-in-out ;
      right: -1000px;
    }
    @media (min-width: 600px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: #333;
        display: inline;
      }
      display:block;
  }
}

  .links.active {
    width: 30%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
  
    top:120%;
    left: 0;
    right: 10%;
    text-align: center;

    .miicons{
      color: black;
      display: inline ;
      justify-content: center ;
      float: left;
      align-items: center;
    }
    .redtwitter{
      position: absolute;
      display:block;
      left: 14em;
      width: 3em;
      height: 3em;
      top:30rem;
      background-color: red;
    }
   

    .btn-estilo{
      --color: #black;
      padding: 0.4em 1.2em;
      background-color: transparent;
      border-radius: .3em;
      overflow: hidden;
      cursor: pointer;
      transition: .5s;
      font-weight: 300;
      font-size: 14px;
      border: 1px solid;
      font-family: inherit;
      text-transform: uppercase;
      color: var(--color);
      z-index: 1; 

    }
    
    .btn-cultivos{
      position:absolute;
      top:3rem;
      left:5.8rem;
      width: 140%;
      transition: all 0.3s;
      text-align: center;
    }
    .btn-nosotros{
      position:absolute;
      top:6rem;
      left:5.8rem;
      width: 140%;
      transition: all 0.3s;
      text-align:center;
      

    }
    .btn-iniciar-sesion{
      position:absolute;
      top:9rem;
      left:5.8rem;
      width: 140%;
      transition: all 0.3s;
      text-align:center;
    }
    .btn-registro:hover{
      -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 50px 5px rgba(0,0,0,0); 
box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 50px 5px rgba(0,0,0,0);
    }
    .btn-registro{
      position:absolute;
      top:12rem;
      left:5.8rem;
      width: 140%;
      transition: all 0.3s;
      text-align:center;

      --color: #333;
      padding: 0.4em 1.7em;
      background-color: transparent;
      border-radius: .3em;
      
      overflow: hidden;
      cursor: pointer;
      transition: .5s;
      font-weight: 400;
      font-size: 15px;
      border: 1px solid;
      font-family: inherit;
      text-transform: uppercase;
      color: var(--color);
      z-index: 1;
      
    }
    .mihover:hover {
      transition: all 0.8s ease;
      color: #333;
      -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 50px 5px rgba(0,0,0,0); 
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 50px 5px rgba(0,0,0,0);
} 
     

    a {
      font-size:15px;
      margin-top: 1px;
      border-radius: 10px;
      color: #fff;
      text-align: justify;
      background:none;
      transition: all 0.8s ease;
    }
  }
  .burguer {
    @media (min-width: 600px) {
      display:none; 
    
    a {
      color: #333;
      font-size: 2rem;
      display: block;
     
    }
}
`;
const BgDiv = styled.div`
  background: rgba(179, 199, 96, 0.98);
  position: absolute;
  top: 60px;
  right: -2000px;
  left: 2000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  &.active {
    border-radius: 0 0 0 4%;
    top: 60px;
    left: 12.01rem;
    width: 200%;
    height: 2000%;
    overflow: hidden;

    a {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    @media (min-width: 600px) {
      border-radius: none;
      width: 0%;
      height: 0%;
    }
  }
`;

/*<nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e7f6a8"}}>
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
    </nav> */
