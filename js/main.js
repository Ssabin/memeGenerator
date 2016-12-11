'use strict';
const MEMES_IMGS_PREVIEW_COUNT = 7;
const BASIC_FONTSIZE = 16;
const MAX_FONTSIZE = 55;
const HEADER_SIZE = 83;

/**
 * Body load functions
 */
function init() {
    renderMemes(gMemes);
    gKeyWordsPopularity = JSON.parse(localStorage.getItem('keyWordsPopularity'));
    if (!gKeyWordsPopularity) saveKeywordsLocalStorageFirstTime();
    renderKeyWords();
    renderAutoSearchKeyWords();
    initCanvas();
    setAnchorsAnimations();
    resetState();
    pageLang();    
}

/**
 * Set anmation for anchors and toggles class active to the clicked element
 */
function setAnchorsAnimations() {
    $('.main-nav__item a').click(function (e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - HEADER_SIZE
        }, 500);
        $('.main-nav__item a').removeClass('active');
        $(e.currentTarget).toggleClass('active');
        return false;
    });
}

/**
 * Eevery time user types it will show him memes under this keyword
 */
function searchKeyWord(keyWord) {
    if (!keyWord) keyWord = $('.search-meme__input-keyword').val();
    if (keyWord === '') {
        renderMemes(gMemes);
        return;
    }
    var memes = gMemes.filter(function (meme) {
        return meme.keywords.some(function (memeKeyWord) {
            return memeKeyWord.toLowerCase().includes(keyWord.toLowerCase());
        });
    });
    renderMemes(memes);
    if (memes.length > 0) {
        saveKeyWordsLocalStorage(keyWord);
        setKeyWordFontSize(gKeyWordsPopularity[keyWord], keyWord);
    }
}

/**
 * Renders relative memes under keyword clicked
 */
function selectKeyWord(keyWord) {
    var memes = gMemes.filter(function (meme) {
        return meme.keywords.some(function (memeKeyWord) {
            return memeKeyWord.toLowerCase().includes(keyWord.toLowerCase());
        });
    });
    renderMemes(memes);
    saveKeyWordsLocalStorage(keyWord);
    setKeyWordFontSize(gKeyWordsPopularity[keyWord], keyWord);
}

/**
 * Save contact form inputs vals to local storage
 */
function saveContactLocalStorage() {
    var $name = $('#form-name').val();
    var $email = $('#form-email').val();
    var $subject = $('#form-subject').val();
    var $txt = $('#form-txt').val();
    var contactForm = {
        name: $name,
        email: $email,
        subject: $subject,
        message: $txt
    };
    var contactToSave = JSON.stringify(contactForm);
    localStorage.setItem('Contact Info', contactToSave);
    $('.contact-form__sent').show('slow');
}

/**
 * Calc new Font size for keyword
 */
function calcKeyWordSize(keyWordSearchCount) {
    var fontSize = keyWordSearchCount + BASIC_FONTSIZE;
    return fontSize > MAX_FONTSIZE ? MAX_FONTSIZE : fontSize;
}

/**
 * Shows generator with the meme from the given URL
 */
function getMemeURL() {
    var memeURL = $('.search-meme__input-url').val();
    // Check input is not empty and editor is not on the same img
    if (memeURL !== '' && memeURL !== gState.currMemeUrl) showGenerator(memeURL);
    else return;
}
