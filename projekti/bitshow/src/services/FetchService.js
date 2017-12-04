import axios from "axios";

import {BASE_URL} from "../constants";

export default class FetchService {

    getAll(successHandler, errorHandler) {
        axios({
            url: `${BASE_URL}`,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => successHandler(response))
            .catch(error => errorHandler(error));
    }
}