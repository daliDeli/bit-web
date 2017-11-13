import React from "react";
import data from "./data";


const Post = (props) => {

    let niz = data.items;
    console.log(niz);

    // let telo = data.items.map((item) => <p>{item.body}</p>);
    // let titles = data.items.map((item) => <h1>{item.title}</h1>);
    let listItems = data.items.map((item) =>
        <li>
            <h3>{item.body}</h3>
            <p>{item.title}</p>
        </li>


    )
    return (
        <ul>
            {listItems}
        </ul>
    );
};

export default Post;
