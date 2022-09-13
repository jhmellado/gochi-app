import React from "react";
//import gochi from "../../assets/img/GOCHI.svg";
import { RiPlantLine } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardProfile = (props) => {
  return (
    <div className="col">
      <div className="card shadow">
        <LazyLoadImage className="card-img" src={props.imagen} alt={props.nombre}/>
        <div className="card-img-overlay">
          <div>
            <a
              href={props.url}
              type="button"
              className="btn btn-sm w-100 my-auto btn-light position-absolute bottom-0 start-0"
            >
              <RiPlantLine />
              Ver
            </a>
          </div>
        </div>
        <div className="card-body pt-1">
        <p className="text-center">{props.nombre}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
