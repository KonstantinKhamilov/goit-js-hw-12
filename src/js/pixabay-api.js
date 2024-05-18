import axios from 'axios';

const API_KEY = '43943872-0cd26c97fed3a84845e31fcef';

export function fetchImages(query) {
  return axios
    .get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(response => response.data.hits)
    .catch(error => console.error(error));
}
