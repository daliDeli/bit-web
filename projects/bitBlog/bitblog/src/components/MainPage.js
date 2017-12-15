import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Post from "./Post";
import { communicationService } from "../services/communicationService";

export default class MainPage extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.fetchAllPostData = this.fetchAllPostData.bind(this);

    }

    fetchAllPostData() {
        communicationService.getBlogPosts((postData => {
            const posts = postData.data;
            this.setState({
                posts
            })
        }),
            (error => {
                console.log(error);
            }));
    }

    componentDidMount() {
        this.fetchAllPostData();
    }



    render() {
        return (
            <div>
                <h2>
                    POSTS
                </h2>
                <div>

                    {this.state.posts.map((post, i) => {
                        if (i < 10) {
                            return (

                                <div key={post.id}>
                                    <Link to={`/posts/${post.id}`}>
                                        <Post title={post.title} body={post.body} />
                                    </Link>
                                    <hr />
                                </div>
                            )
                        }
                    }

                    )}

                </div>
            </div>
        )
    }
}

