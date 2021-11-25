import React from "react";
import "./index.css";
import Search from "../Search";
  

export default function Home(){

    return(

      <div className="App">
        <div className="appbar">
          <div className="superLogo">
            <img src="/ytLogo.png" className="ytLogo" alt="logo"/>
            <h1>YtClone</h1>
          </div>
        </div>
        <main className="container">
          <Search/>
        </main>
      </div>


    );

}
