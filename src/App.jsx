import React from "react";
import Home from "./components/view/home/Home";
import Cursos from "./components/view/Cursos";
//import Contacto from "./components/view/Contacto"
import Login from "./components/view/Login";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Nosotros from "./components/view/Nosotros";
import Registro from "./components/view/Registro";
import Footer from "./components/shared/Footer";
import UserProfile from "./components/view/userprofile/UserProfile";
import Curso from "./components/view/curso/Curso";
import CategoriaCultivos from "./components/view/CategoriaCultivos";
import Cultivos from "./components/view/cultivos/Cultivos";
import Cultivo from "./components/view/cultivo/Cultivo";
import Navbar from "./components/shared/Navbar/Navbar";

import { auth, db } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";
import TerminosCondiciones from "./components/view/TerminosCondiciones";
import ResetPassword from "./components/view/ResetPassword";
import Cargando from "./components/component/Cargando";
import Configuracion from "./components/view/configuracion/Configuracion";

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);
  

  const obtenerUsuario = (user) => {
    db.collection("usuarios")
  .doc(user.uid)
  .onSnapshot((doc) => {
    setFirebaseUser(doc.data());
  });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        obtenerUsuario(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  return firebaseUser !== false ? (
    <BrowserRouter>
      <Navbar firebaseuser={firebaseUser} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
        <Route path="/resetpassword">
          <ResetPassword />
        </Route>
        <Route path="/terminos-y-condiciones">
          <TerminosCondiciones/>
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path="/userprofile">
          <UserProfile usuario ={firebaseUser} />
        </Route>
        <Route path="/cursos">
          <Cursos />
        </Route>
        <Route path="/curso">
          <Curso usuario ={firebaseUser} />
        </Route>
        <Route path="/categoria">
          <CategoriaCultivos />
        </Route>
        <Route
          path="/cultivos/:name"
          render={({ match }) => {
            return <Cultivos categoria={match.params.name} />;
          }}
        />
        <Route
          path="/cultivo/:name/:id"
          render={({ match }) => {
            return <Cultivo usuario ={firebaseUser} id={match.params.id} name={match.params.name} />;
          }}
        />
        <Route
          path="/configuracion/:id"
          render={({ match }) => {
            return <Configuracion usuario ={firebaseUser} id={match.params.id}/>;
          }}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  ) : (
    <Cargando/>
  );
}

export default App;
