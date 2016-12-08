'use strict';

/**
 * Called whenever input on Generator form is changes
 */
function writeTextOnMeme() {
    gState.labels['top'].text = gElTopTextBox ? gElTopTextBox.value : '';
    gState.labels['bottom'].text = gElBottomTextBox ? gElBottomTextBox.value : '';
    ctx.clearRect(0, 0, 568, 360);
    drawOnCanvas();
}

/**
 * Incease or decrease font size
 */
function changeFontSize(fontSizeValue, textLocation) {
    gState.labels[textLocation].textFontSize += fontSizeValue;
    drawOnCanvas();
}

/**
 * Set color to text on canvas
 */
function changeFontColor(fontColorHex, textLocation) {
    gState.labels[textLocation].textColor = fontColorHex;
    drawOnCanvas();
}

/**
 * Set Text Shadow to text on canvas
 */
function changeTextShadow(textLocation) {
    gState.labels[textLocation].textShadow = !gState.labels[textLocation].textShadow;
    drawOnCanvas();
}

/**
 * Set alignment to text on canvas
 */
function alignText(position, textLocation) {
    gState.labels[textLocation].textAlignment = position;
    drawOnCanvas();
}

/**
 * Download meme to user
 */
function downloadMeme(elLink) {
    elLink.href = canvas.toDataURL();
    elLink.download = 'perfectMeme.jpg';
}

/**
 * Reset Text effects and features on state, canvas and inputs
 */
function resetText(textLocation) {
    gState.labels[textLocation] = {
        x: gState.labels[textLocation].x,
        y: gState.labels[textLocation].y,
        text: '',
        textAlignment: 'center',
        textFontSize: 60,
        textColor: '#fff',
        textShadow: false
    }
    $('#topText').val('');
    $('.top-text__color').val('#000000');    
    drawOnCanvas();    
}

/**
 * Reset Canvas inputs and state
 */
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
function resetCanvasGeneratorInputs() {
    $('#topText').val('');
    $('#bottomText').val('');
    $('.top-text__color').val('#000000');
    $('.bottom-text__color').val('#000000');
}