import React, { Component } from "react";

export default class Address extends Component {
    render() {
        if (this.props.address === undefined) {
            return "Loading"
        }
        return (
            <div>

                <h2>ADDRESS</h2>
                {console.log(this.props)}
                <h3>City:{this.props.address.city}</h3>
                <h5>Street: {this.props.address.street}</h5>
                <h5>Zipcode:{this.props.address.zipcode}</h5>

            </div>
        )
    }
}