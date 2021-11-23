import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Results from "./components/Results";
import VideoPlayer from "./components/VideoPlayer";





function App() {


  return (

    <Router>
      <Switch>
        <Route exact path="/" children={<Home/>} />
        <Route exact path="/results=:search" children={<Results/>} />
        <Route exact path="/video=:videoId" children={<VideoPlayer/>} />
      </Switch>
    </Router>



  );
}

export default App;