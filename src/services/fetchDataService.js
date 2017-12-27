import { HEADER_KEY } from "./../constants";
import { BASE_SERVICE_URL } from "./../constants";
import axios from "axios";

class FetchDataService {
    constructor() { }

    createHeader() {
        if (sessionStorage.getItem("sessionId") !== null) {
            return {
                "Content-Type": " application/json",
                "Accept": "application/json",
                "Key": HEADER_KEY,
                "sessionId": sessionStorage.getItem("sessionId")
            };
        } else {
            return {
                "Accept": "application/json",
                "Content-Type": " application/json",
                "Key": HEADER_KEY
            };
        }

    }

    get(path, handler, errorHandler) {

        axios({
            method: "GET",
            url: `${BASE_SERVICE_URL}${path}`,
            headers: this.createHeader(),

        })
            .then((data) => { handler(data); })
            .catch(error => {
                errorHandler(error) || console.log(error);
            });
    }


    post(path, data, handler, errorHandler) {

        axios({
            method: "POST",
            url: `${BASE_SERVICE_URL}${path}`,
            data: data,
            headers: this.createHeader(),
            json: true
        })
            .then(response => {
                return handler(response);
            })
            .catch(error => {
                errorHandler(error.response.data.error.message) || console.log(error);
            });
    }

    put(path, data, handler, errorHandler) {

        axios({
            method: "PUT",
            url: `${BASE_SERVICE_URL}${path}`,
            data: data,
            headers: this.createHeader(),
            json: true
        })
            .then(response => {
                return handler(response);
            })
            .catch(error => {
                errorHandler(error) || console.log(error);
            });
    }

    delete(path, handler, errorHandler) {

        axios({
            method: "DELETE",
            url: `${BASE_SERVICE_URL}${path}`,
            headers: this.createHeader(),
            json: true
        })
            .then(response => {
                return handler(response);
            })
            .catch(error => {
                errorHandler(error) || console.log(error);
            });
    }

}

export default FetchDataService;