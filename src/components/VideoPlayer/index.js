import { React } from "react";
import { useParams } from "react-router";
import "./index.css"
import { useLocation } from "react-router-dom";
import Header from "../Header";

export default function VideoPlayer() {

  let { videoId } = useParams();

  const location = useLocation();

  let details = location.state.detail

  const handleSubmit = () => {}

  return (

    <div>
      <Header ReloadData={handleSubmit}/>
      <main>
        <iframe className="player" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen title="Video player" />
        <ul className="desc">
          <li className="title">
          {details[0]}
          </li>
          <li className="channel">
          {details[1]}
          </li>
          <li className="description">
          {details[2]}
          </li>
          <li className="date">
          Published: {details[4]}/{details[5]}/{details[6]}, at {details[3]}
          </li>
        </ul>
      </main>
    </div>

  )
}