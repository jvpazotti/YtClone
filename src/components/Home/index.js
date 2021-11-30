import React from "react";
import "./index.css";
import Search from "../Search";
  

export default function Home(){

    return(

      <div className="App">
        <div className="appbar">
          <div className="superLogo">
            <img src="/ytLogo.png" className="ytLogo" alt="logo"/>
            <h1>YTclone</h1>
            <div className="phrase"><p>Videos from </p><p className="there">there.</p></div>
          </div>
        </div>
        <main className="container">
          <Search/>
        </main>
      </div>


    );

}
