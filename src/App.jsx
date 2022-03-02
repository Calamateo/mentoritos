import React, { useState } from "react";
import AboutUs from "./modulos/AboutUs";
import MentorsMenu from "./modulos/MentorsMenu";
import Home from "./modulos/Home";
import Navbar from "./modulos/Navbar";
import Page404 from './modulos/Page404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./modulos/Login";
import { auth } from './firebase'
import Configuracion from './modulos/Configuracion';
import { MentorsProfileModule } from "./modulos/MentorsProfile";
import { Mentor } from "./mentor"
import { UrlDynamic } from './modulos/urlDynamic';
import Loading from './modulos/Loading'
import PersonalInfoStep from "./modulos/MultiStepForm/PersonalnfoStep";
import MentorInfoStep from "./modulos/MultiStepForm/MentorInfoStep";
import StudentInfoStep from "./modulos/MultiStepForm/StudentInfoStep";

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false);

  const [user, setUser] = useState({});

  const updateUser = (values) => {
    setUser((prevUser) => ({ ...prevUser, ...values }));
  };

  const [mentorprofileInformation, setMentorProfile] = React.useState({
    "name": "Merida valiente",
    "sobremi": "hola yo soy merida valiente",
    "educacion": "por el momento no tengo educacion",
    "datosCuriosos": "Soy super ensenando",
    "nombrePerfil": "Sofía Aguilar",
    "locacionPerfil": "Guadalajara, Jalisco",
    "emailPerfil": "sa.aguilarvaldez@gmail.com",
    "presentacion": "¡Hola! Me llamo Sofía y estoy buscando un mentor para aprender matemáticas.",
    "imagePerfil": "./Rosa Carrillo Saturno.png"
  })

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged(user => {
        console.log(user)
        setTimeout(() => {
          if (user) {
            setFirebaseUser(user)
          } else {

            setFirebaseUser(null)
          }
        }, 2500)
      })
    }
    fetchUser()
  }, [])

  // const RutaPrivada = ({ component, path, ...rest }) => {
  //   if (localStorage.getItem('usuario')) {
  //     const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
  //     if (usuarioStorage.uid === firebaseUser.uid) {
  //       return <Route component={component} path={path} {...rest} />
  //     }
  //   }
  // }





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

          <Route path="/loading">
            <Loading />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/MentorsMenu">
            <MentorsMenu info={Mentor} />
          </Route>

          <Route path="/mentorsProfile">
            <MentorsProfileModule mentorProfileInformationParameter={mentorprofileInformation} setMentorProfileFunction={setMentorProfile} />{/* Se pueden utilizar props se eliminariam mentorProfileInformationParameter setMentorProfileFunction*/}
          </Route>

          <Route path="/:typeP/:userId">
            <UrlDynamic

              error={null}

              mentor={mentorprofileInformation}

              setmentor={setMentorProfile}
            />
            {/* Se pueden utilizar props se eliminariam mentorProfileInformationParameter setMentorProfileFunction*/}
          </Route>



          <Route path="/configuracion" exact>
            <Configuracion />
          </Route>

          <Route path="*">
            <Page404 />
          </Route>
        </Switch >
      </div >
    </Router >
  ) : (
    <div>
      <Loading />
    </div>
  )
}

export default App;
