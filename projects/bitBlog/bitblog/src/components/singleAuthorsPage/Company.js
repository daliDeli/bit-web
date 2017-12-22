import React, { Component } from "react";

export default class Company extends Component {

    render(){
        if (this.props.company === undefined) {
            return "Loading"
        }
        console.log(this.props)
        return(
            <div>
                <h3>Company Name:{this.props.company.name}</h3>
                <h5>Slogan:{this.props.company.catchPhrase}</h5>
            </div>
        )
    }
}