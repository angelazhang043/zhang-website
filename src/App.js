import React, { Component } from 'react'
import LandingPage from "./LandingPages/LandingPage"
import SlideDrawer from "./LandingPages/slideMenu/SlideDrawer"
import Backdrop from "./LandingPages/slideMenu/Backdrop"


class App extends Component {
    state = { drawerOpen: false }

    drawerToggleClickHandler = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    backdropClickHandler = () => {
        this.setState({
            drawerOpen: false
        })
    }

    render() {

        let backdrop
        if (this.state.drawerOpen) {
            backdrop = <Backdrop close={this.backdropClickHandler} />
        }

        return (


            <div>
                <SlideDrawer show={this.state.drawerOpen} />
                {backdrop}
                < LandingPage toggle={this.drawerToggleClickHandler} />
            </div>

        )
    }
}

export default App;
