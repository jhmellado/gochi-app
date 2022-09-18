import React from "react";
import { useState } from "react";

const MiPerfil = () => {
  const [error, setError] = useState(null);
  const [about, setAbout] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [username, setUsername] = useState("");

  const expresiones = {
    usuarioname: /^[a-zA-Z0-9_-]{4,16}$/,
    sobremi: /^[a-zA-ZÀ-ÿ0-9\s]{4,50}$/,
    name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    lastname: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  };

  const procesarNombre = (event) => {
    event.preventDefault();
    if (!nombre.trim()) {
      setError("Ingrese su nombre");
      return;
    }
    if (expresiones.name.test(nombre) === false) {
      setError("Solo puede ingresar letras");
      return;
    }
    if (nombre.trim().length < nombre.length) {
      setError("No puede haber espacios");
      return;
    }
    if (nombre.indexOf(" ") !== -1) {
      setError("No puede haber espacios en medio");
      return;
    }
    console.log(nombre);
    setError(null);
  };

  const procesarApellido = (event) => {
    event.preventDefault();
    if (!apellido.trim()) {
      setError("Ingrese su apellido");
      return;
    }
    if (expresiones.lastname.test(apellido) === false) {
      setError("Solo puede ingresar letras");
      return;
    }
    if (apellido.trim().length < apellido.length) {
      setError("No puede haber espacios");
      return;
    }
    if (apellido.indexOf(" ") !== -1) {
      setError("No puede haber espacios en medio");
      return;
    }
    console.log(apellido);
    setError(null);
  };

  const procesarAbout = (event) => {
    event.preventDefault();
    if (!about.trim()) {
      setError("Su descripción no debe ir vacía");
      return;
    }
    if (expresiones.sobremi.test(about) === false) {
      setError("Solo puede ingresar letras y números");
      return;
    }
    if (about.trim().length < about.length) {
      setError("No puede haber espacios");
      return;
    }
    console.log(about);
    setError(null);
  };

  const procesarUsername = (event) => {
    event.preventDefault();
    if (!username.trim()) {
      setError("Ingrese su nombre de usuario");
      return;
    }
    if (expresiones.usuarioname.test(username) === false) {
      setError("Solo puede ingresar letras y números");
      return;
    }
    if (username.trim().length < username.length) {
      setError("No puede haber espacios");
      return;
    }
    if (username.indexOf(" ") !== -1) {
      setError("No puede haber espacios en medio");
      return;
    }
    console.log(username);
    setError(null);
  };

  return (
    <div>
      <div className="py-3">
        <div className="text-center">
          <h3>Mi Perfil</h3>
        </div>
        <div className="text-center">
          <p className="mb-0">Añade información sobre ti</p>
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
            <form onSubmit={procesarNombre} className="container mb-4">
              <div className="d-flex row align-items-end">
                <div className="col-9">
                  <label
                    htmlFor="nombre_form"
                    className="s-mb-1 s-weight-semibold small"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre_form"
                    placeholder="Escribe tu nombre"
                    onChange={(event) => setNombre(event.target.value)}
                    value={nombre}
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
            <form onSubmit={procesarApellido} className="container mb-4">
              <div className="d-flex row align-items-end">
                <div className="col-9">
                  <label
                    htmlFor="nombre_form"
                    className="s-mb-1 s-weight-semibold small"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre_form"
                    placeholder="Escribe tu nombre"
                    onChange={(event) => setApellido(event.target.value)}
                    value={apellido}
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
            <form onSubmit={procesarUsername} className="container mb-4">
              <div className="d-flex row align-items-end">
                <div className="col-9">
                  <label
                    htmlFor="nombre_form"
                    className="s-mb-1 s-weight-semibold small"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre_form"
                    placeholder="Escribe tu nombre"
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
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
            <form onSubmit={procesarAbout} className="container mb-4">
              <div className="d-flex row align-items-end">
                <div className="col-9">
                  <label
                    htmlFor="nombre_form"
                    className="s-mb-1 s-weight-semibold small"
                  >
                    Sobre mi
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="nombre_form"
                    placeholder="Escribe una descripción sobre ti 😊"
                    onChange={(event) => setAbout(event.target.value)}
                    value={about}
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

export default MiPerfil;
