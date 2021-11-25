import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";


export default function Search(props){

    const [Name, setName] = useState("");

    const history = useHistory();

    const nameChanged = (event) =>{
        setName(event.target.value);
    }

    const ActivSearch = (event) => {
      if(event.code === 'Enter'){
        history.push(`/results=${Name}`)
      }
    }

    return(
        
      <div>
        <div className='search-box'>
          <button className="btn-search"><img className="lupa" src="lupa.png" alt="search"/></button>
          <input type="text" className="input-search"  
              onChange={nameChanged} 
              name='video-search'
              placeholder="Digite Aqui"
              value={Name}
              onKeyPress={ActivSearch}
          />
        </div>
      </div>
    );

}