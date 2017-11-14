import React from "react";

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json()).then(result => {

                this.setState({ data: result });

            });

    }

    render() {

        let postData = this.state.data.map((item) => {
            return (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                </div>
            );
        }
        );

        return (
            <div >
                {postData}
            </div>
        );
    }
}

export default Post;
