import React, { useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./index.css"

export default function SingleRes(){

    const history = useHistory();

    const GoToVideo = () => {
        history.push("/video");
    }

    return(

        <div className="single" onClick={GoToVideo}>
            {/* <img className="thumb" src={} alt={}/> */}
            <img className="thumb"/>
            <div className="texts">
                <h3 className="title">Titulo</h3>
                <h4 className="channel">Canal</h4>
                <p className="description">qwerty asdf zxcvb poiu lkjhg mn</p>
                <p classsName="date">1234</p>
            </div>
        </div>

    );
}