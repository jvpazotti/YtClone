import { React, useState, useEffect } from "react";
import "./index.css"
import SingleRes from "../SingleRes"
import { useParams } from "react-router-dom";
import youtube from "../../apis/youtube";
import Header from "../Header";


export default function Results() {

  let { search } = useParams();
  const [videos, setVideos] = useState([]);


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

      let thumb = snippet.thumbnails.high.url;
      let title = snippet.title.replace("&#39;","'");
      let channel = snippet.channelTitle;
      let description = snippet.description;
      let date = snippet.publishedAt;

      let kind = item.id.kind.slice(8);
      let id = "";
      if (kind === "video") {
        id = item.id.videoId;
      } else if (kind === "channel") {
        id = item.id.channelId;
      } else if (kind === "playlist") {
        id = item.id.playlistId;
      }

      list.push([thumb, title, channel, description, date, kind, id]);

    }

    setVideos(list)

  }
  
  useEffect(() => {handleSubmit(search);},[search])
  

  return (
    <div>
      <Header ReloadData={handleSubmit}/>
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