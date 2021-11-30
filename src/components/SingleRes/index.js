import React from "react";
import { useHistory } from "react-router";
import "./index.css"

export default function SingleRes(props){

    const history = useHistory();

    const day = props.children[4].slice(8,10);
    const month = props.children[4].slice(5,7);
    const year = props.children[4].slice(0,4);
    const hour = props.children[4].slice(11,16);

    const list=[props.children[1], props.children[2], props.children[3], hour, day, month, year, props.children[0]]

    const GoTo = () => {
        if (props.children[5] === "video") {
            history.push({
                pathname: `/video=${props.children[6]}`,
                state: { detail: list }
            });
        } else if (props.children[5] === "channel") {
            history.push({
                pathname: `/channel=${props.children[6]}`,
                state: { detail: list }
            });
        } else if (props.children[5] === "playlist") {
            history.push({
                pathname: `/playlist=${props.children[6]}`,
                state: { detail: list }
            });
        }
    }

    return(

        <div className="single" onClick={GoTo}>
            <img className="thumb" src={props.children[0]} alt={props.children[1]}/>
            <div className="texts">
                <h3 className="title">{props.children[1]}</h3>
                <h4 className="channel">Channel: {props.children[2]}</h4>
                <p className="description">Description: {props.children[3]}</p>
                <p className="date">Published at {day}/{month}/{year}</p>
            </div>
        </div>

    );
}