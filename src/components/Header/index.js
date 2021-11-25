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
        history.push(`/results=${Name}`);
        props.ReloadData(Name)
    }
    }

    const GoToHome = () => history.push("/")

    return(
        
        <div className="header">
            <div className="home" onClick={GoToHome}>
                <img src="/ytLogo.png" className="logo" alt="logo"/>
                <h1 className="logoName">YtClone</h1>
            </div>
            <div className='search-box'>
                <button className="btn-search2"><img className="lupa" src="lupa.png" alt="search"/></button>
                <input type="text" className="input-search2"  
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