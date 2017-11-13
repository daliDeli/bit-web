import React from "react";
import ReactDOM from "react-dom";


const ChildComponent = (props) => {
    console.log(props);
    return (
        <h1>{props.bleja}{props.message}</h1>
        
    );
};


export default ChildComponent;