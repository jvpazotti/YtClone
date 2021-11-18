import React, { useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./index.css"

export default function SingleRes(props){

    const history = useHistory();

    const GoToVideo = () => {
        history.push("/video");
    }

    return(

        <div className="single" onClick={GoToVideo}>
            <img className="thumb" src={props.children[0]}/>
            <div className="texts">
                <h3 className="title">{props.children[1]}</h3>
                <h4 className="channel">{props.children[2]}</h4>
                <p className="description">{props.children[3]}</p>
                <p classsName="date">{props.children[4]}</p>
            </div>
        </div>

    );
}