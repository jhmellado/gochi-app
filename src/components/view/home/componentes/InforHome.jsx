import React from "react";
import "../../../shared/Navbar/styleNav/stylenav.css";

function InforHome({ titulo, descripcion, imagen, derecha, link }) {
  
  if (derecha === true) {
    return (
      <div className="contenedortodo container-fluid">
        <div className="contenedortodo container-fluid">
          <div className="contenedortodo row flex-lg-row-reverse align-items-center g-2 py-5">
            <div className="contenedortodo col-12 col-sm-8 col-lg-6">
              <img
                src={imagen}
                className="imagen-uno 
                img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
                
              />
            </div>
            <div className="col-lg-6">
              <h1 className="contenedortodo display-5 fw-bold lh-1 mb-3">
                {titulo}
              </h1>
              <p className="contenedortodo lead">{descripcion}</p>
              <div className="contenedortodo d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                  href={link}
                  className="btn bg-warning bg-opacity-50 btn-lg active"
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
        <div className="contendor container-fluid">
          <div className="row flex-lg-row align-items-center g-2 py-3">
            <div className="col-12 col-sm-8 col-lg-6">
              <img
                src={imagen}
                className="contenedor d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="contenedor display-5 fw-bold lh-1 mb-3">{titulo}</h1>
              <p className="lead">{descripcion}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a
                  href={link}
                  className="btn bg-warning bg-opacity-50 btn-lg active"
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
