import React from 'react'
import { useEffect } from 'react';
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import gochi_logo from '../../assets/img/gochi_logo_sf.svg'
import { useState } from 'react';
import {auth, db} from '../../firebase';
import {withRouter} from 'react-router-dom';

const Registro = (props) => {

  useEffect(()=> {
    document.title = "Gochi - Registro";
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
        setError(null)
        registrar()
      }

  const registrar = React.useCallback(async()=>{
    try {
        const res = await auth.createUserWithEmailAndPassword(email, contrasena)
        console.log(res.user)
        await db.collection('usuarios').doc(res.user.uid).set({
            uid: res.user.uid,
            email: res.user.email
        })
        setContrasena('')
        setEmail('')
        setError(null)
        props.history.push('/userprofile')
    } catch (error) {
        console.log(error)
        if(error.code === 'auth/invalid-email'){
            setError('Correo electrónico no válido')
        }
        if(error.code === 'auth/email-already-in-use'){
            setError('Email ya utilizado')
        }
    }
  },[email,contrasena,props.history])

  return (
    <div className="container my-5">
        <div className='row justify-content-center'>
            <div className='col-12 col-sm-8 col-md-6 col-xl-4 my-auto mb-4'> 
                <form onSubmit={procesarInputs}>
                    <img className='mx-auto d-block' src={gochi_logo} alt="" width="50%" height="50%"/>
                    <h1 className="h3 mb-3 fw-normal text-center">
                        Formulario de Registro
                    </h1>
                    {
                        error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )
                    }
                    <div className="form-floating">
                        <input type="email" className="form-control mb-2" id="floatingInput" 
                               placeholder="name@example.com"
                               onChange={(event) => setEmail(event.target.value)}
                               value = {email}
                        />
                        <label htmlFor="floatingInput">E-mail</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control mb-2" id="floatingPassword" 
                           placeholder="Password"
                           onChange={(event) => setContrasena(event.target.value)}
                           value = {contrasena}
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <button className="w-100 btn btn-lg" style={{backgroundColor: "#b3c760"}} type="submit">
                        Registrarse
                    </button>
                    <p className="mb-3 text-muted">¿Ya estas registrado? <a href='/login'>Inicia Sesión</a></p>
                </form>
            </div>
        </div>
  </div>
  )
}

export default withRouter(Registro)