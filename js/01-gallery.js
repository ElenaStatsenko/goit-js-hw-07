import { galleryItems } from './gallery-items.js';
// Change code below this line
const addGallaryMarkup = document.querySelector('.gallery');
ulRefs.innerHTML = addGallaryMarkup;
ulRefs.addEventListener ('click', onImageClick);
function onImageClick(evt) {
    blockStandartAction(evt);
    if (evt.target.nodeName !== 'IMG'){
        return;
    }
    const istance = basicLightBox.create('<img src = "${evt.target.dataset.sourse"} width ="800" height ="600">');
    instance.show();
}

ulRefs.addEventListener ('keydown', (evt) => {
    if (evt.code === 'ESCAPE') {
        instance.close();
    }
});
function blockstandart (evt) {
    evt.preventdefault();
}

console.log(galleryItems);
