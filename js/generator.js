'use strict';


/**
 * This function is called whenever input on Generator form is changes
 */
function writeTextOnMeme() {
    gState.labels['top'].text = gElTopTextBox ? gElTopTextBox.value : '';
    gState.labels['bottom'].text = gElBottomTextBox ? gElBottomTextBox.value : '';
    ctx.clearRect(0, 0, 568, 360);
    drawOnCanvas();
}

/**
 * This function is triggred when user incease or decrease font size
 */

function changeFontSize(fontSizeValue, textLocation) {
    gState.labels[textLocation].textFontSize += fontSizeValue;
    drawOnCanvas();
}

function changeFontColor(fontColorHex, textLocation) {
    gState.labels[textLocation].textColor = fontColorHex;
    drawOnCanvas();
}

function changeTextShadow(textLocation) {
    gState.labels[textLocation].textShadow = !gState.labels[textLocation].textShadow;    
    drawOnCanvas();
}

function alignText(position, textLocation) {
    gState.labels[textLocation].textAlignment = position;
    drawOnCanvas();
}

function downloadImg(elLink) {
    elLink.href = canvas.toDataURL();
    elLink.download = 'perfectMeme.jpg';
}

function resetCanvas() {
    var currUrl = gState.currMemeUrl;
    resetState();
    gState.currMemeUrl = currUrl;
    resetCanvasGeneratorInputs();
    drawOnCanvas();
}


/**
 * Empty generator inputs
 */
function resetCanvasGeneratorInputs(){
    $('#topText').val('');
    $('#bottomText').val('');
    $('.top-text__color').val('#000000');
    $('.bottom-text__color').val('#000000');
}