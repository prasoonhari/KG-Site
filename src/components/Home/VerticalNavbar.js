import React, { Component } from "react"
import logo from "../../../assets/images/logo.svg"
import { Link, animateScroll as scroll } from "react-scroll"

export default class VerticalNavbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  }

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-unorderlist">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              RELEASES
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              SCORES
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              SERVICES
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              BEAT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
          </ul>
        </div>
      </nav>
    )
  }
}
