import React from "react";
import { useHistory } from "react-router";
import "./index.css"

export default function SingleRes(props){

    const history = useHistory();

    const GoToVideo = () => {
        if (props.children[5] == "video") {
            history.push(`/video=${props.children[6]}`);
        } else if (props.children[5] == "channel") {
            history.push(`/channel=${props.children[6]}`);
        } else if (props.children[5] == "playlist") {
            history.push(`/playlist=${props.children[6]}`);
        }
    }

    return(

        <div className="single" onClick={GoToVideo}>
            <img className="thumb" src={props.children[0]}/>
            <div className="texts">
                <h3 className="title">{props.children[1]}</h3>
                <h4 className="channel">{props.children[2]}</h4>
                <p className="description">{props.children[3]}</p>
                <p className="date">{props.children[4]}</p>
            </div>
        </div>

    );
}