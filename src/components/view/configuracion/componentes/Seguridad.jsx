import React, { useState } from "react";

const Seguridad = (props) => {
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
          <h3>Cuenta</h3>
        </div>
        <div className="text-center">
          <p className="mb-0">
            Edita la configuración de tu cuenta y cambia la contraseña aquí.
          </p>
        </div>
      </div>
      <hr />
      <div className="container py-5">
        <div className="d-flex row justify-content-center">
          <div className="col-12 col-md-6 px-0">
            <div className="container">
              {error && <div className="alert alert-danger">{error}</div>}
              <p>
                <strong>Cambiar Correo Electrónico</strong>
              </p>
            </div>
            <form onSubmit={procesarInstagram} className="container mb-4">
              <div className="d-flex row align-items-end">
                <div className="col-9">
                  <label
                    htmlFor="nombre_form"
                    className="s-mb-1 s-weight-semibold small"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre_form"
                    placeholder="Ingrese su nuevo e-mail"
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
          </div>
        </div>
      </div>
      <hr />
      <div className="container py-5">
        <div className="d-flex row justify-content-center">
          <div className="col-12 col-md-6 px-0">
            <div className="container">
              {error && <div className="alert alert-danger">{error}</div>}
              <p>
                <strong>Cambiar Contraseña</strong>
              </p>
            </div>

            <form onSubmit={procesarFacebook}>
              <div className="container mb-4">
                <div className="d-flex row align-items-end">
                  <div className="col-9">
                    <label
                      htmlFor="nombre_form"
                      className="s-mb-1 s-weight-semibold small"
                    >
                      Contraseña nueva
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre_form"
                      placeholder="Ingrese su nueva contraseña"
                      onChange={(event) => setFacebook(event.target.value)}
                      value={facebook}
                    />
                  </div>
                </div>
              </div>
              <div className="container mb-4">
                <div className="d-flex row align-items-end">
                  <div className="col-9">
                    <label
                      htmlFor="nombre_form"
                      className="s-mb-1 s-weight-semibold small"
                    >
                      Repetir contraseña nueva
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre_form"
                      placeholder="Repita su nueva contraseña"
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seguridad;
