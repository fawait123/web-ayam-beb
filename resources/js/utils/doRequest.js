import axios from "axios";
import Cookies from "js-cookie";

const doRequest = axios.create({
    url: "http://127.0.0.1:8000",
    headers: {
        Authorization: "Bearer " + Cookies.get("token"),
    },
});

// Add a request interceptor
doRequest.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
doRequest.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default doRequest;
