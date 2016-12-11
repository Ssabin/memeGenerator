'use strict';
/**
 * Memes model
 */
var gMemes = [
    {
        id: 1,
        url: 'assets/imgs/memes/1.jpg',
        keywords: ['dramatic' , 'funny' , 'movies']
    },
    {
        id: 2,
        url: 'assets/imgs/memes/2.jpg',
        keywords: ['funny' , 'money']
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
        url: 'assets/imgs/memes/7.jpg',
        keywords: ['funny', 'happy' , 'mad' , 'movies']
    },
    {
        id: 8,
        url: 'assets/imgs/memes/8.jpg',
        keywords: ['funny', 'happy' , 'cheering']
    },
    {
        id: 9,
        url: 'assets/imgs/memes/9.jpg',
        keywords: ['dramatic', 'inspiring']
    },
    {
        id: 10,
        url: 'assets/imgs/memes/10.jpg',
        keywords: ['stupid', 'history']
    },
    {
        id: 11,
        url: 'assets/imgs/memes/11.jpg',
        keywords: ['inspiring', 'movies']
    },
    {
        id: 12,
        url: 'assets/imgs/memes/12.jpg',
        keywords: ['funny', 'inspiring']
    },
    {
        id: 13,
        url: 'assets/imgs/memes/13.jpg',
        keywords: ['history' , 'movies' , 'dramatic']
    },
    {
        id: 14,
        url: 'assets/imgs/memes/14.jpg',
        keywords: ['funny', 'cheering']
    },
];
var gState;
var gKeyWordsPopularity;

/**
 * Sets gKeyWordsPopularity with init values
 */
function saveKeywordsLocalStorageFirstTime() {
    gKeyWordsPopularity = { //Not init with 0's so you can see the beauty
        'happy': 15,
        'funny': 12,
        'inspiring': 5,
        'smart': 1,
        'cheering': 6,
        'sad': 7,
        'dramatic': 1,
        'stupid': 1,
        'mad': 1,
        'movies': 4,
        'history': 10
    }
    var keyWordsString = JSON.stringify(gKeyWordsPopularity);
    localStorage.setItem('keyWordsPopularity', keyWordsString);
}

/**
 * Update local Storage keyWordsPopularity key values
 */
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
                fontFamily: 'Lato',
                textFontSize: 60,
                textColor: '#fff',
                textShadow: false
            },
            'bottom':{
                x: 284,
                y: 320,
                text: '',
                textAlignment: 'center',
                fontFamily: 'Lato',
                textFontSize: 60,
                textColor: '#fff',
                textShadow: false
            }
        }
    };
}