import React from "react";
import "./stylecomponentes/iniciohome.css";

function InicioHome({
  titulo,
  descripcion,
}) {
  return (
    <div className="contenedorinicio">
      <div className="contenedor-texto">
      <h1 className="titulohome">{titulo}</h1>

      <p>{descripcion}</p>
      <button className="btn-registrar">Registrarse
      </button>
      </div>
    </div>
  );
}

export default InicioHome;
/* <div className={imagen}>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
        <div className="contendor container-fluid position-relative overflow-hidden">
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner container-block ">
    <div class="carousel-item active ">
      <img src={imagenuno} class="imagentodos d-block w-100 vw-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={imagendos} class="imagentodos d-block w-100 hidden-xs img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={imagentres} class="imagentodos d-block w-100 hidden-xs img-fluid" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
          <h1 className="display-4 fw-normal text-white">{titulo}</h1>
          <p className="lead fw-normal text-white">{descripcion}</p>
          <a className="btn btn-success w-100" href="/registro">
            Registrate
          </a>
        </div>
      </div>
    </div>
    
    <div className={imagen}>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
        
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          
        <div className="contendor container-fluid ">
          
          

</div>

          <h1 className="display-4 fw-normal text-white">{titulo}</h1>
          
          <p className="lead fw-normal text-white">{descripcion}</p>
          <a className="btn btn-success w-100" href="/registro">
            Registrate
          </a>
        </div>
      </div>
    </div>
    */
