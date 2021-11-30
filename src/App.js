import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Results from "./components/Results";
import VideoPlayer from "./components/VideoPlayer";
import Channel from "./components/Channel";
import Playlist from "./components/Playlist";


function App() {

  return (

    <Router>
      <Switch>
        <Route exact path="/" children={<Home/>} />
        <Route exact path="/results=:search" children={<Results/>} />
        <Route exact path="/video=:videoId" children={<VideoPlayer/>} />
        <Route exact path="/channel=:channelId" children={<Channel/>} />
        <Route exact path="/playlist=:playlistId" children={<Playlist/>} />
      </Switch>
    </Router>

  );
}

export default App;