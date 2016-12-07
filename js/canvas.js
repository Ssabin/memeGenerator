'use strict';

var canvas;
var ctx;

function initCanvas() {
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');
    drawOnCanvas();
}

function drawOnCanvas() {
    var img = new Image();
    img.src = gState.currMemeUrl;
    // var $topText = $('#topText').val();
    // var $bottomText = $('#bottomText').val();

    img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
        ctx.font = "60px 'Segoe UI'";
    };
    // $('#enter-text').click(function(){
    //     ctx.fillText($('#topText').val(), 200, 50);
    //     ctx.fillText($('#bottomText').val(), 200, 320);
    //     });
}

var topTextBox = document.querySelector('#topText');
topTextBox.onkeydown = function() {
        ctx.clearRect(0, 0, 568, 360);
        drawOnCanvas();
        setTimeout(function() {
        ctx.fillText(topTextBox.value, 200, 50);    
        }, 100);
    }   

var bottomTextBox = document.querySelector('#bottomText');
bottomTextBox.onkeydown = function() {
        ctx.clearRect(0, 0, 568, 360);
        drawOnCanvas();
        setTimeout(function() {
        ctx.fillText(bottomTextBox.value, 200, 320);    
        }, 100);
    }   