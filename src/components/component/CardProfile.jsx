import React from "react";
import gochi from "../../assets/img/GOCHI.svg";
import { RiPlantLine } from "react-icons/ri";

const CardProfile = (props) => {
  return (
    <div className="col">
      <div className="card shadow">
        <img className="card-img" src={gochi} alt="gochi" />
        <div className="card-img-overlay">
          <h4 className="card-text">{props.nombre}</h4>
          <button type="button" className="btn btn-sm btn-light">
            <RiPlantLine />
            Ver
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
