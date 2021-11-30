import { React } from "react";
// import { useParams } from "react-router";
import "./index.css"
import { useLocation } from "react-router-dom";
import Header from "../Header";

export default function Playlist() {

  // let { playlistId } = useParams();

  const location = useLocation();

  let details = location.state.detail

  const handleSubmit = () => {}

  const path = `/results=${details[1]}`

  return (

    <div>
      <Header ReloadData={handleSubmit}/>
      <main>
        <h1 className="warn">This is a playlist. <a href={path}>Search for videos from '{details[1]}'</a></h1>
        <div className="cont">
          <img src={details[7]} alt={details[0]} />
          <div>
            <h2 className="name">{details[0]}</h2>
            <p className="desc">{details[2]}</p>
            <p className="chan">Channel: {details[1]}</p>
          </div>
        </div>
      </main>
    </div>

  )
}