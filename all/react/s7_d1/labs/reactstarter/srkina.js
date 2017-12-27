import React from "react";
import ReactDOM from "react-dom";
import ChildComponent from "./test";


const DadoNjemac = (props) => {
    console.log(props);
    return (
        <div>
            <h3>{props.name}  {props.surname}</h3>
            <h1>This is a new title</h1>
            <ChildComponent message="First" />
            <ChildComponent message="Second" />
            <ChildComponent bleja="First" />
        </div>
    );
};


// const sum = (a,b) =>{
//     return a*b;
// };


ReactDOM.render(<DadoNjemac name="Dado" />, document.getElementById("app"));

    // ReactDOM.render(srkiSaban(), document.getElementById("app"));