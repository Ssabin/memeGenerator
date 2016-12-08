'use strict';

/**
 * Render memes
 */

function renderMemes(memes, display) {
    var $memesGallery__memes = $('.memes-gallery');
    $memesGallery__memes.empty();
    var $template = $('.memes-gallery__meme-template').find('.memes-gallery__meme');
    memes.forEach(function (meme) {
        var $clone = $template.clone();
        $clone.find('.hexagon').css('background-image', 'url(assets/imgs/memes/' + meme.id + '.jpg)');
        $clone.on('click', function () {
            showGenerator(meme.url);
        });
        $memesGallery__memes.append($clone);
        $clone.find('.memes-gallery__keywords').text('Keywords: ' + meme.keywords);
    });
}

// toggles display modes: list and grid. also changes the button
function toggleMemesList() {
    $('.memes-gallery__keywords').toggle();
    $('.memes-gallery').toggleClass('memes-gallery__list');
    $('.memes-gallery__meme').toggleClass('memes-gallery__meme-list');
    var $iconDisplay = $('.memes-display').find('i');
    if($iconDisplay.hasClass('fa-list-ul')) {
        $iconDisplay.removeClass('fa-list-ul');
        $iconDisplay.addClass('fa-th');
    }else{
        $iconDisplay.removeClass('fa-th');
        $iconDisplay.addClass('fa-list-ul');
    }
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

/**
 * This function renders keywords to DOM
 */

function renderKeyWords() {
    var $searchKeyWords = $('.search-keywords');
    for (var keyWord in gKeyWordsPopularity) {
        var $keyWordDiv = $(document.createElement('div'));
        $keyWordDiv.text(keyWord);
        $keyWordDiv.addClass('search-keywords__keyword ' + keyWord);
        $keyWordDiv.on('click', function (e) {
            selectKeyWord(e.currentTarget.innerText);
        });
        $searchKeyWords.append($keyWordDiv);

        setKeyWordFontSize(gKeyWordsPopularity[keyWord], keyWord);
    }

}