import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";
import SinglePage from "./components/SinglePage";
import HomePage from "./components/HomePage";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/single" component={SinglePage}/>
      </Switch>
      <Footer />
  </div>
    );
  }
}

export default App;
