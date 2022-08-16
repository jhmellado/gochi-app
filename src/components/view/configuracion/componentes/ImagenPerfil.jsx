import React, { useState } from "react";
import { auth, storage,firebase} from "../../../../firebase";

const ImagenPerfil = (props) => {
  const [error, setError] = useState(null);
  const [imagenInput, setImagenInput] = useState("");

  const procesarApellido = (event) => {
    event.preventDefault();
    if (!imagenInput.trim()) {
      setError("Ingrese su apellido");
      return;
    }
    setError(null);
  };

  const imagenPrevia = (imagen) => {
    var storageRef = storage.ref();
    var listRef = storageRef.child("vista_previa/"+auth.currentUser.uid);
    listRef.listAll()
    .then((res) => {
      res.items.forEach((itemRef) => {
        var desertRef = storageRef.child("vista_previa/"+auth.currentUser.uid+'/'+itemRef.name);
        desertRef.delete().then(() => {
          console.log('File deleted successfully');
        }).catch((error) => {
          console.log(error);
        });
      });
    }).catch((error) => {
        console.log(error);
    });
    var imagenRef = storageRef
      .child("vista_previa/"+auth.currentUser.uid+'/'+imagen.name)
      .put(imagen);
    imagenRef.on('state_changed', (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        default:
          console.log('Algo anda mal')
          break;
        case firebase.storage.TaskState.PAUSED:
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      switch (error.code) {
        default:
          console.log('Algo anda mal')
          break;
        case 'storage/unauthorized':
          console.log(error.message)
          // ('User doesn't have permission to access the object')
          break;
        case 'storage/canceled':
          console.log(error.message)
          // User canceled the upload
          break;
  
        // ...
  
        case 'storage/unknown':
          console.log(error.message)
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      imagenRef.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        setImagenInput(downloadURL);
      });
    });
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
                          alt="vista_previa"
                          src={
                            imagenInput !== ""
                              ? imagenInput
                              : "https://img-c.udemycdn.com/user/200_H/anonymous_3.png"
                          }
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
                      onChange={(event) => imagenPrevia(event.target.files[0])}
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
