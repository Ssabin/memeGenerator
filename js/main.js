'use strict';
const MEMES_IMGS = 7;

/**
 * This function will be called when body loads
 */
function init(){
    // buildMemes();
    renderMemes(gMemes);
    gKeyWordsPopularity = JSON.parse(localStorage.getItem('keyWordsPopularity'));
    if (!gKeyWordsPopularity) saveKeyWordsLocalStorageFirstTime(); 
    resetState();
}

function searchKeyWord(keyWord){
    var memes = gMemes.filter(function(meme) {
        return meme.keywords.some(function(memeKeyWord){
            return memeKeyWord.toLowerCase().includes(keyWord.toLowerCase());
        });
    });
    renderMemes(memes);
    saveKeyWordsLocalStorage(keyWord);
}

function selectKeyWord(keyWord) {
    var memes = gMemes.filter(function(meme) {
        return meme.keywords.some(function(memeKeyWord){
            return memeKeyWord.toLowerCase().includes(keyWord.toLowerCase());
        });
    });
    renderMemes(memes);
    saveKeyWordsLocalStorage(keyWord);
}

function saveContactLocalStorage () {
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