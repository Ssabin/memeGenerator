'use strict';
const MEMES_IMGS = 7;
const BASIC_FONTSIZE = 16;
const HEADER_SIZE = 83;

/**
 * This function will be called when body loads
 */
function init() {
    renderMemes(gMemes);

    gKeyWordsPopularity = JSON.parse(localStorage.getItem('keyWordsPopularity'));
    if (!gKeyWordsPopularity) saveKeywordsLocalStorageFirstTime();
    renderKeyWords();
    setAnchorsAnimations();
    resetState();
}

/**
 * This function will set anmation for anchors and toggles class active to the clicked element
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
 * This function will be triggered every time user clicks on search input
 */
function searchKeyWord(keyWord) {
    var memes = gMemes.filter(function (meme) {
        return meme.keywords.some(function (memeKeyWord) {
            return memeKeyWord.toLowerCase().includes(keyWord.toLowerCase());
        });
    });
    renderMemes(memes);
    saveKeyWordsLocalStorage(keyWord);
}

/**
 * This function will be triggered when user clicks on Key word
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
 * This function save contact form inputs vals to local storage
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
}

/**
 * This Function sets keyword new font size by the keyWordSearchCount 
 */
function setKeyWordFontSize(keyWordSearchCount, keyWord) {
    var $keyWordDiv = $('.' + keyWord);
    var fontSize = calcKeyWordSize(keyWordSearchCount);
    $keyWordDiv.css('font-size', fontSize + 'px');
}

/**
 * This function calc new Font size for keyword
 */
function calcKeyWordSize(keyWordSearchCount) {
    return keyWordSearchCount + BASIC_FONTSIZE;
}

