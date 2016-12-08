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
    // setTimeout(function () {
    //     drawTopTextOnCanvas();
    //     drawBottomTextOnCanvas();
    // }, 100);
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
        drawTopTextOnCanvas();
        drawBottomTextOnCanvas();
    };
}

/**
 * Draws top text on function 
 */
function drawTopTextOnCanvas() {
    //font size    
    ctx.font = gState.currTopFontSize + 'px "Lato"';
    //font color    
    ctx.fillStyle = gState.currTopColor;
    //font text shadow    
    if (gState.currTopTextShadow) {
        ctx.shadowColor = 'black';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 10;
    }else{
        ctx.shadowBlur = 0;        
    }
    ctx.fillText(gState.currTopText, 200, 50);
}

/**
 * Draws bottom text on function 
 */
function drawBottomTextOnCanvas() {
    //font size
    ctx.font = gState.currBottomFontSize + 'px "Lato"';
    //font color
    ctx.fillStyle = gState.currBottomColor;
    //font text shadow
    if (gState.currBottomTextShadow) {
        ctx.shadowColor = 'black';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 10;
    }else{
        ctx.shadowBlur = 0;        
    }
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

function changeFontColor(fontColorHex, textLocation) {
    if (textLocation === 'top') {
        gState.currTopColor = fontColorHex;
    } else {
        gState.currBottomColor = fontColorHex;
    }
    drawOnCanvas();
}

function changeTextShadow(textLocation) {
    if (textLocation === 'top') {
        gState.currTopTextShadow =  !gState.currTopTextShadow;
    } else {
        gState.currBottomTextShadow = !gState.currTopTextShadow;
    }
    drawOnCanvas();
}

// function changeText(textLocation , value , action){
//     switch('action'){
//         case 'changeFontSize': 
//     }
// }