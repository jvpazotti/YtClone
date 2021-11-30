import axios from 'axios';
const KEY = 'AIzaSyBkYN-w4bHBEsfLKspraHdqTeqabeSrYLM'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        key: KEY
    }
})