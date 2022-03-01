import React from 'react'
import AboutUs from "./modulos/AboutUs";
import Home from "./modulos/Home";
import Navbar from "./modulos/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./modulos/Login";
import { auth } from './firebase'
import Configuracion from './modulos/Configuracion';
import {MentorsProfileModule} from "./modulos/MentorsProfile";
import reactDom from 'react-dom';


function App() {  

  const [mentorprofileInformation, setMentorProfile] = React.useState({
    "name":"Merida valiente",
    "sobremi":"hola yo soy merida valiente",
    "educacion": "por el momento no tengo educacion",
    "datosCuriosos":"Soy super ensenando"
    })

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged(user => {
        console.log(user)
        if (user) {
          setFirebaseUser(user)
        } else {
          setFirebaseUser(null)
        }
      })
    }
    fetchUser()
  }, [])

  const RutaPrivada = ({ component, path, ...rest }) => {
    if (localStorage.getItem('usuario')) {
      const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
      if (usuarioStorage.uid === firebaseUser.uid) {
        return <Route component={component} path={path} {...rest} />
      }
    }
  }





  return firebaseUser !== false ? (
    <Router>
      <div >
        <Navbar firebaseUser={firebaseUser} />
        <Switch>
          <Route path="/login">
            <Login login1={false} />
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
            <MentorsProfileModule mentorProfileInformationParameter = {mentorprofileInformation} setMentorProfileFunction = {setMentorProfile}/>{/* Se pueden utilizar props se eliminariam mentorProfileInformationParameter setMentorProfileFunction*/}
          </Route>
          
          {/*<Route path="/userProfileInfo">
            <UserProfileInformation mentorP={mentorProfile} />
  </Route>*/}

          <RutaPrivada path="/configuracion" exact>
            <Configuracion />
          </RutaPrivada>
        </Switch>
      </div>
    </Router>
  ) : (
    <div>Cargando...</div>
  )
}

export default App;
