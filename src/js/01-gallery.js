// Add imports above this line
import { galleryItems } from './gallery-items';
// console.log(galleryItems)


// import SimpleLightbox from 'simplelightbox';
// import "simplelightbox/dist/simple-lightbox.min.css";

console.log(simplelightbox)

const imgEl= galleryItems
  .map(({preview, original, description}) => 
  `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
  `)
  .join("");

console.log(imgEl)

  const newGallery = document.querySelector('.gallery');
//   console.log(gallery)
  newGallery.insertAdjacentHTML("beforeend", imgEl);


  // new SimpleLightbox('.gallery a', {
  //   captionsData: 'alt',
  //   captionDelay: 250,
  //   scrollZoom: false,
  //   doubleTapZoom: 1,
  // });
