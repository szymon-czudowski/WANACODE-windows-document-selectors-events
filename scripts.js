// Task 1 - Add a button and an input to your HTML.
// Every time the user clicks the button, change the background color of the button to the color typed by the user.

function changeButtonColor() {
    const colorInput = document.querySelector("#userColorInput").value;
    const button = document.querySelector("#backgroundButtonColorChange");
    button.style.backgroundColor = colorInput;
}

// Task 2 - Add an input and a paragraph to your HTML.
// Every time the user puts in a valid number, change the font size of the paragraph.
// If the user didn't put in a valid value, set it to 12px.

function changeParagraphSize() {
    const paragraphSize = document.querySelector("#paragraphInput").value;
    const paragraphToCheck = document.querySelector("#paragraphSizeChange");

    const fontSize = parseFloat(paragraphSize);
    if (!isNaN(fontSize)) {
        paragraphToCheck.style.fontSize = fontSize + "px";
    } else {
        paragraphToCheck.style.fontSize = "12px";
    }
}
const paragraphSize = document.querySelector("#paragraphInput");
paragraphSize.addEventListener("input", changeParagraphSize);

// Task 3 - Add three paragraphs to your HTML and a button.
// When the user clicks on a button, change the color of all of the paragraphs to green.
// When the user clicks on the button again, change the color of the paragraphs to black.
// If the user clicks on the button for the third time, change the color back to green and so forth.

let greenColor = false;

function toggleColor() {
    const paragraphs = document.querySelectorAll("p");
    greenColor = !greenColor; // Toggle the color state

    paragraphs.forEach(function (p) {
        if (greenColor) {
            p.style.color = "green";
        } else {
            p.style.color = "black";
        }
    });
}

// Task 4 - Add an input and a paragraph to your HTML.
// When the user types something into the input and clicks anywhere else using the mouse, then change the text displayed in the button to the one typed by the user.
// The default text on the button should say "Click"
// If the user didn't provide a string with at least one character, display "Click" on the button.
// When the user clicks on the button, reset the value in the input and change the text on the button back to "Click"

const input = document.getElementById("textInput");
const button = document.getElementById("clickButton");
const output = document.getElementById("outputText");

input.addEventListener("input", updateButtonText);
document.addEventListener("click", handleDocumentClick);

function updateButtonText() {
    const inputText = input.value;
    button.innerText = inputText || "Click";
}

function handleDocumentClick(event) {
    if (event.target !== input && event.target !== button) {
        // Clicked outside input and button
        input.value = "";
        button.innerText = "Click";
    }
}

function handleButtonClick() {
    const inputText = input.value;
    if (inputText) {
        output.innerText = "Button clicked with text: " + inputText;
    } else {
        output.innerText = "Button clicked with no text.";
    }
}

// Task 5 - Add a yellow button to your HTML. Every time the user clicks on it, change it to red.
// When the user clicks again, change it to yellow.
// If the user clicks again, change it to red, and so on.
const buttonColor = document.getElementById("toggleButton");
let isRed = false;

function toggleColor() {
    isRed = !isRed;

    if (isRed) {
        buttonColor.style.backgroundColor = "red";
    } else {
        buttonColor.style.backgroundColor = "yellow";
    }
}

// Task 6 - Add a paragraph and a button to your HTML.
// When the user clicks on the button, change the value of the input to "1".
// Increase the number with every click of the button.

let currentNumber = 0;
const numberParagraph = document.getElementById("numberParagraph");

function incrementNumber() {
    currentNumber += 1;
    numberParagraph.textContent = currentNumber;
}

// Task 7 - Add two buttons and a paragraph to your HTML.
// When button 1 is clicked, write "Button 1 clicked" in the paragraph.
// When button 2 is clicked, write "Button 2 clicked" in the paragraph.
const outputParagraph = document.getElementById("outputParagraphForChange");
function button1Clicked() {
    outputParagraph.textContent = "Button 1 clicked";
}

function button2Clicked() {
    outputParagraph.textContent = "Button 2 clicked";
}

// Task 8 -
const hoverInput = document.getElementById("hoverInput");

function inputHovered() {
    hoverInput.value = "The input is hovered over";
}

function clearInput() {
    hoverInput.value = "";
}