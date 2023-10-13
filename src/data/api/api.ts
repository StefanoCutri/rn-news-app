import axios from "axios";
const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY = '4d47630412f84a5ba985f81bd25e0824'

const newsApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-Api-key': API_KEY
    }
});

export default newsApi;