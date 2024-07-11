window.onload = function() {
    generateElegantPalette();
};

function generateElegantPalette() {
    const paletteElement = document.getElementById('elegantPalette');
    paletteElement.innerHTML = '';

    // Generate 5 elegant colors for the palette
    for (let i = 0; i < 5; i++) {
        const color = getRandomElegantColor();

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

function getRandomElegantColor() {
    const elegantColors = [
        '#B5A642', // Olive green
        '#8C4843', // Burgundy
        '#2E4057', // Navy blue
        '#F4E1D2', // Soft peach
        '#D4B996', // Light taupe
        '#5E3C58', // Deep plum
        '#F1DDCF', // Ivory
        '#798EA4', // Dusty blue
        '#D3A588', // Rose gold
        '#A3B18A', // Sage green
    ];
    return elegantColors[Math.floor(Math.random() * elegantColors.length)];
}
