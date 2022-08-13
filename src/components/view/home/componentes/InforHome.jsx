import React from "react";
import "../../../shared/Navbar/styleNav/stylenav.css";

function InforHome({ titulo, descripcion, imagen, derecha, link }) {
  
  if (derecha === true) {
    return (
      <div className="contenedortodo container-fluid">
        <div class="contenedortodo container-fluid">
          <div class="contenedortodo row flex-lg-row-reverse align-items-center g-2 py-5">
            <div class="contenedortodo col-12 col-sm-8 col-lg-6">
              <img
                src={imagen}
                class="imagen-uno 
                img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
                
              />
            </div>
            <div class="col-lg-6">
              <h1 class="contenedortodo display-5 fw-bold lh-1 mb-3">
                {titulo}
              </h1>
              <p class="contenedortodo lead">{descripcion}</p>
              <div class="contenedortodo d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                  href={link}
                  class="btn bg-warning bg-opacity-50 btn-lg active"
                  role="button"
                 aria-pressed="false"
                >  Saber mas..
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (derecha === false) {
    return (
      <div className="contenedor container-fluid">
        <div class="contendor container-fluid">
          <div class="row flex-lg-row align-items-center g-2 py-3">
            <div class="col-12 col-sm-8 col-lg-6">
              <img
                src={imagen}
                class="contenedor d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="contenedor display-5 fw-bold lh-1 mb-3">{titulo}</h1>
              <p class="lead">{descripcion}</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <a
                  href={link}
                  class="btn bg-warning bg-opacity-50 btn-lg active"
                  role="button"
                 aria-pressed="true"
                >  Saber mas..
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <di>HOLA</di>;
}
export default InforHome;
