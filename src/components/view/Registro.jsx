import React from "react";
import { useEffect } from "react";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import gochi_logo from "../../assets/img/gochi_logo_sf.svg";
import { useState } from "react";
import { auth, db } from "../../firebase";
import { withRouter } from "react-router-dom";
import "../view/home/stylehome/InforHome.css"

const Registro = (props) => {
  useEffect(() => {
    document.title = "Gochi - Registro";
  }, []);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarpassword, setConfirmarpassword] = useState("");
  const [error, setError] = useState(null);

  const procesarInputs = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      setError("Ingrese Email");
      return;
    }
    if (!contrasena.trim()) {
      setError("Ingresa Constraseña");
      return;
    }
    if (contrasena.length < 6) {
      setError("Contreseña de 6 o más caracteres");
      return;
    }
    setError(null);
    registrar();
  };

  const registrar = React.useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, contrasena);
      await db.collection("usuarios").doc(res.user.uid).set({
        uid: res.user.uid,
        email: res.user.email,
      });
      setContrasena("");
      setEmail("");
      setError(null);
      props.history.push("/userprofile");
      props.history.go(0);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Correo electrónico no válido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Email ya utilizado");
      }
    }
  }, [email, contrasena, props.history]);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div
          className="contenedortodo col-11 col-sm-8 col-md-6 col-xl-6 rounded"
          style={{backgroundColor: "#e7f6a8",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#b3c760",
          }}
        >
          <form onSubmit={procesarInputs}>
            <img
              className="mx-auto d-block"
              src={gochi_logo}
              alt=""
              width="30%"
              height="30%"
            />
            <h1 className="h2 mb-5 text-center">
              Iníciate en el autocultivo con Gochi
            </h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <p>
              <strong>Ingresa tus datos</strong>
            </p>
            <div className="row g-3 mb-3">
              <div className="col-md">
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
              <div className="col-md">
                <label
                  htmlFor="apellido_form"
                  className="s-mb-1 s-weight-semibold small"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido_form"
                  placeholder="Escribe tu apellido"
                  onChange={(event) => setApellido(event.target.value)}
                  value={apellido}
                />
              </div>
            </div>
            <div className="col-md">
              <label
                htmlFor="email_form"
                className="s-mb-1 s-weight-semibold small"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control mb-3"
                id="email_form"
                placeholder="name@example.com"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="row g-3 mb-3">
              <div className="col-md">
                <label
                  htmlFor="form_contrasena"
                  className="s-mb-1 s-weight-semibold small"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="form_contrasena"
                  placeholder="Escribe tu contraseña"
                  onChange={(event) => setContrasena(event.target.value)}
                  value={contrasena}
                />
              </div>
              <div className="col-md">
                <label
                  htmlFor="floatingPassword"
                  className="s-mb-1 s-weight-semibold small"
                >
                  Confirma tu contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Escribe tu contraseña otra vez"
                  onChange={(event) => setConfirmarpassword(event.target.value)}
                  value={confirmarpassword}
                />
              </div>
            </div>
            <div className="text-center s-mb-2 m-cols-2 mb-3">
              <input
                type="checkbox"
                className="me-2"
                name="accept"
                id="accpet"
                required="hola"
              />
              <label htmlFor="accept" className="s-mb-0">
                Aceptar
                <a
                  href="/terminos-y-condiciones"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Términos y condiciones
                </a>
              </label>
            </div>
            <button
              className="w-100 btn btn-lg"
              style={{ backgroundColor: "#b3c760" }}
              type="submit"
            >
              Registrarse
            </button>
            <p className="mb-3 text-muted text-center">
              ¿Ya estas registrado? <a href="/login">Inicia Sesión</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Registro);
