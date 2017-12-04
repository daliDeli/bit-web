import React, { Component } from 'react';

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

    failedRequest() {

    }

    render() {
        return (
            <div className="row">

                {this.state.series.map(series =>
                    <ShowCard image={series.image} name={series.name} key={series.id} />)}

            </div>
        );
    }
}