import React from "react";
import { MyMapComponent } from "./MyMapComponent ";

export default class MyFancyComponent extends React.PureComponent {
    state = {
        isMarkerShown: false,
        coordinates: {
            lat: 44.786568,
            lng: 20.448922
        }
    }

    componentDidMount() {
        this.delayedShowMarker();
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    changeCapital(coordinates) {
        this.setState({
            coordinates
        })
        console.log(this.state.coordinates);

    }
    render() {
        return (
            <div className="container blue lighten-5">
            <h1>
                World Map
            </h1>
                <MyMapComponent
                    isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}
                    coordinates={this.state.coordinates}
                />
                <h4>
                    Choose a country and we will show you the capital of that country
                </h4>
                <a className="btn btn-floating pulse red" onClick={() => this.changeCapital({
                    lat: 48.856614,
                    lng: 2.352222
                })}><i className="material-icons">Fra</i></a>
                <a className="btn btn-floating pulse yellow" onClick={() => this.changeCapital({
                    lat: 59.329323,
                    lng: 18.068581
                })}><i className="material-icons">Swe</i></a>
                <a className="btn btn-floating pulse blue" onClick={() => this.changeCapital({
                    lat: -25.263740,
                    lng: -57.575926
                })}><i className="material-icons">Par</i></a>
                <a className="btn btn-floating pulse green" onClick={() => this.changeCapital({
                    lat: 41.008238,
                    lng: 28.978359
                })}><i className="material-icons">Turk</i></a>
                <a className="btn btn-floating pulse black" onClick={() => this.changeCapital({
                    lat: 48.208174,
                    lng: 16.373819
                })}><i className="material-icons">Aust</i></a>
                <a className="btn btn-floating pulse grey" onClick={() => this.changeCapital({
                    lat: 43.942360,
                    lng: 12.457777
                })}><i className="material-icons">San </i></a>
                <a className="btn btn-floating pulse white right" onClick={() => this.changeCapital({
                    lat: Math.random() * 40,
                    lng: Math.random() * 40
                })}><i className="material-icons"></i></a>
                
                


            </div>
        )
    }
}