import axios from "axios";

import {BASE_URL} from "../constants";
// "http://api.tvmaze.com/search/shows?q=

export default class FetchService {

    getAll(successHandler, errorHandler) {
        axios({
            url: `${BASE_URL}shows`,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => successHandler(response))
            .catch(error => errorHandler(error));
    }
    getOne(id,successHandler, errorHandler) {
        axios({
            url: `${BASE_URL}search/shows?q=${id}`,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => successHandler(response))
            .catch(error => errorHandler(error));
    }
}
