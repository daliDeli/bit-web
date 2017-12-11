import React, {Component} from "react";

export default class Search extends Component{
    constructor(){
        super();

        this.state={
            searchString:""
        }
    }

    searchedString(event){
        console.log("event",this.event);
        const searchString = event.target.value;

        this.setState({
            searchString
        })
    }

    componentDidMount(){
        
    }
    

    render(){
        return(
            <div>
                <input className="form-control mr-sm-2 " value={this.state.searchString} type="search" placeholder="Search" aria-label="Search"/>
                 <button className="btn btn-outline-muted my-2 my-sm-0" type="submit" value={this.someFun} onClick={this.searchedString}>Search</button> 
            </div>
        )
    }

}