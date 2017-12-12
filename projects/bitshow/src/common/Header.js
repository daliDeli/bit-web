import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Search from "./Search";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seriesData: {
                data: [{
                    show: {}
                }]
            },
            display: "none"
        }

        this.passingSeriesData = this.passingSeriesData.bind(this);
        this.searchVisibilityOnOff = this.searchVisibilityOnOff.bind(this);
        this.toogleStateDisplay = this.toogleStateDisplay.bind(this);
    }

    passingSeriesData(seriesData) {
        this.setState({
            seriesData
        })
    }

    searchVisibilityOnOff(searchedString){
        if(searchedString){
            this.setState({
                display:"block"
            })
        }
    }

    toogleStateDisplay(){
        this.setState({
            display:"none"
        })
    }

    componentDidMount(){
        this.searchVisibilityOnOff();
    }

    render() {
        return (
            <div>
                <nav className="row navbar navbar-dark bg-dark justify-content-between">
                    <Link to="/" className="navbar-brand col-3" id="bitshow"><h3>BitShow</h3></Link>

                    <form className="form-inline">
                        <Search passingSeriesData={this.passingSeriesData} passingSearchedString={this.searchVisibilityOnOff}/>

                    </form>
                </nav>
                <ul className="list-group container-fluid" style={{ display: this.state.display, position: "absolute", top: 67 , zIndex: 2}}>
                    {this.state.seriesData.data.map(series =>
                        <li className="list-group-item " key={series.show.id} onClick={this.toogleStateDisplay}>
                            {console.log(series)}
                            <Link to={`/single/${series.show.id}`}> {series.show.name} </Link>
                        </li>)}
                </ul>
                </div>
                    );
    }
}