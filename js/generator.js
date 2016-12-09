'use strict';

/**
 * Called whenever input on Generator form is changes
 */
function writeTextOnMeme() {
    gState.labels['top'].text = gElTopTextBox ? gElTopTextBox.value : '';
    gState.labels['bottom'].text = gElBottomTextBox ? gElBottomTextBox.value : '';
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
 * Set Font Family to text on canvas
 */
function changeFontFamily(elFontFamily, textLocation) {
    console.dir(elFontFamily);
    gState.labels[textLocation].fontFamily = elFontFamily.innerText;
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
        fontFamily: 'Lato',
        textFontSize: 60,
        textColor: '#fff',
        textShadow: false
    }
    $('#'+ textLocation +'Text').val('');
    $('.'+ textLocation +'-text__color').val('#000000');
    $('#'+ textLocation +'__fontDropDown').removeClass('show');
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
