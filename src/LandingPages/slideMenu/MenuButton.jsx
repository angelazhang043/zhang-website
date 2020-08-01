import React from 'react'
import "./MenuButton.css"

export default class MainPage extends React.Component {
   render(){
     return (
        <div className="button-style" style={{float: "right", margin: "25px", cursor: "pointer"}}>
            <hr style={{width: "30px", border: "1.2px solid #F7A7A7", color: "#F7A7A7"}}/> 
            <hr style={{width: "15px", float: "right", marginTop: "3px", border: "1.2px solid #F7A7A7"}}/>
        </div>
     )
    }   
}