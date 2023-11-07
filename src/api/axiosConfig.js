import axios from 'axios';

export default axios.create({
    //baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
    baseURL: 'http://localhost:8080',
    //headers: {"ngrok-skip-browser-warning": "true", "Access-Control-Allow-Origin": "http://localhost:3000", 
    //"Access-Control-Allow-Credentials":"true"}
    headers: {"Access-Control-Allow-Origin": ["http://172.25.32.1:3000", "http://localhost:3000", "http://localhost:8080"]}
})