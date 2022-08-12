import React from 'react'
import { useEffect, useState,} from 'react'
import CardCultivo from './CardCultivo'

const Album = (props) => {

    const [cultivos, setCultivos] = useState([]);
 
    useEffect(() => {
      document.title = `Gochi - ${props.categoria}`
      const obtenerDatos = async () => {
        const data = await fetch(`http://0b993829-ecd8-4c41-b93f-032c40fcb786.clouding.host:3000/cultivos/${props.categoria}`)
        const users = await data.json()
        setCultivos(users)
    }
      obtenerDatos();
    }, [props.categoria]);

    const frutales = cultivos.length > 0 ? (cultivos.map((cultivo, index)=>
        <CardCultivo key = {index} 
                    nombre = {cultivo.cul_name_go} 
                    temporada = {cultivo.cul_cuando_cultivar_go.cul_temporada_siembra_go}
                    imagen = {cultivo.cul_icon_go}
                    href = {cultivo._id} />
    )) : (<h2>Aún no hay cultivos para esta categoría</h2>)

  return (
    <div className="album py-5 bg-light">
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {frutales}
            </div>
        </div>
    </div>
  )
}

export default Album