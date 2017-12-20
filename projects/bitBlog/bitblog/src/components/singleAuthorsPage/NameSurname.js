import React, { Component } from "react";

export default class NameSurname extends Component {
    render() {
        return (
            <div>
                <img alt="Placeholder" src="https://www.protocols.io/img/avatar_placeholder.jpg"/>

                <h3>{this.props.nameSurnameData.name}</h3>
                <h5>{this.props.nameSurnameData.username}</h5>
                <h5>{this.props.nameSurnameData.email}</h5>
                <h5>{this.props.nameSurnameData.phone}</h5>

            </div>

        )
    }
}