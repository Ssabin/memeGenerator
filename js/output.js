'use strict';

/**
 * Render memes
 */

function renderMemes(memes) {
    var $memesGallery__list = $('.memes-gallery__list'); //catch list container
    // $memesGallery__list.toggle(); //hide list
    var $memesGallery__grid = $('.memes-gallery__grid'); //catach grid container

    var $memesGalleryTemplate = $('.memes-gallery__meme-template'); //catch template container
    //empty both memes containers
    $memesGallery__grid.empty();
    $memesGallery__list.empty();

    var $gridTemplate = $('.memes-gallery__meme-template').find('li'); //grid hexagon template
    var $listTemplate = $('.memes-gallery__meme-template').find('.memes-gallery__meme-list'); //list hexa template

    memes.forEach(function (meme) {
        //clone and set grid layout
        var $gridClone = $gridTemplate.clone();
        $gridClone.find('img').attr('src', 'assets/imgs/memes/' + meme.id + '.jpg');
        $gridClone.on('click', function () {
            showGenerator(meme.url);
        });
        $memesGallery__grid.append($gridClone);

        //clone and set list layout
        var $listClone = $listTemplate.clone();
        $listClone.find('.hexagon').css('background-image', 'url(assets/imgs/memes/' + meme.id + '.jpg)');
        $listClone.on('click', function () {
            showGenerator(meme.url);
        });
        $memesGallery__list.append($listClone);
        var strHTML = 'Keywords: <ul class="clean-list flex flex-col">';
        meme.keywords.forEach(function (keyWord) {
            strHTML += '<li>' + keyWord + '</li>';
        });
        strHTML += '</ul>';
        $listClone.find('.memes-gallery__keywords').html(strHTML);
    });
}

/**
 * Toggles display modes: list and grid. also changes the button
 */

function toggleMemesLayout() {
    $('.memes-gallery__grid').toggle('slow');
    $('.memes-gallery__list').toggle('slow');
    var $iconDisplay = $('.memes-display').find('i');
    if ($iconDisplay.hasClass('fa-list-ul')) {
        $iconDisplay.removeClass('fa-list-ul');
        $iconDisplay.addClass('fa-th');
    } else {
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
    ctx.clearRect(0, 0, 568, 360);
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
            $('.search-meme__input-keyword').val(e.currentTarget.innerText);
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
    var $dropDown = $('#' + dropDownLocation + '__fontDropDown');
    $dropDown.toggleClass('show');
}

/**
 * Clean Search keyword/URL input
 */
function cleanInput(inputSearchType) {
    var $searchInput = $('.search-meme__input-' + inputSearchType + '');
    if ($searchInput.val() === '') return;
    if ($searchInput.hasClass('search-meme__input-keyword')) renderMemes(gMemes);
    $('#keyword_DropDown').removeClass('show');
    $searchInput.val('');
}

/**
 * Cleans contact form inputs
 */

function resetContactFormInputs() {
    var $contactFormInputs = $('.contact-form__form ul');
    $contactFormInputs.find('input').val('');
    $contactFormInputs.find('textarea').val('');
    $('.contact-form__sent').hide('slow');
}

/**
 * Renders drop down auto complete  
 */
function renderAutoSearchKeyWords(){
    var $dropDown = $('#keyword_DropDown');

    for(var keyWord in gKeyWordsPopularity){
        var $aDropDownItem = $('<a></a>');
        // $aDropDownItem.attr('href' , '#');
        $aDropDownItem.text(keyWord);
        $aDropDownItem.addClass('auto-complete__'+ keyWord +'');
        $aDropDownItem.on('click',function(e){
            $('.search-meme__input-keyword').val(e.currentTarget.innerText);
            return false;
        });
        $aDropDownItem.toggle();
        $dropDown.append($aDropDownItem);
    }
}

function showAutoSearchComplete(searchValue) {
    var $dropDown = $('#keyword_DropDown');
    $dropDown.find('a').hide();
    if (searchValue === '') {
        $dropDown.removeClass('show');
        return;
    }
    else{
        $dropDown.addClass('show');
    }
    var keyWordArr = [];
    for (var keyWord in gKeyWordsPopularity) {
        if (keyWord.includes(searchValue)) {
            keyWordArr.push(keyWord);
        }
    }
    keyWordArr.forEach(function (keyWord) {
        $('.auto-complete__'+ keyWord +'').toggle();
    });
}