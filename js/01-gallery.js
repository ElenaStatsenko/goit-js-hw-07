import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallaryContainer = document.querySelector('.gallery');
const images = galleryItems.map(galleryItem => `
 <li class="gallery__item">
 <a class="gallery__link" href='${galleryItem.original}'>
//    <img class="gallery__image" src='${galleryItem.preview}'
     data-source ='${galleryItem.original}'
     alt='${galleryItem.description}'
   />
 </a>
</li>`).join('');

gallaryContainer.insertAdjacentHTML('beforeend', images);

    


// const gallaryContainer = document.querySelector('.gallery');
// const galleryItemsContainer = createGalleryMarkup(galleryItems);

// gallaryContainer.insertAdjacentHTML('beforeend', galleryItemsContainer);

// function createGalleryMarkup (galleryItems) {
//     const galleryMarkup = galleryItems.map(({preview, original, description}) => {
//         return `<li class="gallery__item">
//         <a class="gallery__link" href="${original}">
//           <img class="gallery__image"src= "${preview}" alt="${description}" />
//         </a>
//       </li>`
//       ;
//       console.log(galleryMarkup[0]);
//     }).join();
// }



// const addGallaryMarkup = document.querySelector('.gallery');
// ulRefs.innerHTML = addGallaryMarkup;
// ulRefs.addEventListener ('click', onImageClick);
// function onImageClick(evt) {
//     blockStandartAction(evt);
//     if (evt.target.nodeName !== 'IMG'){
//         return;
//     }
//     const istance = basicLightBox.create('<img src = "${evt.target.dataset.sourse"} width ="800" height ="600">');
//     instance.show();
// }

// ulRefs.addEventListener ('keydown', (evt) => {
//     if (evt.code === 'ESCAPE') {
//         instance.close();
//     }
// });
// function blockstandart (evt) {
//     evt.preventdefault();
// }

// console.log(galleryItems);
