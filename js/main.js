'use strict';
const MEMES_IMGS = 7;

function init(){
    // buildMemes();
    renderMemes(gMemes);
    resetState();
}

function searchKeyWord(keyWord){
    var memes = gMemes.filter(function(meme) {
        return meme.keywords.some(function(memeKeyWord){
            return memeKeyWord.toLowerCase().includes(keyWord.toLowerCase());
        });

    });
    renderMemes(memes);
}
