import React from "react"
import Content from "./Content"
import "./Home.css"
import VerticalNavbar from "./VerticalNavbar"

function Home() {
  return (
    <div className="home">
      <VerticalNavbar />
      <Content />
    </div>
  )
}

export default Home
