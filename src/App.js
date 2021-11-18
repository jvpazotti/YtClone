import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import axios from "axios";
import Note from "./components/Note";
import Formulario from "./components/Formulario";
import Search from "./components/Search";
import "./App.css";
import Home from "./components/Home";
import Results from "./components/Results";





function App() {


  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/results=:search" children={<Results/>} />
      </Switch>
    </Router>



  );
}

export default App;

//https://dummiofront.herokuapp.com/ | https://git.heroku.com/dummiofront.git