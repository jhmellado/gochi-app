import React, { useEffect } from 'react'
import { useState } from 'react'
import { withRouter } from 'react-router';
import NavbarLogin from './componentes/NavbarLogin';
import NavbarNoLogin from './componentes/NavbarNoLogin';

const Navbar = (props) => {
    const [user, setUser] = useState(false);
    useEffect(() => {
        if (props.firebaseuser) {
            setUser(true)
        } else {
            setUser(false)
        }
    },[props])
  return (
    user?(<NavbarLogin user = {props.firebaseuser}/>):(<NavbarNoLogin/>)
  )
}

export default withRouter(Navbar)