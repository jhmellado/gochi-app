import React from "react";
import Home from "./components/view/home/Home";
import Cursos from "./components/view/cursos/Cursos";
//import Contacto from "./components/view/Contacto"
import Login from "./components/view/Login";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import PlantasInfo from "./components/view/home/componentes/componenteinforhome/PlantasInfo";
import ArticuloUno from "./components/view/home/componentes/componenteinforhome/ArticuloUno";
import ArticuloDos from "./components/view/home/componentes/componenteinforhome/ArticuloDos";

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
import Encuesta from "./components/view/encuesta/Encuesta";

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
        <Route path="/plantas">
          <PlantasInfo />
        </Route>
        <Route path="/articulouno">
          <ArticuloUno />
        </Route>
        <Route path="/articulodos">
          <ArticuloDos />
        </Route>
        <Route path="/login">
          <Login
            userprofile={true}
            my={5}
            contenedor={
              "contenedortodo col-11 col-sm-8 col-md-6 col-xl-4 mb-4 rounded"
            }
          />
        </Route>
        <Route path="/encuesta">
          <Encuesta />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
        <Route path="/resetpassword">
          <ResetPassword />
        </Route>
        <Route path="/terminos-y-condiciones">
          <TerminosCondiciones />
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path="/userprofile">
          <UserProfile usuario={firebaseUser} />
        </Route>
        <Route path="/cursos">
          <Cursos />
        </Route>
        <Route
          path="/curso/:id"
          render={({ match }) => {
            return <Curso usuario={firebaseUser} id={match.params.id} />;
          }}
        ></Route>
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
            return (
              <Cultivo
                usuario={firebaseUser}
                id={match.params.id}
                name={match.params.name}
              />
            );
          }}
        />
        <Route
          path="/configuracion/:id"
          render={({ match }) => {
            return (
              <Configuracion usuario={firebaseUser} id={match.params.id} />
            );
          }}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  ) : (
    <Cargando />
  );
}

export default App;
