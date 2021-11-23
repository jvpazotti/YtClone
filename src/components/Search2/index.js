import React from "react";
import {useState} from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
export default function Search2(props){

    const history = useHistory();

    const [Name, setName] = useState("");


    const nameChanged = (event) =>{
        setName(event.target.value);
    }

    const ActivSearch = (event) => {
    if(event.code === 'Enter'){
        console.log("teste")
        history.push(`/results=${Name}`);
        props.ReloadData(Name)
    }
    }

    return(
        
    <div>
            <div className='search-box'>
                <button class="btn-search2"><img className="lupa" src="lupa.png"/></button>
                <input type="text" class="input-search2"  
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