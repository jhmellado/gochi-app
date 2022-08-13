import React from 'react'
import { useEffect, useState,} from 'react'
import ItemsCategoriaCultivo from './ItemsCategoriaCultivo'



const ComponenteCategoriasCultivo = (props) => {

  const [categorias, setCategorias] = useState([]);
 
  useEffect(() => {
    document.title = "Gochi - Cultivos"
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch('http://a0f8ad0f-c3e0-4ad1-b6e5-b9cd87a74995.clouding.host:3000/categorias/')
    const users = await data.json()
    setCategorias(users["docs"])
}

  const categoriacultivo = categorias.map((categoria, index)=>
    <ItemsCategoriaCultivo key = {index} 
                           nombre = {categoria.cat_cul_name_go} 
                           descripcion = {categoria.cat_cul_description_go} 
                           total = {categoria.cat_cul_totalcultivos_go} 
                           imagen = {categoria.cat_cul_imagen_go}
                           href = {categoria.cat_cul_href_go} />
  );


  return (
    <div className='col-sm-8 mx-auto'>
        {categoriacultivo}
    </div>
  )
}

export default ComponenteCategoriasCultivo