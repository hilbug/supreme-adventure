const wordInput = document.getElementById('wordInput');
const colorSelect = document.getElementById('colorSelect');
const fontSelect = document.getElementById('fontSelect');
const wordDisplay = document.getElementById('wordDisplay');

function updateDisplay() {
    const word = wordInput.value.trim();
    const color = colorSelect.value;
    const font = fontSelect.value;
    
    if (word) {
        wordDisplay.textContent = word;
        wordDisplay.style.color = color;
        wordDisplay.style.fontFamily = font;
    } else {
        wordDisplay.textContent = 'Your word will appear here';
        wordDisplay.style.color = '#999';
        wordDisplay.style.fontFamily = 'Arial, sans-serif';
    }
}

wordInput.addEventListener('input', updateDisplay);
colorSelect.addEventListener('change', updateDisplay);
fontSelect.addEventListener('change', updateDisplay);

updateDisplay();
