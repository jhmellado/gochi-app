import React from "react";
import { useState } from "react";

const RedesSociales = () => {
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [error, setError] = useState(null);

  const procesarInstagram = (event) => {
    event.preventDefault();
    if (!instagram.trim()) {
      setError("Ingrese su enlace de perfil de Instagram");
      return;
    }
    setError(null);
  };

  const procesarFacebook = (event) => {
    event.preventDefault();
    if (!facebook.trim()) {
      setError("Ingrese su enlace de perfil de Facebook");
      return;
    }
    setError(null);
  };

  const procesarTwitter = (event) => {
    event.preventDefault();
    if (!twitter.trim()) {
      setError("Ingrese su enlace de perfil de Twitter");
      return;
    }
    setError(null);
  };

  return (
    <div>
      <div className="py-3">
        <div className="text-center">
          <h3>Redes Sociales</h3>
        </div>
        <div className="text-center">
          <p className="mb-0">Añade tus redes sociales</p>
        </div>
      </div>
      <hr />
      <div className="container py-5">
        <div className="d-flex row justify-content-center">
          <div className="col-12 col-md-6 px-0">
            <div className="container">
              {error && <div className="alert alert-danger">{error}</div>}
              <p>
                <strong>Ingresa tus datos</strong>
              </p>
            </div>
            <form onSubmit={procesarInstagram} className="container mb-4">
              <div className="d-flex row align-items-end">
                <div className="col-9">
                  <label
                    htmlFor="nombre_form"
                    className="s-mb-1 s-weight-semibold small"
                  >
                    Instagram
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre_form"
                    placeholder="Ingrese su enlace de perfil"
                    onChange={(event) => setInstagram(event.target.value)}
                    value={instagram}
                  />
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-sm"
                    style={{ backgroundColor: "#b3c760" }}
                    type="submit"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
            <form onSubmit={procesarFacebook} className="container mb-4">
              <div className="d-flex row align-items-end">
                <div className="col-9">
                  <label
                    htmlFor="nombre_form"
                    className="s-mb-1 s-weight-semibold small"
                  >
                    Facebook
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre_form"
                    placeholder="Ingrese su enlace de perfil"
                    onChange={(event) => setFacebook(event.target.value)}
                    value={facebook}
                  />
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-sm"
                    style={{ backgroundColor: "#b3c760" }}
                    type="submit"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
            <form onSubmit={procesarTwitter} className="container mb-4">
              <div className="d-flex row align-items-end">
                <div className="col-9">
                  <label
                    htmlFor="nombre_form"
                    className="s-mb-1 s-weight-semibold small"
                  >
                    Twitter
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre_form"
                    placeholder="Ingrese su enlace de perfil"
                    onChange={(event) => setTwitter(event.target.value)}
                    value={twitter}
                  />
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-sm"
                    style={{ backgroundColor: "#b3c760" }}
                    type="submit"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedesSociales;
