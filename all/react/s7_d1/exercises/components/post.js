import React from "react";
import data from "./data";




const Post = (props) => {

    let listItems = data.items.map((item) => 
        <li key={item.id} style = {{border:"1px grey solid", listStyleType: "none", padding:"2px"}}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
        </li>

    
    )
    return (
        <div >
            <ul >{listItems}</ul>
        </div>
    );
};

export default Post;
