const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLastEntry() {
    display.value = display.value.slice(0, -1); // Remove the last character
}

function calculate() {
    try {
        display.value = eval(display.value); // Be cautious with eval, as it can execute any code.
    } catch (error) {
        display.value = "ERROR";
    }
}
function toggleSign() {
    if (display.value) {
        const newValue = display.value.startsWith('-')
            ? display.value.slice(1) 
            : '-' + display.value; 
        display.value = newValue;
    }
}