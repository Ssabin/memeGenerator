'use strict';
var gMemes = [
    {
        id: 1,
        url: 'assets/imgs/memes/1.jpg',
        keywords: ['happy' , 'funny']
    },
    {
        id: 2,
        url: 'assets/imgs/memes/2.jpg',
        keywords: ['inspiring' , 'smart']
    },
    {
        id: 3,
        url: 'assets/imgs/memes/3.jpg',
        keywords: ['inspiring' , 'funny']
    },
    {
        id: 4,
        url: 'assets/imgs/memes/4.jpg',
        keywords: ['happy' , 'cheering']
    },
    {
        id: 5,
        url: 'assets/imgs/memes/5.jpg',
        keywords: ['inspiring' , 'sad']
    },
    {
        id: 6,
        url: 'assets/imgs/memes/6.jpg',
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

function saveKeywordsLocalStorageFirstTime() {
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

function saveKeyWordsLocalStorage(keyWord) {
    if (gKeyWordsPopularity[keyWord.toLowerCase()] >= 0) gKeyWordsPopularity[keyWord.toLowerCase()]++;
    var keyWordsString = JSON.stringify(gKeyWordsPopularity);
    localStorage.setItem('keyWordsPopularity', keyWordsString);
}

/**
 * Resets state to default values
 */
function resetState(){
    gState = {
        currMemeUrl: '',
        labels: {
            'top': {
                x: 284,
                y: 50,
                text: '',
                textAlignment: 'center',
                textFontSize: 60,
                textColor: '#fff',
                textShadow: false
            },
            'bottom':{
                x: 284,
                y: 320,
                text: '',
                textAlignment: 'center',
                textFontSize: 60,
                textColor: '#fff',
                textShadow: false
            }
        }
    };
}