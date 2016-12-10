'use strict';

var canvas;
var ctx;
var gElTopTextBox; //Top text input element
var gElBottomTextBox; //Bottom text input element

/**
 * Init canvas area
 */
function initCanvas() {
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');
    gElTopTextBox = document.querySelector('#topText');
    gElBottomTextBox = document.querySelector('#bottomText');
}

/**
 * Draw the img and execute 2 functions which draw texts on the canvas
 */
function drawOnCanvas() {
    var img = new Image();
    img.src = gState.currMemeUrl;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
        drawTextOnCanvas(ctx, gState.labels['top']);
        drawTextOnCanvas(ctx, gState.labels['bottom']);
        drawCopyRights();
    };
}

/**
 * Draws text with props set in his state 
 */
function drawTextOnCanvas(ctx, textState) {
    //font size    
    ctx.font = textState.textFontSize + 'px "' + textState.fontFamily + '"';
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

/**
 * Draws copyrights on canvas
 */
function drawCopyRights(){
     //font size    
    ctx.font = '12px "Lato"';
    //font color    
    //text alignment
    ctx.textAlign = 'left';
    ctx.fillStyle = 'white';
    ctx.fillText('Created by Sahar and Itai Meme Generator' , 340 , 355);
    ctx.shadowBlur = 0;
}