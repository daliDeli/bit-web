import React, { Component}  from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component{

    render(){
        return(
            
            <nav className="navbar navbar-dark bg-dark justify-content-between">
              <Link to="/" className="navbar-brand col-3" id="bitshow"><h3>BitShow</h3></Link>
              <form className="form-inline">
                <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> 
              </form>
      
          </nav>
         
        );
    }
}