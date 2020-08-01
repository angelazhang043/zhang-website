import React from 'react'

export default class MainPage extends React.Component {
   render(){
     return (
        <div style={{position:"absolute"}}>
          <a onClick={this.props.toggle}> Clicks Me! </a>
          {/* <button onClick={this.props.toggle}>Click me!</button> */}
        </div>
     )
    }   
}