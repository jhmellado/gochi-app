import React from "react";

function Nosotro({titulo, descripcion, imagen}) {
    return( 
<div className="pt-4">
<section class="banner">
<div className="containerB">
  <div className="boxB col1 ">
    <img
      src={imagen}
      className="imgbanner "
      alt="hola"
    ></img>
  </div>
  <div className="boxB col2">
    <h1 className='texto_nosotros'>{titulo}</h1>
    <p id="txtBanner">{descripcion}
    </p>
  </div>
</div>
</section>
</div>
)}

export default Nosotro;