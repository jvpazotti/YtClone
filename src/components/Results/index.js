import React from "react"
import "./index.css"
import SingleRes from "../SingleRes"
import { useParams } from "react-router-dom";
import youtube from "../../apis/youtube";
import { useState, useEffect } from "react";
import Search2 from "../Search2";


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
      let thumb = response.data.items[`${i}`]["snippet"]["thumbnails"]["default"]["url"];
      let title = response.data.items[`${i}`]["snippet"]["title"];
      let channel = response.data.items[`${i}`]["snippet"]["channelTitle"];
      let description = response.data.items[`${i}`]["snippet"]["description"];
      let date = response.data.items[`${i}`]["snippet"]["publishedAt"];
      list.push([thumb, title, channel, description, date]);
    }

    setVideos(list)
    console.log(response.data.items);
  }

  
  useEffect(() => {handleSubmit(search);},[])
  

  return (
    <div>
      <header>
        <img src="/ytLogo.png" className="logo"/>
        <Search2 ReloadData={handleSubmit}/>
      </header>
      <main>
        {videos.map((video) => (
          <SingleRes>
            {video}
          </SingleRes>
        ))}
      </main>
    </div>
  )
}