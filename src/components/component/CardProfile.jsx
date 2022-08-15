import React from "react";
import gochi from "../../assets/img/GOCHI.svg";
import { RiPlantLine } from "react-icons/ri";

const CardProfile = (props) => {
  return (
    <div className="col">
      <div className="card shadow">
        <img className="card-img" src={gochi} alt="gochi" />
        <div className="card-img-overlay">
          <div>
            <h4 className="card-text text-center">{props.nombre}</h4>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-sm w-100 my-auto btn-light position-absolute bottom-0 start-0"
            >
              <RiPlantLine />
              Ver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
