import React from "react";
import Home from "./components/view/Home";
import Cursos from "./components/view/Cursos";
import Contacto from "./components/view/Contacto"
import Login from "./components/view/Login"
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory } from 'history';

import Nosotros from "./components/view/Nosotros";
import Registro from "./components/view/Registro";
import Footer from "./components/shared/Footer";
import UserProfile from "./components/view/UserProfile";
import Curso from "./components/view/curso/Curso";
import NavbarLogin from "./components/shared/NavbarLogin";
import Navbar from "./components/shared/Navbar";
import Cultivos from "./components/view/Cultivos";


const history = createBrowserHistory();

function App() {
  const isAuthenticated = true;
  return (
      <Router history={history}>
        {
          isAuthenticated ? (<NavbarLogin/>):(<Navbar/>)
        }
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/login"><Login/></Route>
            <Route path="/registro"><Registro/></Route>
            <Route path="/contacto"><Contacto/></Route>
            <Route path="/nosotros"><Nosotros/></Route>
            <Route path="/userprofile"><UserProfile/></Route>
            <Route path="/cursos" ><Cursos/></Route>
            <Route path="/curso" ><Curso/></Route>  
            <Route path="/cultivos" ><Cultivos/></Route> 
          </Switch>
        <Footer/>
      </Router>
      );
}


export default App;


