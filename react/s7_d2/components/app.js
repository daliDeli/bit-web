import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import About from "./about";


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path='/' component={Main} />

                    <Route path='/about' component={About} />
                </Switch>
                
                <Footer />
            </div>
        );
    }
}
export default App;

