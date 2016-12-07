'use strict';
var gMemes = [
    {
        id: 1,
        url: '../assets/imgs/memes/1.jpg',
        keywords: ['happy', 'funny']
    },
    {
        id: 2,
        url: '../assets/imgs/memes/2.jpg',
        keywords: ['inspiring', 'smart']
    },
    {
        id: 3,
        url: '../assets/imgs/memes/3.jpg',
        keywords: ['inspiring', 'funny']
    },
    {
        id: 4,
        url: '../assets/imgs/memes/4.jpg',
        keywords: ['happy', 'cheering']
    },
    {
        id: 5,
        url: '../assets/imgs/memes/5.jpg',
        keywords: ['inspiring', 'sad']
    },
    {
        id: 6,
        url: '../assets/imgs/memes/6.jpg',
        keywords: ['dramatic']
    },
    {
        id: 7,
        url: '../assets/imgs/memes/7.jpg',
        keywords: ['stupid', 'history']
    }
];
var gState;
var gKeyWordsPopularity;

// var keyWordsPopularity = {
//     'happy': 0,
//     'funny': 0,
//     'inspiring': 0,
//     'smart': 0,
//     'cheering': 0,
//     'sad': 0,
//     'dramatic': 0,
//     'stupid': 0,
//     'history': 0
// }

function saveToLocalStorageFirstTime() {
    gKeyWordsPopularity = {
        'happy': 0,
        'funny': 0,
        'inspiring': 0,
        'smart': 0,
        'cheering': 0,
        'sad': 0,
        'dramatic': 0,
        'stupid': 0,
        'history': 0
    }
    var keyWordsString = JSON.stringify(gKeyWordsPopularity);
    localStorage.setItem('keyWordsPopularity', keyWordsString);
}

function saveToLocalStorage(keyWord) {
    // var keyWords = JSON.parse(localStorage.getItem('keyWordsPopularity'));
    if (gKeyWordsPopularity[keyWord.toLowerCase()] >= 0) gKeyWordsPopularity[keyWord.toLowerCase()]++;
    var keyWordsString = JSON.stringify(gKeyWordsPopularity);
    localStorage.setItem('keyWordsPopularity', keyWordsString);
}

// ,
//     {
//         id: 8,
//         url: '../assets/imgs/memes/8.jpg',
//         keywords: ['happy' , 'funny']
//     },
//     {
//         id: 9,
//         url: '../assets/imgs/memes/9.jpg',
//         keywords: ['halirious' , 'cheering']
//     },
//     {
//         id: 10,
//         url: '../assets/imgs/memes/10.jpg',
//         keywords: ['history' , 'romans']
//     },


/**
 * Builds model 
 */
// function buildMemes(){
//     var keywords = ['happy' , 'funny' , 'sad' , 'smart' , 'inspiring']
//     gMemes = [];
//     for (var i = 1; i <= MEMES_IMGS; i++) {
//         var meme = {
//             id: i,
//             url: '../assets/imgs/memes/'+ i +'.jpg',
//             keywords: [keywords[getRandomInt(0, keywords.length-1)]]
//         };
//         gMemes.push(meme);
//     }
// }