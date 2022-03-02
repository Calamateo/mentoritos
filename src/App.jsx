import React, { useState } from "react";
import AboutUs from "./modulos/AboutUs";
import Home from "./modulos/Home";
import Navbar from "./modulos/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./modulos/Login";
import PersonalInfoStep from "./modulos/MultiStepForm/PersonalnfoStep";
import MentorInfoStep from "./modulos/MultiStepForm/MentorInfoStep";
import StudentInfoStep from "./modulos/MultiStepForm/StudentInfoStep";

import { auth } from "./firebase";
import Configuracion from "./modulos/Configuracion";
import { MentorsProfileModule } from "./modulos/MentorsProfileModules";
import { UserProfileInformation } from "./modulos/UserProfile";

let mentorProfile = {
  name: "Merida valiente",
  sobremi: "hola yo soy merida valiente",
  educacion: "por el momento no tengo educacion",
  datosCuriosos: "Soy super ensenando",
};

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false);

  const [user, setUser] = useState({});

  const updateUser = (values) => {
    setUser((prevUser) => ({ ...prevUser, ...values }));
  };

  const resetUser = () => {
    setUser({});
  };

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
          setFirebaseUser(user);
        } else {
          setFirebaseUser(null);
        }
      });
    };
    fetchUser();
  }, []);

  const RutaPrivada = ({ component, path, ...rest }) => {
    if (localStorage.getItem("usuario")) {
      const usuarioStorage = JSON.parse(localStorage.getItem("usuario"));
      if (usuarioStorage.uid === firebaseUser.uid) {
        return <Route component={component} path={path} {...rest} />;
      }
    }
  };

  return firebaseUser !== false ? (
    <Router>
      <div>
        <Navbar firebaseUser={firebaseUser} />
        <Switch>
          <Route path="/login">
            <Login login1={false} />
          </Route>
          <Route
            render={(props) => (
              <PersonalInfoStep
                {...props}
                user={user}
                updateUser={updateUser}
              />
            )}
            path="/first"
          ></Route>
          <Route path="/MentorInfoStep">
            <MentorInfoStep />
          </Route>
          <Route path="/StudentInfoStep">
            <StudentInfoStep />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/singUp">
            <Login login1={true} />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/mentorsProfile">
            <MentorsProfileModule mentorP={mentorProfile} />
          </Route>

          <Route path="/userProfileInfo">
            <UserProfileInformation mentorP={mentorProfile} />
          </Route>

          <RutaPrivada path="/configuracion" exact>
            <Configuracion />
          </RutaPrivada>
        </Switch>
      </div>
    </Router>
  ) : (
    <div>Cargando...</div>
  );
}

export default App;
