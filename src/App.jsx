import React, { useState } from "react";
import AboutUs from "./modulos/AboutUs";
import MentorsMenu from "./modulos/MentorsMenu";
import Home from "./modulos/Home";
import Navbar from "./modulos/Navbar";
import Page404 from "./modulos/Page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./modulos/Login";
import { auth } from "./firebase";
import Configuracion from "./modulos/Configuracion";
import { MentorsProfileModule } from "./modulos/MentorsProfile";
import { Mentor } from "./mentor";
import { UrlDynamic } from "./modulos/urlDynamic";
import Loading from "./modulos/Loading";
import PersonalInfoStep from "./modulos/MultiStepForm/PersonalnfoStep";
import MentorInfoStep from "./modulos/MultiStepForm/MentorInfoStep";
import StudentInfoStep from "./modulos/MultiStepForm/StudentInfoStep";
import ShoppingCar from "./modulos/ShoppingCar/ShoppingCar";
import ShoppingCar2 from "./modulos/ShoppingCar/ShoppingCar2";
import ShoppingCar3 from "./modulos/ShoppingCar/ShoppingCar3";
import ShoppingCar4 from "./modulos/ShoppingCar/ShoppingCar4";
import { MentorsProfileOwn } from "./modulos/UserProfile_";
import PrivacyPolicy from "./modulos/PrivacyPolicy";
import Terms from "./modulos/Terms"
//import Obtener from "./modulos/Obtener";


function App() {
  const [user, setUser] = useState({});

  const updateUser = (values) => {
    setUser((prevUser) => ({ ...prevUser, ...values }));
  };

  const [mentorprofileInformation, setMentorProfile] = React.useState({
    name: "Merida valiente",
    sobremi: "Todos tenemos algo que enseñar y algo que aprender, amo esa frase",
    educacion: "Mi educación es licenciatura en ingeniería biomédica",
    datosCuriosos: "Amo los gatitos y perritos",
    nombrePerfil: "Sofía Aguilar",
    locacionPerfil: "Guadalajara, Jalisco",
    emailPerfil: "sa.aguilarvaldez@gmail.com",
    presentacion:
      "¡Hola! Me llamo Sofía y estoy buscando un mentor para aprender matemáticas.",
    imagePerfil: "./Rosa Carrillo Saturno.png",
  });

  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged((user) => {
        console.log(user);
        setTimeout(() => {
          if (user) {
            setFirebaseUser(user);
          } else {
            setFirebaseUser(null);
          }
        }, 2500);
      });
    };
    fetchUser();
  }, []);

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

          <Route path="/login">
            <Login login1={false} />
          </Route>
          <Route path="/singUp">
            <Login login1={true} />
          </Route>



          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/MentorsMenu">
            <MentorsMenu info={Mentor} />
          </Route>



          {/* <Route path="/datos">
            <Obtener />
          </Route> */}


          <Route path="/mentorsProfile">
            <MentorsProfileModule
              mentorProfileInformationParameter={mentorprofileInformation}
              setMentorProfileFunction={setMentorProfile}
            />
            {/* Se pueden utilizar props se eliminariam mentorProfileInformationParameter setMentorProfileFunction*/}
          </Route>

          <Route path="/userProfile_">
            <MentorsProfileOwn mentorProfileInformationParameter={mentorprofileInformation}
              setMentorProfileFunction={setMentorProfile} />
          </Route>

          <Route path="/:typeP/:userId">
            <UrlDynamic
              error={<Page404 />}
              mentor={mentorprofileInformation}
              setmentor={setMentorProfile}
            />
            {/* Se pueden utilizar props se eliminariam mentorProfileInformationParameter setMentorProfileFunction*/}
          </Route>

          <Route path="/ShoppingCar">
            <ShoppingCar />
          </Route>

          <Route path="/ShoppingCar2">
            <ShoppingCar2 />
          </Route>

          <Route path="/ShoppingCar3">
            <ShoppingCar3 />
          </Route>

          <Route path="/ShoppingCar4">
            <ShoppingCar4 />
          </Route>

          <Route path="/configuracion" exact>
            <Configuracion />
          </Route>

          <Route path="/privacyPolicy">
            <PrivacyPolicy />
          </Route>

          <Route path="/terms">
            <Terms />
          </Route>

          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  ) : (
    <div>
      <Loading />
    </div>
  );
}

export default App;
