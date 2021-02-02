import React, { Component } from "react"
import "../styles/App.css"
import logo from "../../assets/images/logo.svg"
import { Link } from "react-scroll"
import Home from "./Home/Home"

export default class HomePage extends Component {
  scrollToHome = () => {}

  render() {
    return (
      <div className="app">
        <div className="logo">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div id="home">
          <Home />
        </div>
      </div>
    )
  }
}
