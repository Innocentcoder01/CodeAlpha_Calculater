/**
 * Clears the display and sets it to '0'.
 */
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

/**
 * Appends a value to the display.
 * If the display currently shows '0', it replaces it with the new value.
 * Otherwise, it concatenates the new value to the current display value.
  */
function appendValue(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

/**
 * Calculates and updates the result of the current expression shown on the display.
 * If the expression is invalid, it catches the error and displays 'Error'.
 */
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText); 
    } catch {
        display.innerText = 'Error';
    }
}

/**
 * Removes the last character from the display.
 * If the display becomes empty, it sets it to '0'.
 */
function backspace() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1); 
    if (display.innerText === "") {
        display.innerText = "0";
    }
}
