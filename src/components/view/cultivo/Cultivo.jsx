import React from "react";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { auth } from "../../../firebase";
import Cargando from "../../component/Cargando";
import Archivos from "./componentes/Archivos";
import BannerPublicidad from "./componentes/BannerPublicidad";
import ComoCultivar from "./componentes/ComoCultivar";
import CuandoCultivar from "./componentes/CuandoCultivar";
import EncabezadoCultivo from "./componentes/EncabezadoCultivo";
import Fertilizantes from "./componentes/Fertilizantes";
import GoodBadVecinos from "./componentes/GoodBadVecinos";
import InfoBeneContraCultivo from "./componentes/InfoBeneContraCultivo";
import InfoNutricional from "./componentes/InfoNutricional";
import MetodosReproduccion from "./componentes/MetodosReproduccion";
import Plagas from "./componentes/Plagas";

const Cultivo = (props) => {
  const [cultivo, setCultivo] = useState([]);

  useEffect(() => {

    const obtenerDatos = async () => {
      const data = await fetch(`http://localhost:5000/cultivos/${props.id}`);
      const users = await data.json();
      setCultivo(users);
    };
    
    if (auth.currentUser) {
      console.log(auth.currentUser);
      obtenerDatos();
    } else {
      props.history.push("/login");
    }
    document.title = "Gochi - Curso";
    document.title = `Gochi - ${props.name}`;
  }, [props]);

 

  return auth.currentUser !== null ? (
    <div className="container">
      <EncabezadoCultivo
        nombre={cultivo.cul_name_go}
        nombre_cientifico={cultivo.cul_cientifico_name_go}
        descripcion={cultivo.cul_description_go}
        imagen_banner={cultivo.cul_banner_go}
      />
      <InfoBeneContraCultivo
        info_beneficios={cultivo.cul_beneficios_go}
        info_contraindicaciones={cultivo.cul_contraindicaciones_go}
      />
      <div className="row g-5">
        <div className="col-md-8">
          <article className="blog-post">
            <InfoNutricional
              info_nutricional={cultivo.cul_info_nutricional_go}
            />
            <CuandoCultivar
              info_cuando_cultivar={cultivo.cul_cuando_cultivar_go}
            />
            <ComoCultivar info_como_cultivar={cultivo.cul_como_cultivar_go} />
            <Fertilizantes info_fertilizantes={cultivo.cul_fertelizantes_go} />
            <GoodBadVecinos
              info_buenos_vecinos={cultivo.cul_buenos_vecinos_go}
              info_malo_vecinos={cultivo.cul_malos_vecinos_go}
            />

            <Plagas info_plagas={cultivo.cul_plagas_comunes} />

            <MetodosReproduccion
              info_m_reproduccion={cultivo.cul_metodo_reproduccion_go}
            />
          </article>
        </div>

        <div className="col-md-4">
          <div className="position-sticky" style={{ top: "2rem" }}>
            <BannerPublicidad />
            <Archivos />
          </div>
        </div>
      </div>
    </div>
  ):(<Cargando/>);
};

export default withRouter(Cultivo);
