import axios from 'axios';

const KEY = 'AIzaSyD3U123IumjETmlfml3j9BdJwd6WBgmy-U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        key: KEY
    }
})