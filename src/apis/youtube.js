import axios from 'axios';
const KEY = 'AIzaSyAJjWf9EfrhnEadd-JChjxQfYukZSw7RVY'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        key: KEY
    }
})