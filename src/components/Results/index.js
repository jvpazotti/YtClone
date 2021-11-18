import React from "react"
import "./index.css"
import SingleRes from "../SingleRes"

export default function Results(props) {

  console.log(props.children);

  const list = []

  return (
    <div>
      <header>
        <img src="/ytLogo.png" className="logo"/>
      </header>
      <main>
        <SingleRes>

        </SingleRes>
      </main>
    </div>
  )
}