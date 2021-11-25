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
        console.log("teste")
        history.push(`/results=${Name}`)
      }
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
      </div>
    );

}