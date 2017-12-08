import React, {Component} from "react";

export default class Search {
    constructor(){
        super();

        this.state={
            searchString
        }
    }

    searchedString(event){
        console.log("event",this.event);
    }

    componentDidMount(){
        
    }
    

    render(){
        return(
            <div>
                <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
                 <button className="btn btn-outline-muted my-2 my-sm-0" type="submit" value={} onClick={this.searchedString}>Search</button> 
            </div>
        )
    }

}