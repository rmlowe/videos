import axios from 'axios';

const KEY = 'AIzaSyDWpOqpJvGq6xu-zbWu8Eb6yp3yNagjcWI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
