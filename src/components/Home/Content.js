import React, { Component } from "react"
import Section from "./Section"
import dummyText from "../../DummyText"
import Releases from "./Releases"

export class Content extends Component {
  render() {
    return (
      <div className="content">
        <Releases id="section1" />
        <Section title="Section 2" subtitle={dummyText} id="section2" />
        <Section title="Section 3" subtitle={dummyText} id="section3" />
        <Section title="Section 4" subtitle={dummyText} id="section4" />
        <Section title="Section 5" subtitle={dummyText} id="section5" />
      </div>
    )
  }
}

export default Content
