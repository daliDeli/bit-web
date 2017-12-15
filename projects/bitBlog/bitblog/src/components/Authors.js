import React, {Component} from "react";

import { communicationService } from "../services/communicationService";


export default class Authors extends Component {
    constructor(){
        super();

        this.state = {
            authorsData
        }
    }

    fetchAllAuthorsData(){
        communicationService.getAuthorsData((authorsData => {
            this.setState({
                authorsData
            })
        }),
        (error => {
            console.log(error);
        }));
    }
    
    componentDidMount(){
        console.log("radi");
        this.fetchAllAuthorsData();
        console.log(this.state.authorsData);
    }

    render(){
        return(
            <div>
                radi
            </div>
        )
    }
}