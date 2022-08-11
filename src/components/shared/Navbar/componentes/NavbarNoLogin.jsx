import React, { useState } from "react";
import { RiPlantFill, RiTeamLine } from "react-icons/ri";
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
          <a className="btn-cultivos" href="/categoria">
            <RiPlantFill className="miicons" /> Cultivos
          </a>

          <a className="btn-nosotros" href="/nosotros">
            <RiTeamLine className="miicons" /> Nosotros
          </a>
          <a className="btn-iniciar-sesion" href="/login">Iniciar Sesión</a>
          <a className="btn-registro" href="/registro">
            Registrarse
          </a>
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

  font-family: itali;
  background: rgba(231, 246, 168, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  a {
    color: #fff;
    text-decoration: none;
    
    padding:10px 10px;

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
    @media (min-width: 768px) {
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
      display: inline;
      color: green;
    }
    
    .btn-cultivos{
      position:absolute;
      top:10rem;
      
      left:0;
      width: 140%;
      transition: all 0.3s;
      text-align:center;

      --color: #00A97F;
      padding: 0.4em 1.2em;
      background-color: transparent;
      border-radius: .3em;
      
      overflow: hidden;
      cursor: pointer;
      transition: .5s;
      font-weight: 300;
      font-size: 17px;
      border: 1px solid;
      font-family: inherit;
      text-transform: uppercase;
      color: var(--color);
      z-index: 1; 

      
     
    }
    .btn-nosotros{
      position:absolute;
      top:13.5rem;
      
      left:0;
      width: 140%;
      transition: all 0.3s;
      text-align:center;

      --color: #00A97F;
      padding: 0.4em 1.2em;
      background-color: transparent;
      border-radius: .3em;
      
      overflow: hidden;
      cursor: pointer;
      transition: .5s;
      font-weight: 300;
      font-size: 17px;
      border: 1px solid;
      font-family: inherit;
      text-transform: uppercase;
      color: var(--color);
      z-index: 1;

    }
    .btn-iniciar-sesion{
      box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.1), 0 0 9px 3px rgba(27, 253, 156, 0.1);
 
      position:absolute;
      top:17rem;
      
      left:0;
      width: 140%;
      transition: all 0.3s;
      text-align:center;

      --color: #00A97F;
      padding: 0.4em 1.2em;
      background-color: transparent;
      border-radius: .3em;
      
      overflow: hidden;
      cursor: pointer;
      transition: .5s;
      font-weight: 300;
      font-size: 17px;
      border: 1px solid;
      font-family: inherit;
      text-transform: uppercase;
      color: var(--color);
      z-index: 1;
    }

    .btn-registro{
      
      position:absolute;
      top:20.5rem;
      left:0;
      width: 140%;
      transition: all 0.3s;
      text-align:center;
      box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);

      --color: #00A97F;
      padding: 0.4em 1.7em;
      background-color: transparent;
      border-radius: .3em;
      
      overflow: hidden;
      cursor: pointer;
      transition: .5s;
      font-weight: 400;
      font-size: 17px;
      border: 1px solid;
      font-family: inherit;
      text-transform: uppercase;
      color: var(--color);
      z-index: 1;
      
    }
    .btn-registro:hover {
      color: #82ffc9;
      box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);
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
    @media (min-width: 768px) {
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
    top: 61px;
    left: 0.01rem;
    width: 200%;
    height: 2000%;
    overflow: hidden;

    &.active:target{
      display: none;
     
    }

    

    a {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    @media (min-width: 760px) {
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
