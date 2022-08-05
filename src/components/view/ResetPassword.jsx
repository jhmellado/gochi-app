import React from 'react'
import { useEffect } from 'react';
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import gochi_logo from '../../assets/img/gochi_logo_sf.svg'
import { useState } from 'react';
import {auth} from '../../firebase'
import { useCallback } from 'react';
import {withRouter} from 'react-router-dom'

const ResetPassword = (props) => {

    useEffect(()=> {
        document.title = "Gochi - Recupera tu contraseña";
      },[])
    
      const [email, setEmail] = useState('');
      const [error, setError] = useState(null);

      const procesarInputs = (event) => {
        event.preventDefault()
        if(!email.trim()){
          setError('Ingrese Email')
          return
        }
        
        setError(null)
        recuperar()
      }

      const recuperar = useCallback(async () => {
            try {
                await auth.sendPasswordResetEmail(email)
                console.log("Correo Enviado")
                props.history.push('/login')
                props.history.go(0)
            } catch (error) {
                console.log(error)
                setError(error.message)
            }
      },[email, props])

  return (
    <div className="container my-5">
      <div className='row justify-content-center'>
        <div className='col-11 col-sm-8 col-md-6 col-xl-4 mb-4 rounded'
        style={{backgroundColor: "#e7f6a8",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#293800",
        }}> 
          <form onSubmit={procesarInputs}>
            <img className='mx-auto d-block' src={gochi_logo} alt="" width="30%" height="30%"/>
            <h1 className="h2 mb-5 text-center">
              Reiniciar Contraseña
            </h1>
            <div className="alert alert-warning">
                  ¡ATENCIÓN! Luego de presionar el botón "Reiniciar Contraseña" debes revisar el correo electrónico que te enviaremos al e-mail que ingresaste en el formulario
                </div>
            {
              error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )
            }
            <div className="col-md">
            <label htmlFor="floatingInput"
                   className="s-mb-1 s-weight-semibold small">E-mail</label>
              <input type="email" className="form-control mb-3" id="floatingInput" 
                     placeholder="Escribe tu correo electrónico"
                     onChange={(event) => setEmail(event.target.value)}
                     value = {email}
              />
              
            </div>
            <button className="mb-3 w-100 btn btn-lg text-white" style={{backgroundColor: "#293800"}} type="submit">
              Reiniciar Contraseña
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ResetPassword)