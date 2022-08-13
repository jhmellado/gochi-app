import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import "./stylecomponentes/iniciohome.css";
function Final({
  fondo1,
  fondo2,
  fondo3,
  titulo1,
  titulo2,
  titulo3,
  link1,
  link2,
  link3,
}) {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Conoce sobre..</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

          <div className="col">
            <div
              className="shadow  card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${fondo1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
              }}
            >
              <div className="d-flex flex-column h-100 p-5 text-white text-shadow-1">
                <h2 className="my-auto py-5 display-6 lh-1 fw-bold">{titulo1}</h2>
              </div>
            </div>
          </div>


          <div className="col">
            <div
              className="shadow card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                background: `url(${fondo2})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
              }}
            >
              <div className="d-flex flex-column h-100 p-5 text-white text-shadow-1">
                <h2 className="my-auto py-5 display-6 lh-1 fw-bold">{titulo2}</h2>
              </div>
            </div>
          </div>
        
          <div className="col">
            <div
              className="shadow card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                background: `url(${fondo3})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
              }}
            >
              <div className="d-flex flex-column h-100 p-5  text-wrap">
                <h2 className="my-auto py-5 display-6 lh-1 fw-bold ">
                  {titulo3}
                </h2>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Final;
