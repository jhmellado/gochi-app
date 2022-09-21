import React, { useState } from "react";
import { useEffect } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { db } from "../../../../firebase";
import CardProfile from "../../../component/CardProfile";

const Tabs = (props) => {
  const [toggleState, setToggleState] = useState(1);
  const [recopilacionfav, setRecopilacionFav] = useState([]);
  const [cultivofav, setCultivoFav] = useState([]);

  useEffect(() => {
    db.collection("favoritos")
      .doc(props.usuario.uid)
      .collection("cursos")
      .orderBy("name", "asc")
      .get()
      .then((querySnapshot) => {
        var cursos = [];
        querySnapshot.forEach((doc) => {
          cursos.push(doc.data());
        });
        setRecopilacionFav(cursos);
      });
    db.collection("favoritos")
      .doc(props.usuario.uid)
      .collection("cultivos")
      .orderBy("name", "asc")
      .get()
      .then((querySnapshot) => {
        var cultivos = [];
        querySnapshot.forEach((doc) => {
          cultivos.push(doc.data());
        });
        setCultivoFav(cultivos);
      });
  }, [props]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <ul className="nav nav-tabs nav-justified mx-0">
        <li className="nav-item">
          <button
            className={
              toggleState === 1 ? "nav-link active" : "nav-link link-secondary"
            }
            onClick={() => toggleTab(1)}
          >
            Cultivos
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={
              toggleState === 2 ? "nav-link active" : "nav-link link-secondary"
            }
            onClick={() => toggleTab(2)}
          >
            Recopilaciones
          </button>
        </li>
      </ul>

      <div className="tab-content">
        {toggleState === 1 ? (
          <div className="fade show active">
            <div className="album pt-3 bg-white">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {cultivofav.length > 0 ? (
                    cultivofav.map((cultivo, index) => (
                      <LazyLoadComponent key={index}>
                        <CardProfile
                          nombre={cultivo.name}
                          imagen={cultivo.imagen}
                          url={cultivo.url}
                        />
                      </LazyLoadComponent>
                    ))
                  ) : (
                    <h3>No hay cultivos</h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {toggleState === 2 ? (
          <div className="fade show active">
            <div className="album pt-3 bg-white">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {recopilacionfav.length > 0 ? (
                    recopilacionfav.map((recopilacion, index) => (
                      <LazyLoadComponent key={index}>
                        <CardProfile
                          nombre={recopilacion.name}
                          imagen={recopilacion.imagen}
                          url={recopilacion.url}
                        />
                      </LazyLoadComponent>
                    ))
                  ) : (
                    <h3>No hay recopilaciones</h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Tabs;
