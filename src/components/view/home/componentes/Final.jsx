import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import "./stylecomponentes/iniciohome.css";
function Final({ fondo1, fondo2, fondo3, titulo1, titulo2, titulo3, link1, link2, link3}) {
  return (
    <div class="container px-4 py-5" id="custom-cards">
      <h2 class="pb-2 border-bottom">Conoce sobre..</h2>

      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <a className="tarjetita" href={link1} style={{'text-decoration': 'none'}}>
        <div class="col tarjetita">
        
        
          <div
            class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              background: `url(${fondo1})`,
            }}
          >
            
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
            {titulo1}
              </h2>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <img
                    src="https://www.hogarmania.com/archivos/201910/remedios-naturales-con-plantas-medicinales-848x477x80xX.jpg"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    class="rounded-circle border border-white"
                   
                  />
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>Ir</small>
                </li>
                <li class="d-flex align-items-center">
                <BsFillArrowRightSquareFill/>
                  <small>{/*un texto*/}</small>
                </li>
              </ul>
              
            </div>
           
          </div>
          
        </div>
        </a>
        
        <a className="tarjetita" href={link2} style={{'text-decoration': 'none'}}>
        <div class="col tarjetita">
          <div
            class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
                background: `url(${fondo2})`,
              }}
          >
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                {titulo2}
              </h2>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <img
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-plantas-flores-verano-1625816917.jpg?resize=640:*"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    class="rounded-circle border border-white"
                  />
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>Ir</small>
                </li>
                <li class="d-flex align-items-center">
                <BsFillArrowRightSquareFill/>
                  <small>{/*un texto*/}</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </a>
        <a className="tarjetita" href={link3} style={{'text-decoration': 'none'}}>
        <div class="col">
          <div
            class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
                background: `url(${fondo3})`,
              }}
          >
            <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold ">
                {titulo3}
              </h2>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <img
                    src="https://www.hogarmania.com/archivos/202202/calendario-fruta-verduras-temporada-668x400x80xX-1.jpg"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    class="rounded-circle border border-white"
                  />
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>Ir</small>
                </li>
                <li class="d-flex align-items-center">
                <BsFillArrowRightSquareFill/>
                  <small>{/*un texto*/}</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Final;
