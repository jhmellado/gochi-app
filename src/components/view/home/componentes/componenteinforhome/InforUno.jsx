import React from "react";

function InforUno({
  titulo1,
  titulo2,
  titulo3,
  descripcion1,
  descripcion2,
  descripcion3,
  imagenPlantas,
  fechaArticulo
}) {
  return (
    <div className="p-5 my-5 text-center border-bottom">
      <article className="blog-post col-md-10 text-start">
        <h2 className="blog-post-title mb-1">{titulo1}</h2>
        <p className="blog-post-meta">{fechaArticulo}</p>

        <p>{descripcion1}</p>
        <hr />
        <h2>{titulo2} </h2>
        <p>{descripcion2}</p>

        <h3>{titulo3}</h3>
        <p>{descripcion3}</p>
        <img className="img-fluid" src={imagenPlantas} alt={""}/>
      </article>
    </div>
  );
}
export default InforUno;
