import { useParams } from "react-router";
import React from "react";
import "./index.css"
import youtube from "../../apis/youtube";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Search2 from "../Search2";
import { useState } from "react";

export default function VideoPlayer() {

  let { videoId } = useParams();

  const [videos, setVideos] = useState([]);


  const location = useLocation();

  useEffect(() => {
     console.log(location.pathname); // result: '/secondpage'
     console.log(location.state.detail); // result: 'some_value'
  }, [location]);

  let details=location.state.detail


  const handleSubmit = async (termFromSearchBar) => {

    let list=[];

    const response = await youtube.get('/search', {
        params: {
          maxResults: 10,
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

  return (
    <div>
      <header>
        <img src="/ytLogo.png" className="logo"/>
        <Search2 ReloadData={handleSubmit}/>
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