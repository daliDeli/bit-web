import React, { Component}  from 'react';
import {Link} from "react-router-dom";
import Search from "./Search";

export default class Header extends Component{

    render(){
        return(
            
            <nav className="navbar navbar-dark bg-dark justify-content-between">
              <Link to="/" className="navbar-brand col-3" id="bitshow"><h3>BitShow</h3></Link>
              <form className="form-inline">
                <Search/>
              </form>
      
          </nav>
         
        );
    }
}