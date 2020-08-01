import React, { Component } from 'react'
import Home from "./Home"
import HorizontalScroll from 'react-scroll-horizontal'
import MenuButton from "./slideMenu/MenuButton"

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import MainPage from './MainPage';

class LandingPage extends React.Component {

    render() {
        const child = { width: "1536px", height: "770px", backgroundColor: "blue" }
        const childTwo = { width: "1536px", height: "770px", backgroundColor: "green" }
        const parent = { width: "1536px", height: "760px", backgroundColor: "transparent", position: "absolute", margin: "0px"}

        return (



            <div style={parent}>
                <StickyHeader
            // This is the sticky part of the header.
            header={
                <div className="Header_root">
                    <a onClick={this.props.toggle}> 
                        <MenuButton />
                        {/* <div style={{color: "pink"}}> Clicks Me! </div>  MENU BUTTON COMPONENT GOES HERE */}
                    </a>
                   {/* <button onClick={this.props.toggle}>Click me!</button> */}
                </div>
            }
        ></StickyHeader>
                <HorizontalScroll reverseScroll={true} >
                    <div> <Home /></div>
                    <div style={child} />
                </HorizontalScroll>

            </div>

        )
    }
}

export default LandingPage;
