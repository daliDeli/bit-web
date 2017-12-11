import React, {Component} from "react";
import { Link } from "react-router-dom";

import DataService from "../services/DataService";

export default class Search extends Component{
    constructor(){
        super();

        this.state={
            searchString:"",
            seriesData: {
                data:[{
                    show:{}
                }]
            },
            // visibility: false
        }
        this.dataService = new DataService();

        this.searchedString = this.searchedString.bind(this);
        this.successHandler = this.successHandler.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
    }

    searchedString(event){
        const searchString = event.target.value;

        this.setState({
            searchString
        })

        this.dataService.getSeriesByName(searchString, this.successHandler, this.errorHandler);
    }

    successHandler(seriesData){
        this.setState({
            seriesData
        })
    }
    
    errorHandler(error){
        console.warn(error);
    }

    render(){
        return(
            <form className="form-inline">
                <input className="form-control mr-sm-2 " onChange={this.searchedString} value={this.state.searchString} type="search" placeholder="Search" aria-label="Search"/>
                 {/* <button className="btn btn-outline-muted my-2 my-sm-0" type="submit" onClick={this.searchedString}>Search</button>  */}
                 <ul className="list-group">
                    {this.state.seriesData.data.map(series => 
                    <li className="list-group-item" key={series.show.id}>
                    {console.log(series)}
                        <Link  to={`/single/${series.show.id}`}> {series.show.name} </Link>
                    </li>)}
                 </ul>
            </form>
        )
    }

}