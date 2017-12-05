import React from "react";

export default class Search extends React.Component {
    constructor(props){
        super(props);

        this.state={
            searchString:""
        }

        this.bindEventHandlers();
    }

    bindEventHandlers(){
    
        this.searchedStringHandler= this.searchedStringHandler.bind(this);
        this.renderWeatherData = this.renderWeatherData.bind(this);
    }

    searchedStringHandler(event){
        const searchString = event.target.value;
        // console.log(event.target.value);

        this.setState({
            searchString
        })
    }

    renderWeatherData(){
       this.props.onSearchRequest(this.state.searchString);
    }


    render(){
        return(
            <div >
                <input type="text" value={this.state.searchString} onChange={this.searchedStringHandler}/>
                <button type="submit" onClick={this.renderWeatherData}>Search</button>
            </div>
        )
    }
}