import React from "react";
import "../stylehome/InforHome.css";
import "../../../shared/Navbar/styleNav/stylenav.css";

function InforHome({ titulo, descripcion, imagen, derecha }) {
  if (derecha === true) {
    return (
      <div className="contenedortodo container-fluid">
        <div class="contenedortodo container-fluid">
          <div class="contenedortodo row flex-lg-row-reverse align-items-center g-2 py-3">
            <div class="contenedortodo col-12 col-sm-8 col-lg-6">
              <img
                src={imagen}
                class="contenedor 
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
                <div className="contenedortodo container loader   p-1 me-md-2"></div>
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
                <button
                  type="button"
                  class="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Conocer mas...
                </button>
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
