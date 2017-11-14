import React from "react";
import Timer from "./timer";

import {Link} from "react-router-dom";


const Header = () => {
    const headStyle = {display:"inline", float:"right"};
    return (
        <div >
            <h1 style={{textAlign:"center"}}>BLOG</h1>
            <h3><Link to="/about"style={headStyle}>About  </Link></h3>
            <h3><Link to="/authors"style={headStyle}>Authors  |</Link></h3>
            <h3><Link to="/"style={headStyle}>Home  |</Link></h3>
            <Timer/>
        </div>
    );
};


export default Header;
