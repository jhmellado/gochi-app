import React from 'react'
import { useEffect } from 'react';
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import gochi_logo from '../../assets/img/gochi_logo_sf.svg'
import { useState } from 'react';
import {auth} from '../../firebase'
import {withRouter} from 'react-router-dom'



const Login = (props) => {


  useEffect(()=> {
    document.title = "Gochi - Login";
  },[])

  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState(null);

  const procesarInputs = (event) => {
    event.preventDefault()
    if(!email.trim()){
      setError('Ingrese Email')
      return
    }
    if(!contrasena.trim()){
      setError('Ingresa Constraseña')
      return
    }
    if(contrasena.length < 6){
      setError('Contreseña de 6 o más caracteres')
      return
    }
    console.log('Pasando todas las validaciones')
    setError(null)
    iniciarSesion()
  }

  const iniciarSesion = React.useCallback(async()=>{
    try {
        auth.signInWithEmailAndPassword(email,contrasena).then((response) =>{
          //props.history.push('/userprofile')
        setContrasena('')
        setEmail('')
        setError(null)
        console.log(response.user.email)
        props.history.push('/userprofile')
        props.history.go(0)
        }).catch((error)=>{
          console.log(error)
        if(error.code === 'auth/user-not-found'){
            setError('Correo no registrado')
        }
        if(error.code === 'auth/wrong-password'){
            setError('Contraseña incorrecta')
        }
        })
        
        //console.log(res.user)
        setContrasena('')
        setEmail('')
        setError(null)
        
    } catch (error) {
        console.log(error)
        if(error.code === 'auth/user-not-found'){
            setError('Correo no registrado')
        }
        if(error.code === 'auth/wrong-password'){
            setError('Contraseña incorrecta')
        }
    }
  },[email,contrasena,props.history])

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
              Ingresa tus datos
            </h1>
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
            <div className="col-md">
            <label htmlFor="floatingPassword"
                   className="s-mb-1 s-weight-semibold small">Contraseña</label>
              <input type="password" className="form-control mb-3" id="floatingPassword" 
                     placeholder="Escribe tu contraseña"
                     onChange={(event) => setContrasena(event.target.value)}
                     value = {contrasena}
                     />
            </div>
            <button className="w-100 btn btn-lg text-white" style={{backgroundColor: "#293800"}} type="submit">
              Iniciar Sesión
            </button>
            <p className="mb-3 text-muted text-center">¿No tienes una cuenta? <a href='/registro'>Registrate aquí</a></p> 
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Login)