import axios from 'axios';
const KEY = 'AIzaSyCvPtPeGd8XFfmvucx1BgGJTCZNV2wPUXI'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})