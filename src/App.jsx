import React from "react";
import Home from "./components/view/Home";
import Cursos from "./components/view/Cursos";
//import Contacto from "./components/view/Contacto"
import Login from "./components/view/Login";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Nosotros from "./components/view/Nosotros";
import Registro from "./components/view/Registro";
import Footer from "./components/shared/Footer";
import UserProfile from "./components/view/UserProfile";
import Curso from "./components/view/curso/Curso";
import CategoriaCultivos from "./components/view/CategoriaCultivos";
import Cultivos from "./components/view/cultivos/Cultivos";
import Cultivo from "./components/view/cultivo/Cultivo";
import Navbar from "./components/shared/Navbar/Navbar";

import { auth } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFirebaseUser(user);
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
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path="/userprofile">
          <UserProfile />
        </Route>
        <Route path="/cursos">
          <Cursos />
        </Route>
        <Route path="/curso">
          <Curso />
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
            return <Cultivo id={match.params.id} name={match.params.name} />;
          }}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  ) : (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="text-center" style={{display: "block", 
                                       position: "fixed",
                                       zIndex: "1031",
                                       top: "50%",
                                       right: "50%",
                                       marginTop: "-38px",
                                       marginRight: "-43px"}}>
            <div className="spinner-border" role="status"></div>
            <p><strong>Cargando...</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
