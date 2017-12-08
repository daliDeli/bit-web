import React, { Component } from 'react';
import { Link} from "react-router-dom";



import DataService from "../services/DataService";
import ShowCard from "./ShowCard";


export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            series: []
        }

        this.dataService = new DataService();

        this.getSeries = this.getSeries.bind(this);
        this.successSeriesHandler = this.successSeriesHandler.bind(this);

    }

    getSeries() {
        this.dataService.getAllSeries(this.successSeriesHandler, this.failedRequest);
    }

    successSeriesHandler(series) {
        console.log("primio", series);
        this.setState({
            series
        })
    }

    componentDidMount() {
        this.getSeries();
    }

    failedRequest(error) {
        console.log(error)
    }

    render() {
        return (
            <div className="row">

                {this.state.series.map(series =>
                <Link to ={`/single/${series.id}`} className="col-sm-12 col-md-4 text-center text-muted" key={series.id}>
                    <ShowCard image={series.image} name={series.name} key={series.id} />
                </Link>
                )}
            </div>
        );
    }
}