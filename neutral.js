window.onload = function() {
    generateNeutralPalette();
};

function generateNeutralPalette() {
    const paletteElement = document.getElementById('neutralPalette');
    paletteElement.innerHTML = '';

    // Generate 5 neutral colors for the palette
    for (let i = 0; i < 5; i++) {
        const color = getRandomNeutralColor();

        const colorBox = document.createElement('div');
        colorBox.classList.add('color');
        colorBox.style.backgroundColor = color;
        colorBox.setAttribute('title', color);
        colorBox.addEventListener('click', () => showColorDetails(color));

        paletteElement.appendChild(colorBox);
    }
}

function showColorDetails(color) {
    const colorInfo = `Color: ${color}`;
    alert(colorInfo);
}

function getRandomNeutralColor() {
    const randomGray = Math.floor(Math.random() * 256);
    return `rgb(${randomGray}, ${randomGray}, ${randomGray})`;
}
