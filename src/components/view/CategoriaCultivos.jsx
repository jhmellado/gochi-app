import React from 'react'
import BannerPublicidad from './componentesCultivos/BannerPublicidad'
import ComponenteCategoriasCultivo from './componentesCultivos/ComponenteCategoriasCultivo'
import EncabezadoCultivo from './componentesCultivos/EncabezadoCultivo'

const CategoriaCultivos = () => {


  return (
    <div>
      <EncabezadoCultivo/>
      <hr className='divider'/>
        <div className="row mx-0 px-0">
          <ComponenteCategoriasCultivo/>
          <BannerPublicidad/>       
        </div>
    </div>
  )
}

export default CategoriaCultivos