import React from "react";
import ReactDOM from "react-dom";



const House = (props) => {
    let dogOrFish = props.size;

    if (dogOrFish > 50) {
        return <Dog />;
    }

    return (
        <Aquarium />
    );

};


const Dog = (props) => {
    return (<h1>I am a dog</h1>)
};

const Fish = (props) => {

    return (

        <h1>I am a fish</h1>
    );

};

const Aquarium = (props) => {
    let fishie = [];
    for (let i = 0; i < props.number; i++) {
        fishie[i] = <Fish />;
    }
    return (
        fishie
    );
};

// ReactDOM.render(<Aquarium number = "3" />, document.getElementById("app"));
ReactDOM.render(<House size="60"/>, document.getElementById("app"));