import React from 'react'


const Acercade = (props) => {
  return (
        <div className='my-5'>
            <h3>
                Acerca de este curso
            </h3>
            <p className='my-2 mb-4'>
                {props.about}
            </p>
            <hr />
            <div className='row'>
                <div className="col-3">
                    <p>Descripción</p>
                </div>
                <div className="col-9">
                    <p>
                        {props.description}
                    </p>
                </div>  
            </div>
            <hr />
            <div className='row'>
                <div className="col-3">
                    <p>Instructor</p>
                </div>
                <div className="col-9">
                    <div className='row mb-3'>
                        <div className="col-2">
                        <img 
                            className="mw-100 rounded-circle"
                            src={props.profile_img}
                            alt="Profile"
                            />
                        </div>
                        <div className="col">
                            <p className='mb-0'> <strong>{props.name}</strong></p>
                            <p>{props.oficio}</p>
                        </div>
                    </div>
                    <div>
                        <a href={props.url_perfil} target="_blank" rel="noreferrer">
                        <img 
                            className='col pb-3'
                            width="7%"
                            height ="7%"
                            src={props.url_image_social}
                            alt="Profile"
                            />
                        </a>
                    </div>
                    <div>
                        <p>
                        Hola, soy bluuweb! ({props.name}) un canal en Youtube que trata de proporcionar la mejor energía para enseñar a programar, si estás listo para aprender no dudes en darme una oportunidad :)
                        </p>
                    </div>
                </div>  
            </div>
        </div>
  )
}

export default Acercade