'use strict';

/**
 * Render memes
 */

function renderMemes(memes) {
    var $memesGallery__memes = $('.memes-gallery');
    $memesGallery__memes.empty();
    memes.forEach(function (meme) {
        var $clone = $('.memes-gallery__meme-template').clone();
        $clone.attr('class', 'memes-gallery__meme hexagon');
        $clone.css('background-image', 'url(assets/imgs/memes/' + meme.id + '.jpg)');
        $clone.on('click', function () {
            showGenerator(meme.url);
        });;
        $clone.toggle();
        $memesGallery__memes.append($clone);
    });
}

/**
onclick- show meme editor
*/

function showGenerator(memeUrl) {
    var $memeGenerator = $('.meme-generator');
    var $gallery = $('.memes-gallery');
    $memeGenerator.toggle();
    $gallery.slideToggle();
    gState.currMemeUrl = memeUrl;
    initCanvas();
}

/**
 * Return button to gallery...
 */

function backToGallery() {
    var $memeGenerator = $('.meme-generator');
    var $gallery = $('.memes-gallery');
    $memeGenerator.toggle();
    $memeGenerator.find('img').attr('src', '');
    $memeGenerator.find('#topText').val('');
    $memeGenerator.find('#bottomText').val('');
    resetState();
    $gallery.toggle();
}