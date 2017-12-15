import React, { Component } from 'react';

import { Link } from "react-router-dom";

export default class Header extends Component {

    goBack() {
        window.history.back();
    }

    render() {
        return (
            <div>
                <h1>
                    RND BLOG
                </h1>
                <nav>
                    <ul>
                        <Link to="/">
                            <li> Home</li>
                        </Link>
                        <Link to="/authors">
                            <li> Authors</li>
                        </Link>
                        <Link to="/about">
                            <li>About</li>
                        </Link>
                    </ul>
                    <div>
                        <button type="submit" onClick={this.goBack}>
                        Back    
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
}