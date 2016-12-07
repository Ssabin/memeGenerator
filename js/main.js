'use strict';
const MEMES_IMGS = 7;

function init(){
    // buildMemes();
    renderMemes(gMemes);
    gState = {
        currMemeUrl: ''
    };
    var gKeyWordsPopularity = JSON.parse(localStorage.getItem('keyWordsPopularity'));
    if (!gKeyWordsPopularity) saveToLocalStorageFirstTime(); 
}

function searchKeyWord(keyWord){
    var memes = gMemes.filter(function(meme) {
        return meme.keywords.some(function(memeKeyWord){
            return memeKeyWord.toLowerCase().includes(keyWord.toLowerCase());
        });
    });
    renderMemes(memes);
    saveToLocalStorage(keyWord);
}

function selectKeyWord(keyWord) {
    var memes = gMemes.filter(function(meme) {
        return meme.keywords.some(function(memeKeyWord){
            return memeKeyWord.toLowerCase().includes(keyWord.toLowerCase());
        });
    });
    renderMemes(memes);
    saveToLocalStorage(keyWord);
}