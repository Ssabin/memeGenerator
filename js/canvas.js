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
}

/**
 * This function will draw the img and triggers 2 functions which draw texts on the canvas
 */
function drawOnCanvas() {
    // drawImgOnCanvas();
    ctx.clearRect(0, 0, 568, 360);
    var img = new Image();
    img.src = gState.currMemeUrl;
    img.onload = function() {
        ctx.drawImage(img, 0, 0, 568, 360);
        drawTopTextOnCanvas(ctx , gState.labels['top']);
        drawTopTextOnCanvas(ctx , gState.labels['bottom']);
    };
}

/**
 * Draws text with props set in his state 
 */
function drawTopTextOnCanvas(ctx , textState) {
    //font size    
    ctx.font = textState.textFontSize + 'px "Lato"';
    //font color    
    ctx.fillStyle = textState.textColor;
    //text alignment
    ctx.textAlign = textState.textAlignment;
    // //font text shadow    
    if (textState.textShadow) {
        ctx.shadowColor = 'black';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 10;
    }
    ctx.fillText(textState.text, textState.x, textState.y);
    ctx.shadowBlur = 0;
}
