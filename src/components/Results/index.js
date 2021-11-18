import React from "react"
import "./index.css"
import SingleRes from "../SingleRes"
import {useParams} from "react-router-dom";
import youtube from "../../apis/youtube";
import {useState} from "react";


export default function Results() {

  let { search } = useParams();
  console.log(search);

  const [videos, setVideos] = useState([]);

  const [selectedVideo, setSelectedVideo] = useState(null);


  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  }


  const handleSubmit = async (termFromSearchBar) => {

    let list=[];

    const response = await youtube.get('/search', {
        params: {
            q: termFromSearchBar
        }
    })

    for (let i = 0; i<10; i++){
      let title=response.data.items[`${i}`]["snippet"]["title"];
      let thumb=response.data.items[`${i}`]["snippet"]["thumbnails"]["default"]["url"];
      list.push([title,thumb]);
    }

    setVideos(list)
    console.log(response.data.items);
  }
  

  const list = []

  return (
    <div>
      <header>
        <img src="/ytLogo.png" className="logo"/>
      </header>
      <main>
        <SingleRes>

        </SingleRes>
      </main>
    </div>
  )
}