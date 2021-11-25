import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
export default function Header(props){

    const history = useHistory();

    const [Name, setName] = useState("");


    const nameChanged = (event) =>{
        setName(event.target.value);
    }

    const ActivSearch = (event) => {
    if (event.code === 'Enter') {
        console.log("teste")
        history.push(`/results=${Name}`);
        props.ReloadData(Name)
    }
    }

    const GoToHome = () => history.push("/")

    return(
        
        <div className="header">
            <div className="home" onClick={GoToHome}>
                <img src="/ytLogo.png" className="logo"/>
                <h1 className="logoName">YtClone</h1>
            </div>
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