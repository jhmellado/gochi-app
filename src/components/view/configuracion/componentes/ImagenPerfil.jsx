import React, { useState } from "react";

const ImagenPerfil = (props) => {
  const [error, setError] = useState(null);
  const [apellido, setApellido] = useState("");

  const procesarApellido = (event) => {
    event.preventDefault();
    if (!apellido.trim()) {
      setError("Ingrese su apellido");
      return;
    }
    setError(null);
  };


  return (
    <div>
      <div className="py-3">
        <div className="text-center">
          <h3>Fotografía</h3>
        </div>
        <div className="text-center">
          <p className="mb-0">Añade una foto tuya al perfil</p>
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
            <div className="container mb-4">
              <div className="d-flex row align-items-end">
                <div className="col-12">
                  <label
                    htmlFor="nombre_form"
                    className="s-mb-1 s-weight-semibold small"
                  >
                    Vista previa imagen de perfil
                  </label>
                  <div className="container">
                    <div className="d-flex row justify-content-center border">
                      <div className="col-4 py-2">
                        <img
                          type="text"
                          className="img-fluid"
                          id="nombre_form"
                          src={"https://img-c.udemycdn.com/user/200_H/anonymous_3.png"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={procesarApellido}>
              <div className="container mb-4">
                <div className="d-flex row align-items-end">
                  <div className="col">
                    <label
                      htmlFor="file_form"
                      className="s-mb-1 s-weight-semibold small"
                    >
                      Añadir o cambiar imagen
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="file_form"
                      accept=".jpg,.jpeg,.png"
                      onChange={(event) => setApellido(event.target.value)}
                      value={apellido}
                    />
                  </div>
                </div>
              </div>
              <div className="container mb-4">
                <div className="d-flex row justify-content-center">
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

export default ImagenPerfil;
