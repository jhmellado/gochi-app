import React from "react";


function Nosotro({
  titulo1,
  titulo2,
  titulo3,
  titulo4,
  descripcion1,
  descripcion2,
  descripcion3,
  descripcion4,
  imagen
  
}) {
  return (
    <div class="container py-4">
      <header class="pb-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center text-dark text-decoration-none"
        >
          <svg
            width="24"
            height="24"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 9.01L10.01 8.99889"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 9.01L14.01 8.99889"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 13.01L10.01 12.9989"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 13.01L14.01 12.9989"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 17.01L10.01 16.9989"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 17.01L14.01 16.9989"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 20.4V5.6C6 5.26863 6.26863 5 6.6 5H12V3.6C12 3.26863 12.2686 3 12.6 3H17.4C17.7314 3 18 3.26863 18 3.6V20.4C18 20.7314 17.7314 21 17.4 21H6.6C6.26863 21 6 20.7314 6 20.4Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="fs-4">Nosotros</span>
        </a>
      </header>

      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">{titulo1}</h1>
          <p class="col-md-8 fs-4">{descripcion1}</p>
          <button class="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>

      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 text-white bg-dark rounded-3">
            <h2>{titulo2}</h2>
            <p>{descripcion2}</p>
            <button class="btn btn-outline-light" type="button">
              Example button
            </button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-light border rounded-3">
            <h2>{titulo3}</h2>
            <p>{descripcion3}
            </p>
            <button class="btn btn-outline-secondary" type="button">
              Example button
            </button>
          </div>
        </div>
      </div>

      <footer class="pt-3 mt-4 text-muted border-top"><section class="banner">
        <div className="containerB">
          <div className="boxB col1 ">
            <img src="{imagen}" className="imgbanner " alt="hola"></img>
          </div>
          <div className="boxB col2">
            <h1 className="texto_nosotros">{titulo4}</h1>
            <p id="txtBanner">{descripcion4}</p>
          </div>
        </div>
      </section></footer>
    </div>
  );
}

export default Nosotro;