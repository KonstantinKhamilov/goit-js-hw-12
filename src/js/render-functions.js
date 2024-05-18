export function renderImages(images, container) {
  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Изображения, соответствующие вашему запросу, не найдены. Пожалуйста, попробуйте еще раз.',
    });
    return;
  }

  const markup = images
    .map(
      image => `
      <li class="image-card">
  <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" title="" style="height:150px; width:150px;"/></a>
  <div class="image-info">
    <p><span>Просмотры: </span>${image.views}</p>
    <p><span>Загрузки: </span>${image.downloads}</p>
    <p><span>Лайки: </span>${image.likes}</p>
    <p><span>Комментарии: </span>${image.comments}</p>
  </div>
</li>
  `
    )
    .join('');
  container.innerHTML += markup;
}

export function scrollToNextPage() {
  const imageCard = document.querySelector('.image-card');
  const cardHeight = imageCard.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
