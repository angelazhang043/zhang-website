import React from 'react'
import './SlideDrawer.css'
import "./MenuButton.css"

export default class SlideDrawer extends React.Component {

 
    render() {
        let drawerClasses = 'side-drawer'

        const menuOption = {
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "45px",
            lineHeight: "145.5 %",
            letterSpacing: "0.61em",
            color: "#000000",
            textAlign: "center",
            margin: "70px 0px"
        }

        if (this.props.show) {
            drawerClasses = 'side-drawer open'
        }
        return (

            <div className={drawerClasses} style={{paddingTop: "50px"}}>
                <h1 className="rotate-right" style={menuOption}>home</h1>
                <h1 className="rotate-left" style={menuOption}>about</h1>
                <h1 className="rotate-right" style={menuOption}>projects</h1>
                <h1 className="rotate-left" style={menuOption}>contact</h1>
            </div>
        )
    }

}