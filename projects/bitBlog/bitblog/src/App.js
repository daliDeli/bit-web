import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Footer from "./common/Footer";
import Header from "./common/Header";
import MainPage from "./components/MainPage";
import SinglePostPage from "./components/SinglePostPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
       <Switch>
         <Route exact path="/" component={MainPage}/>
         <Route path="/posts/:id" component={SinglePostPage}/>
       </Switch>
       <Footer/>
      </div>
    );
  }
}

export default App;
