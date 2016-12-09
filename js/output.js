'use strict';

/**
 * Render memes
 */

function renderMemes(memes) {
    var $memesGallery__memes = $('.memes-gallery');
    var $memesGalleryTemplate = $('.memes-gallery__meme-template');
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

/**
 * Toggles display modes: list and grid. also changes the button
 */

function toggleMemesList() {
    $('.memes-gallery__keywords').toggle('slow');
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
 * Toggeles Meme generator
*/

function showGenerator(memeUrl) {
    var $memeGenerator = $('.meme-generator');
    var $gallery = $('.memes-gallery');
    $memeGenerator.toggle();
    $gallery.toggle('slow');
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
    $gallery.fadeToggle('slow');
}

/**
 * Renders keywords to DOM
 */

function renderKeyWords() {
    var $searchKeyWords = $('.search-keywords');
    for (var keyWord in gKeyWordsPopularity) {
        var $keyWordDiv = $(document.createElement('div'));
        $keyWordDiv.text(keyWord);
        $keyWordDiv.addClass('search-keywords__keyword ' + keyWord);
        $keyWordDiv.on('click', function (e) {
            $('.search-meme__input').val(e.currentTarget.innerText);
            selectKeyWord(e.currentTarget.innerText);
        });
        $searchKeyWords.append($keyWordDiv);

        setKeyWordFontSize(gKeyWordsPopularity[keyWord], keyWord);
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

/**
 * Empty generator inputs
 */
function resetCanvasGeneratorInputs() {
    $('.generator-text__input').val('');
    $('.text__color').val('#000000');
    $('.dropdown-content').removeClass('show');
}

 
/**
 * Toggle between hiding and showing the dropdown content 
 */
function showDropDown(dropDownLocation) {
    var $dropDown = $('#'+ dropDownLocation +'__fontDropDown');
    $dropDown.toggleClass('show');
}

/**
 * Clean search input
 */
function cleanSearchKeyWord(){
    var $searchInput = $('.search-meme__input');
    //When input is empty no need to continue
    if($searchInput.val() === '') return;
    
    $searchInput.val('');
    renderMemes(gMemes);
}