import { fetchImages } from './js/pixabay-api.js';
import { renderImages, scrollToNextPage } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const gallery = document.querySelector('#gallery');
const loader = document.querySelector('#loader');
const loadMoreButton = document.querySelector('#load-more');

let currentPage = 1;
let lightbox;
let query = '';

form.addEventListener('submit', event => {
  event.preventDefault();
  query = input.value.trim();
  if (!query) {
    alert('Пожалуйста, введите ключевое слово для поиска');
    return;
  }

  currentPage = 1;
  gallery.innerHTML = '';
  fetchAndRenderImages();
});

loadMoreButton.addEventListener('click', fetchAndRenderImages);

function fetchAndRenderImages() {
  loader.classList.remove('hidden');

  fetchImages(query, currentPage++)
    .then(images => {
      console.log(images);
      loader.classList.add('hidden');

      renderImages(images, gallery);

      lightbox = new SimpleLightbox('.image-card a', {});

      if (images.length === 15) {
        loadMoreButton.style.display = 'block';
      } else {
        loadMoreButton.style.display = 'none';
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
      scrollToNextPage(); // Вызовите функцию scrollToNextPage после добавления изображений
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message:
          'Произошла ошибка при загрузке изображений. Пожалуйста, попробуйте еще раз.',
      });
    });
}
