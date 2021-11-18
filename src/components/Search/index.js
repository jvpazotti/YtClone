import {useState} from "react";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./index.css";
import youtube from "../../apis/youtube";



export default function Search(props){

    const [Name, setName] = useState("");

    const [videos, setVideos] = useState([]);

    const [selectedVideo, setSelectedVideo] = useState(null);

    const history = useHistory();

    const nameChanged = (event) =>{
        setName(event.target.value);
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

    const ActivSearch = (event) => {
      if(event.code === 'Enter'){
        console.log("teste")
        handleSubmit(Name);
        // history.push(`/results/${Name}`)
      }
    }

    const handleVideoSelect = (video) => {
      setSelectedVideo(video);
    }

    

    return(
        
     <div>
            <div className='search-box'>
                  <button class="btn-search"><img className="lupa" src="lupa.png"/></button>
                  <input type="text" class="input-search"  
                      onChange={nameChanged} 
                      name='video-search'
                      placeholder="Digite Aqui"
                      value={Name}
                      onKeyPress={ActivSearch}
                  />
            </div>

            <div className="divisor">
             {videos.map((video)=>(
               <><p className="videos">
                 {video[0]}
               </p><img src ={video[1]}/></>
             ))}
            </div>

     </div>
    );

}