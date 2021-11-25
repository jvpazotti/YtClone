import { useParams } from "react-router";
import React from "react";
import "./index.css"
import youtube from "../../apis/youtube";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function VideoPlayer() {

  let { videoId } = useParams();


  // useEffect(() => {
    
  //   loadData2().then((res)=>console.log(res))
  
  
  // },[])

  const location = useLocation();

  useEffect(() => {
     console.log(location.pathname); // result: '/secondpage'
     console.log(location.state.detail); // result: 'some_value'
     console.log(location.state.detail2);
  }, [location]);

  let details=location.state.detail

  return (
    <div>
      <header>
        <img src="/ytLogo.png" className="logo"/>
      </header>
      <main>
        <iframe className="player" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen title="Video player" />
        <ul className="desc">
          <li>
          {details[0]}
          </li>
          <li>
          {details[1]}
          </li>
          <li>
          {details[2]}
          </li>
          <li>
          {details[3]}
          </li>
        </ul>
      </main>
    </div>
  )
}