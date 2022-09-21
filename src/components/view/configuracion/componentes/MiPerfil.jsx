import React from "react";
import { useState } from "react";
import { db } from "../../../../firebase";

const MiPerfil = (props) => {
  const [error, setError] = useState(null);
  const [about, setAbout] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [username, setUsername] = useState("");

  const expresiones = {
    usuarioname: /^[a-zA-Z0-9_-]{4,16}$/,
    sobremi: /[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g,
    name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,  
    lastname: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  };

  const updateNombre = () => {
    const displayName = props.usuario.displayName;
    const arrayDisplayName = displayName.split(" ");
    switch (arrayDisplayName.length) {
      case 1:
        db.collection("usuarios")
          .doc(props.usuario.uid)
          .update({
            displayName: nombre,
          })
          .then((res) => {
            setError("Nombre actualizado");
            setNombre("");
          });
        break;

      case 2:
        db.collection("usuarios")
          .doc(props.usuario.uid)
          .update({
            displayName: nombre + " " + arrayDisplayName[1],
          })
          .then((res) => {
            setError("Nombre actualizado");
            setNombre("");
          });
        break;

      case 3:
        db.collection("usuarios")
          .doc(props.usuario.uid)
          .update({
            displayName:
              nombre + " " + arrayDisplayName[1] + " " + arrayDisplayName[2],
          })
          .then((res) => {
            setError("Nombre actualizado");
            setNombre("");
          });
        break;

      case 4:
        db.collection("usuarios")
          .doc(props.usuario.uid)
          .update({
            displayName:
              nombre + " " + arrayDisplayName[2] + " " + arrayDisplayName[3],
          })
          .then((res) => {
            setError("Nombre actualizado");
            setNombre("");
          });
        break;

      default:
        db.collection("usuarios")
          .doc(props.usuario.uid)
          .update({
            displayName: nombre,
          })
          .then((res) => {
            setError("Nombre actualizado");
            setNombre("");
          });
        break;
    }
  };

  const updateApellido = () => {
    const displayName = props.usuario.displayName;
    const arrayDisplayName = displayName.split(" ");
    switch (arrayDisplayName.length) {
      case 1:
        db.collection("usuarios")
          .doc(props.usuario.uid)
          .update({
            displayName: arrayDisplayName[0] + " " + apellido,
          })
          .then((res) => {
            setError("Apellido actualizado");
            setApellido("");
          });
        break;

      case 2:
        db.collection("usuarios")
          .doc(props.usuario.uid)
          .update({
            displayName: arrayDisplayName[0] + " " + apellido,
          })
          .then((res) => {
            setError("Apellido actualizado");
            setApellido("");
          });
        break;

      case 3:
        db.collection("usuarios")
          .doc(props.usuario.uid)
          .update({
            displayName:
              arrayDisplayName[0] + " " + arrayDisplayName[1] + " " + apellido,
          })
          .then((res) => {
            setError("Apellido actualizado");
            setApellido("");
          });
        break;

      case 4:
        db.collection("usuarios")
          .doc(props.usuario.uid)
          .update({
            displayName:
              arrayDisplayName[0] +
              " " +
              arrayDisplayName[1] +
              " " +
              arrayDisplayName[2] +
              " " +
              apellido,
          })
          .then((res) => {
            setError("Apellido actualizado");
            setApellido("");
          });
        break;

      default:
        db.collection("usuarios")
          .doc(props.usuario.uid)
          .update({
            displayName: apellido,
          })
          .then((res) => {
            setError("Apellido actualizado");
            setApellido("");
          });
        break;
    }
  };

  const updateAbout = () => {
    db.collection("usuarios")
      .doc(props.usuario.uid)
      .update({
        about_me: about,
      })
      .then((res) => {
        setError("Información actualizada");
        setAbout("");
      });
  };

  const updateUsername = () => {
    db.collection("usuarios")
      .doc(props.usuario.uid)
      .update({
        username: username,
      })
      .then((res) => {
        setError("Usuario actualizado");
        setUsername("");
      });
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
    updateNombre();
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
    updateApellido();
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
    updateAbout();
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
    updateUsername();
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
              {error && (
                <div
                  className={
                    error !== "Nombre actualizado" &&
                    error !== "Apellido actualizado" &&
                    error !== "Información actualizada" &&
                    error !== "Usuario actualizado"
                      ? "alert alert-danger"
                      : "alert alert-success"
                  }
                  role={"alert"}
                >
                  {error}
                </div>
              )}
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
