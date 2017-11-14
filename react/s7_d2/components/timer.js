import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "pending...."
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date().toLocaleTimeString()
            });
        }, 1000);

    }

    render(){
        

        return(
            <p> {this.state.date} </p>
        );
    
    }
   
}

export default Timer;