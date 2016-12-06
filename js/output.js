'use strict';

/**
 * Render memes
 */

function renderMemes(){
    var elMemesGallery__items = document.querySelector('.memes-gallery__items');
    var strHTML = '';
    gMemes.forEach(function(meme){
        strHTML += '<li class="memes-gallery__hexagon meme'+ meme.id +'"><img src="assets/imgs/memes/'+ meme.id +'.jpg" alt="meme" class="img-responsive meme__img" onclick="showGenerator(this.src)"/></li>\n'
    });
    elMemesGallery__items.innerHTML = strHTML;
}

/**
onclick- show meme editor
JQUERY V!@#%@#%
*/

function showGenerator(memeSrc){
    var elMemeGenerator = document.querySelector('.meme-generator');
    var elGallery = document.querySelector('.memes-gallery__items');
    elMemeGenerator.style.display = 'block';
    elMemeGenerator.querySelector('img').src = memeSrc;
    elGallery.style.display = ' none';

}

/**
 * Return button to gallery...
 * better with JQuery
 */

function backToMemeGallery(){
    var elMemeGenerator = document.querySelector('.meme-generator');
    var elGallery = document.querySelector('.memes-gallery__items');
    elMemeGenerator.style.display = 'none';
    elMemeGenerator.querySelector('img').src = '';
    elMemeGenerator.querySelector('#topText').value = '';
    elMemeGenerator.querySelector('#bottomText').value = '';
    elGallery.style.display = 'flex';
}