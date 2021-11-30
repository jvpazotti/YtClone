import { React } from "react";
// import { useParams } from "react-router";
import "./index.css"
import { useLocation } from "react-router-dom";
import Header from "../Header";

export default function Channel() {

  // let { channelId } = useParams();

  const location = useLocation();

  let details = location.state.detail

  const handleSubmit = () => {}

  const path = `/results=${details[0]}`

  return (

    <div>
      <Header ReloadData={handleSubmit}/>
      <main>
        <h1 className="warn">This is a channel. <a href={path}>Search for videos from '{details[0]}'</a></h1>
        <img src={details[7]} alt={details[0]} />
        <h2 className="name">{details[0]}</h2>
        <p className="desc">{details[2]}</p>
      </main>
    </div>

  )
}