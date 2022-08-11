import React from "react";
import { useEffect } from "react";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import gochi_logo from "../../assets/img/gochi_logo_sf.svg";
import { useState } from "react";
import { auth, firebase } from "../../firebase";
import { withRouter } from "react-router-dom";
import { useCallback } from "react";

const Login = (props) => {
  useEffect(() => {
    document.title = "Gochi - Login";
  }, []);

  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
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
    console.log("Pasando todas las validaciones");
    setError(null);
    iniciarSesionCorreo();
  };

  const iniciarSesionGoogle = useCallback(async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const res = await auth.signInWithPopup(provider);
      console.log(res)
      props.history.push("/userprofile");
      props.history.go(0);
    } catch (error) {
      console.log(error);
    }
  }, [props]);

  const iniciarSesionCorreo = useCallback(async () => {
    try {
      auth
        .signInWithEmailAndPassword(email, contrasena)
        .then((response) => {
          //props.history.push('/userprofile')
          setContrasena("");
          setEmail("");
          setError(null);
          console.log(response.user.email);
          props.history.push("/userprofile");
          props.history.go(0);
        })
        .catch((error) => {
          console.log(error);
          if (error.code === "auth/user-not-found") {
            setError("Correo no registrado");
          }
          if (error.code === "auth/wrong-password") {
            setError("Contraseña incorrecta");
          }
        });

      //console.log(res.user)
      setContrasena("");
      setEmail("");
      setError(null);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") {
        setError("Correo no registrado");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
    }
  }, [email, contrasena, props.history]);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div
          className="contenedortodo col-11 col-sm-8 col-md-6 col-xl-4 mb-4 rounded"
          style={{
            backgroundColor: "#e7f6a8",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#293800",
          }}
        >
          <div>
            <img
              className="mx-auto py-0 d-block"
              src={gochi_logo}
              alt="gochi_logo"
              width="30%"
              height="30%"
            />
          </div>

          <h1 className="h2 mb-4 text-center">Inicia Sesión</h1>
          <div>
            <p>
              <strong>Usa tu cuenta de Google</strong>
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => iniciarSesionGoogle()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7%"
                height="7%"
                viewBox="0 0 184 184"
              >
                <path
                  d="M40.778,199.771l-6.4,23.91-23.409.5a92.161,92.161,0,0,1-.677-85.909h.005l20.841,3.821,9.13,20.716a54.906,54.906,0,0,0,.516,36.967Z"
                  transform="translate(0 -88.578)"
                  fill="#fbbb00"
                ></path>
                <path
                  d="M350,208.176a91.965,91.965,0,0,1-32.8,88.932l-.005-.005-26.25-1.339-3.715-23.192a54.831,54.831,0,0,0,23.591-28H261.628v-36.4H350Z"
                  transform="translate(-167.605 -133.363)"
                  fill="#518ef8"
                ></path>
                <path
                  d="M169.136,361.955l.005.005A92.03,92.03,0,0,1,30.509,333.814l29.814-24.405a54.716,54.716,0,0,0,78.847,28.014Z"
                  transform="translate(-19.545 -198.215)"
                  fill="#28b446"
                ></path>
                <path
                  d="M169.061,21.18l-29.8,24.4A54.709,54.709,0,0,0,58.6,74.227L28.629,49.69h-.005A92.019,92.019,0,0,1,169.061,21.18Z"
                  transform="translate(-18.337)"
                  fill="#f14336"
                ></path>
              </svg>
              <span>Google</span>
            </button>
            <p className="mb-3 text-muted text-center">
              <small>
                *Al ingresar aceptas los{" "}
                <a href="/terminos-y-condiciones">Términos y condiciones</a>
              </small>
            </p>
          </div>

          <form onSubmit={procesarInputs}>
            {error && <div className="alert alert-danger">{error}</div>}

            <p>
              <strong>O usa tu correo electrónico</strong>
            </p>
            <div className="col-md">
              <label
                htmlFor="floatingInput"
                className="s-mb-1 s-weight-semibold small"
              >
                E-mail
              </label>
              <input
                type="email"
                className="form-control mb-3"
                id="floatingInput"
                placeholder="Escribe tu correo electrónico"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="col-md">
              <label
                htmlFor="floatingPassword"
                className="s-mb-1 s-weight-semibold small"
              >
                Contraseña
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="floatingPassword"
                placeholder="Escribe tu contraseña"
                onChange={(event) => setContrasena(event.target.value)}
                value={contrasena}
              />
            </div>
            <button
              className="w-100 btn btn-secondary"
              type="submit"
            >
              Iniciar Sesión
            </button>
            <p className="mb-3 text-muted text-center">
              ¿No tienes una cuenta? <a href="/registro">Registrate aquí</a>
            </p>
            <p className="mb-3 text-muted text-center">
              <a href="/resetpassword">¿Olvidaste tu contraseña?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
