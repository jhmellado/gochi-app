import React from "react";
import InfoBeneCard from "./InfoBeneCard";
import InfoContraCard from "./InfoContraCard";

const InfoBeneContraCultivo = (props) => {
  return (
    <div className="row mb-2">
      <InfoBeneCard info_beneficios = {props.info_beneficios}/>
      <InfoContraCard info_contraindicaciones = {props.info_contraindicaciones}/>
    </div>
  );
};

export default InfoBeneContraCultivo;
