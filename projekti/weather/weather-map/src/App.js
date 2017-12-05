import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search"
import FetchService from "./services/fetchService"
import { SparklinesLine, SparklinesReferenceLine, Sparklines } from 'react-sparklines';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      cityWeather: {
        data: {
          city: "Bijeljina",
          list: []
        }
      }
    }

    this.fetchService = new FetchService();

    this.bindEventHandlers();
  }

  bindEventHandlers() {

    this.getWeatherData = this.getWeatherData.bind(this);
    this.successfulRequest = this.successfulRequest.bind(this);
    this.failedRequest = this.failedRequest.bind(this);
  }

  getWeatherData(city) {
    this.fetchService.get(city, this.successfulRequest, this.failedRequest)
  }

  successfulRequest(cityWeather) {
    const cityInfo = [];
    cityInfo.push(cityWeather);

    this.setState({
      cities: cityInfo,
      cityWeather

    })
  }

  failedRequest(error) {
    console.log(error);
  }

  componentDidMount() {
    this.getWeatherData("Belgrade");
  }


  render() {


    if (this.state.cityWeather.data == null) {
      return <p>Loading</p>;
    }
    if (this.state.cities == null) {
      return <p>Loading</p>;
    }

    const tempData = this.state.cityWeather.data.list.map(hour => {
      return hour.main.temp;
    });
    const humidityData = this.state.cityWeather.data.list.map(hour => {
      return hour.main.humidity;
    });

    return (
      <div className="App">
        <Search onSearchRequest={this.getWeatherData} />
        <div >
          {this.state.cities.map(town => {
            return (
              <div>
                {this.town.data.city.name}

                <Sparklines data={tempData} >
                  <SparklinesLine />
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>

                <Sparklines data={humidityData} >
                  <SparklinesLine />
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>

              </div>
            )
          })}
        </div>


      </div >
    );
  }
}

export default App;
