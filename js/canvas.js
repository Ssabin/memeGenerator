'use strict';

var canvas;
var ctx;
var gElTopTextBox; //Top text input element
var gElBottomTextBox; //Bottom text input element

function initCanvas() {
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');
    gElTopTextBox = document.querySelector('#topText');
    gElBottomTextBox = document.querySelector('#bottomText');
    drawOnCanvas();
}
/**
 * This function triggers 3 functions which will draw the img and texts on the canvas
 */
function drawOnCanvas() {
    drawImgOnCanvas();

    setTimeout(function () {
        drawTopTextOnCanvas();
        drawBottomTextOnCanvas();
    }, 100);
}

/**
 * Draw img on canvas
 */
function drawImgOnCanvas() {
    ctx.clearRect(0, 0, 568, 360);
    var img = new Image();
    img.src = gState.currMemeUrl;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
    };
}

/**
 * Draws top text on function 
 */
function drawTopTextOnCanvas() {
    ctx.font = gState.currTopFontSize + 'px "Lato"';
    ctx.fillText(gState.currTopText, 200, 50);
}

/**
 * Draws bottom text on function 
 */
function drawBottomTextOnCanvas() {
    ctx.font = gState.currBottomFontSize + 'px "Lato"';
    ctx.fillText(gState.currBottomText, 200, 320);
}

/**
 * This function is called whenever input on Generator form is changes
 */
function writeTextOnMeme() {
    gState.currBottomText = gElBottomTextBox ? gElBottomTextBox.value : '';
    gState.currTopText = gElTopTextBox ? gElTopTextBox.value : '';
    ctx.clearRect(0, 0, 568, 360);
    drawOnCanvas();
}

/**
 * This function is triggred when user incease or decrease font size
 */

function changeFontSize(fontSizeValue, textLocation) {
    if (textLocation === 'top') {
        gState.currTopFontSize += fontSizeValue;
    } else {
        gState.currBottomFontSize += fontSizeValue;
    }
    drawOnCanvas();
}