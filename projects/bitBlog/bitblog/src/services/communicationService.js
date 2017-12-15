import axios from "axios";
import {BASE_URL} from "../constants";

 class CommunicationService {

    getBlogPosts(successfulResponse,failedResponse){
        axios.get(`${BASE_URL}/posts`)
        .then(response => {
          console.log(response);
          successfulResponse(response);
        })
        .catch(error => {
          console.log(error);
          failedResponse(error);
        });
}

    getAuthorsData(successfulResponse,failedResponse){
        axios.get(`${BASE_URL}/users`)
        .then(response => {
          console.log(response);
          successfulResponse(response);
        })
        .catch(error => {
          console.log(error);
          failedResponse(error);
        });
}

    getSingleBlogPost(postId,successfulResponse,failedResponse){
        axios.get(`${BASE_URL}/posts/${postId}`)
        .then(response => {
          console.log(response);
          successfulResponse(response);
        })
        .catch(error => {
          console.log(error);
          failedResponse(error);
        });
}
}

export const communicationService = new CommunicationService();