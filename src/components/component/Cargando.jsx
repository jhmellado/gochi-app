import React from 'react'

const Cargando = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="text-center" style={{display: "block", 
                                       position: "fixed",
                                       zIndex: "1031",
                                       top: "50%",
                                       right: "50%",
                                       marginTop: "-38px",
                                       marginRight: "-43px"}}>
            <div className="spinner-border" role="status"></div>
            <p><strong>Cargando...</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cargando