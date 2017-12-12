import React, { Component } from 'react';
import DataService from "../services/DataService";

import "./SinglePage.css";

export default class SinglePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: null

        }
        this.dataService = new DataService();

        this.bindHandlers();
    }
    bindHandlers(){
        this.fetchOneSeries = this.fetchOneSeries.bind(this);
        this.successHandler = this.successHandler.bind(this);
        this.fetchSeriesThatIsSearched = this.fetchSeriesThatIsSearched.bind(this);
        
    }

    fetchOneSeries() {
        const seriesId = this.props.match.params.id;
        this.dataService.getOneSeries(seriesId, this.successHandler, this.errorHandler);
        
    }

    fetchSeriesThatIsSearched(seriesId) {
        this.dataService.getOneSeries(seriesId, this.successHandler, this.errorHandler);

    }

    errorHandler(error){
        console.warn(error);
    }

    successHandler(series) {
        console.log("jedna serija", series);
        this.setState({
            series
        })
    }

    componentWillReceiveProps(nextProps) {
        this.fetchSeriesThatIsSearched(nextProps.match.params.id);
    }

    componentDidMount() {
        this.fetchOneSeries();
    }

    render() {

        if(this.state.series === null){
            return (
                <p>Loading...</p>
            )
        }
        return (
            <div className="container text-center">
                <div className="row">
                    <h2 className="text-muted col-12">
                        {this.state.series.data.name}
                    </h2>
                    <div className="col-12"> 
                    <img id="single-page-image" className="cover-image" src={this.state.series.data.image.original} alt="Show cover" />
                    </div>
                </div>

                <div id="accordion" className=" text-center container text-muted" role="tablist">
                    <div className="card">
                        <div className="card-header" role="tab" id="headingOne">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    SUMMARY
                                </a>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body ">
                                {this.state.series.data.summary.replace(/<\/?[^>]+(>|$)/g, "")}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="headingTwo">
                            <h5 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    SEASONS({this.state.series.data._embedded.seasons.length})
                                </a>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                {this.state.series.data._embedded.seasons.map((season, i) =>
                                    <div key={season.id}>
                                        <h5 >Season {i + 1}</h5><p> {season.premiereDate}</p>
                                        <hr />
                                    </div>)}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="headingThree">
                            <h5 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    CAST
                                </a>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                {this.state.series.data._embedded.cast.map((actor, i) => {
                                    if (i < 8) {
                                        
                                        return (<div className="row" key={actor.person.id}>
                                            <div className="col-6 col-md-4">
                                                <img src={actor.person.image.medium} alt="Actor/actress " />
                                            </div>
                                            <div className="col-6 col-md-4 text-center">
                                                <h5>{actor.person.name} </h5>
                                            </div>
                                        </div>)
                                    }
                                }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}