'use strict';
const MEMES_IMGS = 7;

var gMemes;


function init(){
    buildMemes();
    renderMemes();
}

/**
 * Builds model 
 */
function buildMemes(){
    gMemes = [];
    for (var i = 1; i <= MEMES_IMGS; i++) {
        var meme = {
            id: i,
            url: '../assets/imgs/memes/'+ i +'.jpg',
            keywords: ['happy','funny']
        };
        gMemes.push(meme);
    }
}

/**
 * Render memes
 */

function renderMemes(){
    var elMemesGallery__items = document.querySelector('.memes-gallery__items');
    var strHTML = '';
    gMemes.forEach(function(meme){
        strHTML += '<li class="memes-gallery__hexagon meme'+ meme.id +'"><img src="assets/imgs/memes/'+ meme.id +'.jpg" alt="meme" class="img-responsive meme__img" onclick="editMeme(this.src)"/></li>\n'
    });
    elMemesGallery__items.innerHTML = strHTML;
}

/**
onclick- show meme editor
*/

function editMeme(meme){
    var editTemplate = document.querySelector('.meme-edit__template');
    var gallery = document.querySelector('.inner-container');
    editTemplate.style.display = 'block';
    editTemplate.querySelector('img').src = meme;
    gallery.style.display = ' none';

}