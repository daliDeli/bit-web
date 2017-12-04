import React, { Component}  from 'react';

export default class Header extends Component{

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark justify-content-between">
            <div className="container">
              <a className="navbar-brand" id="bitshow">BitShow</a>
              <form className="form-inline">
                <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> 
              </form>
            </div>
      
          </nav>
        );
    }
}