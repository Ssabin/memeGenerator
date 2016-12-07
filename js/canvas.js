'use strict';

var canvas;
var ctx;

function initCanvas(memeUrl) {
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');
    drawOnCanvas(memeUrl);
}

function drawOnCanvas(memeUrl) {
    var img = new Image();
    img.src = memeUrl;

    img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
        ctx.font = "60px 'Segoe UI'";
        ctx.fillText("print on Canvas", 50, 300);
    };
}

