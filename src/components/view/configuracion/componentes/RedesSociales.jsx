import React from "react";
import { useState } from "react";
import { db } from "../../../../firebase";

const RedesSociales = (props) => {
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [error, setError] = useState(null);

  const expresiones = {
    ig: /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/gim,
    fb: /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/,
    twt: /(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/g,
  };

  const updateInstagramUser = () => {
    db.collection("usuarios")
      .doc(props.usuario.uid)
      .update({
        instagram: {
          exist: true,
          url: instagram,
        },
      })
      .then((res) => {
        setError("Perfil de instagram actualizado");
        setInstagram("");
      });
  };

  const updateFacebookUser = () => {
    db.collection("usuarios")
      .doc(props.usuario.uid)
      .update({
        facebook: {
          exist: true,
          url: facebook,
        },
      })
      .then((res) => {
        setError("Perfil de facebook actualizado");
        setFacebook("");
      });
  };

  const updateTwitterUser = () => {
    db.collection("usuarios")
      .doc(props.usuario.uid)
      .update({
        twitter: {
          exist: true,
          url: twitter,
        },
      })
      .then((res) => {
        setError("Perfil de twitter actualizado");
        setTwitter("");
      });
  };

  const procesarInstagram = (event) => {
    event.preventDefault();
    if (!instagram.trim()) {
      setError("Ingrese su enlace de perfil de Instagram");
      return;
    }
    if (expresiones.ig.test(instagram) === false) {
      setError("Por favor ingrese un enlace de perfil de instagram");
      return;
    }
    if (instagram.trim().length < instagram.length) {
      setError("No puede haber espacios");
      return;
    }
    if (instagram.indexOf(" ") !== -1) {
      setError("No puede haber espacios en medio");
      return;
    }
    setError(null);
    updateInstagramUser();
  };

  const procesarFacebook = (event) => {
    event.preventDefault();
    if (!facebook.trim()) {
      setError("Ingrese su enlace de perfil de Facebook");
      return;
    }
    if (expresiones.fb.test(facebook) === false) {
      setError("Por favor ingrese un enlace de perfil de facebook");
      return;
    }
    if (facebook.trim().length < facebook.length) {
      setError("No puede haber espacios");
      return;
    }
    if (facebook.indexOf(" ") !== -1) {
      setError("No puede haber espacios en medio");
      return;
    }
    setError(null);
    updateFacebookUser();
  };

  const procesarTwitter = (event) => {
    event.preventDefault();
    if (!twitter.trim()) {
      setError("Ingrese su enlace de perfil de Twitter");
      return;
    }
    if (expresiones.twt.test(twitter) === false) {
      setError(
        "Por favor ingrese un enlace de perfil de twitter, con el siguiente formato: https://twitter.com/..."
      );
      return;
    }
    if (twitter.trim().length < twitter.length) {
      setError("No puede haber espacios");
      return;
    }
    if (twitter.indexOf(" ") !== -1) {
      setError("No puede haber espacios en medio");
      return;
    }
    setError(null);
    updateTwitterUser();
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
              {error && (
                <div
                  className={
                    error !== "Perfil de instagram actualizado" &&
                    error !== "Perfil de facebook actualizado" &&
                    error !== "Perfil de twitter actualizado"
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
