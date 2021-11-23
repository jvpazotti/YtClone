import { useParams } from "react-router";
import React from "react";
import "./index.css"
import youtube from "../../apis/youtube";

export default function VideoPlayer() {

  let { videoId } = useParams();

  // const loadData = async () => {

  //   const response = await youtube.get('/video', {
  //     params: {
  //         id: videoId
  //     }
  //   })

  //   console.log(response.loadData);
  // }

  // loadData()


  return (
    <div>
      <header>
        <img src="/ytLogo.png" className="logo"/>
      </header>
      <main>
        <iframe className="player" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen title="Video player" />
      </main>
    </div>
  )
}