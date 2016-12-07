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

function drawOnCanvas() {
    var img = new Image();
    img.src = gState.currMemeUrl;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
        ctx.font = "60px 'Segoe UI'";
    };
    // $('#enter-text').click(function(){
    //     ctx.fillText($('#topText').val(), 200, 50);
    //     ctx.fillText($('#bottomText').val(), 200, 320);
    //     });
}

/**
 * This function is called whenever input on Generator form is changes
 */
function writeTextOnMeme() {
    gState.currBottomText = gElBottomTextBox ? gElBottomTextBox.value : '';
    gState.currTopText = gElTopTextBox ? gElTopTextBox.value : '';
    ctx.clearRect(0, 0, 568, 360);
    drawOnCanvas();
    setTimeout(function () {
        fillText();
    }, 100);
}

/**
 * This function fills the img with the text in the inputs
 */
function fillText() {
    ctx.fillText(gState.currTopText, 200, 50);
    ctx.fillText(gState.currBottomText, 200, 320);
}