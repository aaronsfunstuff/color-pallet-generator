function generatePalette() {
    const paletteElement = document.getElementById('colorPalette');
    paletteElement.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const colorBox = document.createElement('div');
        colorBox.classList.add('color');
        colorBox.style.backgroundColor = color;
        colorBox.setAttribute('title', color);
        colorBox.addEventListener('click', () => copyToClipboard(color));

        paletteElement.appendChild(colorBox);
    }
}

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360); // Random hue
    const pastel = 'hsl(' + hue + ',' + '80%,' + '80%)'; // Saturation and lightness adjusted for pastel tones
    return pastel;
}


function copyToClipboard(color) {
    navigator.clipboard.writeText(color)
        .then(() => alert(`Color ${color} copied to clipboard!`))
        .catch(err => console.error('Failed to copy:', err));
}

// Generate initial palette on page load
generatePalette();
