import React from "react";
import Form from "./form";

class CreateBlog extends React.Component {
    constructor(props) {
        super(props);
        this.handlerData = this.handlerData.bind(this);
        console.log(props);
    }
    handlerData(data) {
        console.log("podaci koji se salju " + JSON.stringify(data));
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then((response) => {

            if (!localStorage.getItem("blog")) {
                localStorage.setItem("blog", JSON.stringify([]));
            }
            console.log(response);
            let storedItems = localStorage.getItem("blog");
            let parsed = JSON.parse(storedItems);
            parsed.push(response);
            let stringify = JSON.stringify(parsed);
            localStorage.setItem("blog", stringify);

        });
        // vraca na pocetnu stranicu
        // this.props.history.push("/");
    }



    render() {


        return (
            <div>
                <Form submitData={this.handlerData} />
            </div>
        );
    }
}
export default CreateBlog;