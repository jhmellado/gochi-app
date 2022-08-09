import React from "react";

const CardComentario = (props) => {
  return (
    <li>
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-content-center mx-2">
            <div className="d-flex justify-content-start my-auto">
              <div className="p-0">
                <img
                  className="rounded-circle"
                  alt="soypabloerazo"
                  src={props.imagen}
                  height="30"
                  width="30"
                />
              </div>
              <div className="my-auto ms-2">{props.username}</div>
            </div>
            <div className="my-auto small">fecha</div>
          </div>
        </div>

        <div className="card-body">
          <p className="card-text">
            {props.comentario}
          </p>
          <div className="justify-constent-end">
            <button className="btn btn-primary btn-sm float-end">
              Responder
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardComentario;
