'use strict';
var gMemes;

/**
 * Builds model 
 */
function buildMemes(){
    var keywords = ['happy' , 'funny' , 'sad' , 'smart' , 'inspiring']
    gMemes = [];
    for (var i = 1; i <= MEMES_IMGS; i++) {
        var meme = {
            id: i,
            url: '../assets/imgs/memes/'+ i +'.jpg',
            keywords: keywords[getRandomInt(0, keywords.length-1)]
        };
        gMemes.push(meme);
    }
}