import React, { Component } from 'react'
import Home from "./LandingPages/Home"
import HorizontalScroll from 'react-scroll-horizontal'
 
class App extends Component {
  render() {
    const child   = { width: "1536px", height: "770px", backgroundColor: "blue"}
    const childTwo   = { width: "1536px", height: "770px", backgroundColor: "green"}
    const parent  = { width: "1536px", height: "750px", backgroundColor: "#4B4B4B"}
    return (
      <div style={parent}>
        <HorizontalScroll reverseScroll="True">
            <div> <Home /></div>
            <div style={child} />
        </HorizontalScroll>
      </div>
    )
  }
}

export default App;
