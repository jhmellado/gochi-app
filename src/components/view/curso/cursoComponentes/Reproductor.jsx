import React from 'react'

const Reproductor = (props) => {
  return (
    <iframe name="iframe_gochi" 
            height={"480p"}
            allowFullScreen
            className='embed-responsive-item' 
            src={props.src} 
            frameBorder="0"
            title='Hola'></iframe>
  )
}

export default Reproductor