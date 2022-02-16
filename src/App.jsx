import AboutUs from "./modulos/AboutUs";
import Home from "./modulos/Home";
import Navbar from "./modulos/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SingUp from "./modulos/SingUp";
import Login from "./modulos/Login";


function App() {


  return (
    <div>
      <Router>
        <Switch>

          <Route path="/aboutUS">
            <Navbar />
            <AboutUs />
          </Route>

          <Route path="/login">

            <Login />
          </Route>

          <Route path="/singUp">
            <Login esRegistro={true} />
          </Route>

          <Route path="/" exact>
            <Navbar />
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
