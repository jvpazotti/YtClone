import React from "react"
import "./index.css"
import SingleRes from "../SingleRes"
import { useParams } from "react-router-dom";
import youtube from "../../apis/youtube";
import { useState, useEffect } from "react";


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
      let item = response.data.items[`${i}`];
      let snippet = item.snippet;

      let thumb = snippet.thumbnails.default.url;
      let title = snippet.title;
      let channel = snippet.channelTitle;
      let description = snippet.description;
      let date = snippet.publishedAt;

      let kind = item.id.kind.slice(8);
      let id = "";
      if (kind == "video") {
        id = item.id.videoId;
      } else if (kind == "channel") {
        id = item.id.channelId;
      } else if (kind == "playlist") {
        id = item.id.playlistId;
      }

      list.push([thumb, title, channel, description, date, kind, id]);
    }

    setVideos(list)
    console.log(response.data.items);
  }

  useEffect(() => {handleSubmit(search);},[])
  

  return (
    <div>
      <header>
        <img src="/ytLogo.png" className="logo"/>
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