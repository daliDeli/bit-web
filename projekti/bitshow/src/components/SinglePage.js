import React, { Component } from 'react';
import DataService from "../services/DataService";

export default class SinglePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: {
                data: {
                    id: 22,
                    image: {}
                }
            }

        }
        this.dataService = new DataService();

        this.fetchOneSeries = this.fetchOneSeries.bind(this);
        this.successHandler = this.successHandler.bind(this);
    }

    fetchOneSeries() {
        console.log(this.props.match.params);
        const seriesId = this.props.match.params.id;
        this.dataService.getOneSeries(seriesId, this.successHandler, this.errorHandler);
    }

    successHandler(series) {
        console.log("jedna serija", series);
        this.setState({
            series
        })
    }

    componentDidMount() {
        this.fetchOneSeries();
    }

    render() {


        return (
            <div>
                <div className="">
                    <img src={this.state.series.data.image.original} alt="Show cover" />
                </div>
            </div>
        );
    }
}