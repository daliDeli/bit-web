import React from "react";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            areaVal: ""
        };
        
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.areaChangeHandler = this.areaChangeHandler.bind(this);
        this.grabAllInfo = this.grabAllInfo.bind(this);
        console.log(props);
    }
    
    inputChangeHandler(event) {
        let searchString = event.target.value;
        
        this.setState({
            inputVal: searchString
        });
    }
    
    areaChangeHandler(event) {
        let searchString = event.target.value;
        
        this.setState({
            areaVal: searchString
        });
    }
    
    grabAllInfo() {
        let data = {
            userId: Math.floor(Math.random() * 1000),
            id: Math.floor(Math.random() * 1000),
            title: this.state.inputVal,
            body: this.state.areaVal
        };
        console.log(data);
        
        this.props.submitData(data);
    }

    render() {

        return (
            <form>
                <h3>Title</h3>
                <input value={this.state.inputVal} onChange={this.inputChangeHandler} />
                <h3>Post </h3>
                <textarea value={this.state.areaVal} onChange={this.areaChangeHandler} />
                <button onClick={this.grabAllInfo}> Save</button>

            </form>
        );
    }
}




export default Form;