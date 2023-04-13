import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallaryContainer = document.querySelector('.gallery');
const images = galleryItems.map(({preview, original, description}) => ` 
<li class="gallery__item">
<a class="gallery__link" href='${original}'>
    <img class="gallery__image" src='${preview}'
    data-source ='${original}'
      alt='${description}'
    />
 </a>
</li>`).join('');

 
gallaryContainer.insertAdjacentHTML('beforeend', images); 
gallaryContainer.addEventListener('click', onImageClick);
function onImageClick (event){

  event.preventDefault();
  if(event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" height = "600">` 
); 
  instance.show();
}
// function onImageClick (event){

//   event.preventDefault();

//   if(event.target.nodeName !== "IMG") {
//     return;
//   }
//   const instance = basicLightbox.create(`
//   <img src="${event.target.dataset.sourse}" width="800" height="600">`
//   );
// instance.show();
// }




// function onImageClick (evt){ 
    
//   // запрет стандартных действий
//   evt.preventDefault(); 

//   // проверка на картинку
//   if(evt.target.nodeName !== "IMG") {
//     return;
//   }
  
//   // а если клацаем на картинку
  // const instance = basicLightbox.create(`
  //   <img src="${evt.target.dataset.source}" width="800" height = "600">` 
  // ); 
//   instance.show(); 
// }



// const images = galleryItems.map(galleryItem => `
//  <li class="gallery__item">
//  <a class="gallery__link" href='${galleryItem.original}'>
// //    <img class="gallery__image" src='${galleryItem.preview}'
//      data-source ='${galleryItem.original}'
//      alt='${galleryItem.description}'
//    />
//  </a>
// // </li>`).join('');

// gallaryContainer.insertAdjacentHTML('beforeend', images);
// gallaryContainer.addEventListener('click', onImageClick);
// function onImageClick (event){
//   event.preventDefault();
//   if(event.target.nodeName !== "IMG") {
//     return;
//   }
//   const instance = basicLightbox.create(`<img src="${event.target.dataset.sourse}" width="800" height="600">`);
// instance.show();



// gallaryContainer.addEventListener('keydown', (event) => {
//       if(event.code === 'Escape') {
//         instance.close();
//       }
//     })
  
//   };



// console.log(galleryItems);

// const gallaryContainer = document.querySelector('.gallery'); 

// const images = galleryItems.map(({preview, original, description}) => ` 
//  <li class="gallery__item"> 
//  <a class="gallery__link" href='${original}'> 
// //    <img class="gallery__image" src='${preview}' 
//      data-source ='${original}' 
//      alt='${description}' 
//    /> 
//  </a> 
// </li>`).join(''); 
 
// gallaryContainer.insertAdjacentHTML('beforeend', images); 

// gallaryContainer.addEventListener('click', onImageClick); 



//     // закрытие
//     gallaryContainer.addEventListener('keydown', (evt) => {
//       if(evt.code === 'Escape') {
//         instance.close()
//       }
//     })
// };