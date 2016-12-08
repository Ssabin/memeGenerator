'use strict';

/**
 * Render memes
 */
function renderMemes(memes) {
    var $memesGallery__memes = $('.memes-gallery');
    var $memesGalleryTemplate = $('.memes-gallery__meme-template');
    $memesGallery__memes.empty();
    memes.forEach(function (meme) {
        var $clone = $memesGalleryTemplate.clone();
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
 * Toggeles Meme generator
*/

function showGenerator(memeUrl) {
    var $memeGenerator = $('.meme-generator');
    var $gallery = $('.memes-gallery');
    $memeGenerator.toggle();
    $gallery.slideToggle();
    gState.currMemeUrl = memeUrl;
    drawOnCanvas();
}

/**
 * Toggles preview back
 */

function backToGallery() {
    var $memeGenerator = $('.meme-generator');
    var $gallery = $('.memes-gallery');
    $memeGenerator.toggle();
    resetCanvasGeneratorInputs();
    resetState();
    $gallery.toggle();
}

/**
 * Renders keywords to DOM
 */

function renderKeyWords(){
    var $searchKeyWords = $('.search-keywords');
    for(var keyWord in gKeyWordsPopularity){
        var $keyWordDiv = $(document.createElement('div'));
        $keyWordDiv.text(keyWord);
        $keyWordDiv.addClass('search-keywords__keyword ' + keyWord);
        $keyWordDiv.on('click' , function(e){
            selectKeyWord(e.currentTarget.innerText);
        });
        $searchKeyWords.append($keyWordDiv);

        setKeyWordFontSize(gKeyWordsPopularity[keyWord] , keyWord);
    }

}

/**
 * Sets keyword new font size by the keyWordSearchCount 
 */
function setKeyWordFontSize(keyWordSearchCount, keyWord) {
    var $keyWordDiv = $('.' + keyWord);
    var fontSize = calcKeyWordSize(keyWordSearchCount);
    $keyWordDiv.css('font-size', fontSize + 'px');
}