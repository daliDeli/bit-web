import React, { Component } from 'react';

export default class ShowCard extends Component {
    

    render(){
        return(
            <div className="col-sm-4">
                <img alt ="neka_slika" src={this.props.image}/>
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}