import React, { Component } from 'react';
import DataService from "../services/DataService";

export default class SinglePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: {
                data: {
                    id: 22,
                    image: {},
                    summary: "",
                    _embedded:{
                        seasons:""
                    }
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
            <div className="container text-center">
                <div>
                    <h2 className="text-muted">
                        {this.state.series.data.name}
                    </h2>
                    <img className="cover-image" src={this.state.series.data.image.original} alt="Show cover" />
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
                                {this.state.series.data.summary.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "")}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="headingTwo">
                            <h5 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    SEASONS
                                </a>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                            {/* {this.state.series.data._embedded.seasons.map(season => <h5>{season.id}</h5>)} */}
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
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}