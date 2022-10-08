import React from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import Cargando from "../../../component/Cargando";
import CardCultivo from "./CardCultivo";

const Album = (props) => {
  const [cultivos, setCultivos] = useState([]);

  const obtenerDatos = useCallback(async () => {
    const data = await fetch(
      `http://1ec6706f-039a-4041-98ba-8caa0ad572db.clouding.host:3000/cultivos/${props.categoria}`
    );
    const users = await data.json();
    setCultivos(users);
  }, [props]);

  useEffect(() => {
    document.title = `Gochi - ${props.categoria}`;
    obtenerDatos();
  }, [props.categoria, obtenerDatos]);

  const generarCardsCultivos = () => {
    const frutales =
      cultivos.length > 0 ? (
        cultivos.map((cultivo, index) => (
          <CardCultivo
            key={index}
            nombre={cultivo.cul_name_go}
            temporada={cultivo.cul_cuando_cultivar_go.cul_temporada_siembra_go}
            imagen={cultivo.cul_icon_go}
            href={cultivo._id}
          />
        ))
      ) : (
        null
      );
    return frutales;
  };

  return cultivos !== [] ? (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {generarCardsCultivos()}
        </div>
      </div>
    </div>
  ) : (
    <Cargando />
  );
};

export default Album;
