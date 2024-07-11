// Initialize array to store generated color palettes
let palettes = [];

// On page load, load saved palettes from localStorage if available
window.onload = function() {
    const savedPalettes = JSON.parse(localStorage.getItem('savedPalettes'));
    if (savedPalettes) {
        palettes = savedPalettes;
        displaySavedPalettes();
    }
    generatePalette();
};

function generatePalette() {
    const paletteElement = document.getElementById('colorPalette');
    paletteElement.innerHTML = '';

    // Generate 5 colors for the palette
    const colors = [];
    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        colors.push(color);

        const colorBox = document.createElement('div');
        colorBox.classList.add('color');
        colorBox.style.backgroundColor = color;
        colorBox.setAttribute('title', color);
        colorBox.addEventListener('click', () => showColorDetails(color));

        paletteElement.appendChild(colorBox);
    }

    // Update the display of saved palettes
    displaySavedPalettes();
}

function showColorDetails(color) {
    const colorInfo = `Color: ${color}`;
    alert(colorInfo);
}

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360); // Random hue
    const pastel = 'hsl(' + hue + ',' + '80%,' + '80%)'; // Saturation and lightness adjusted for pastel tones
    return pastel;
}

function savePalette() {
    // Add the current palette to the list of saved palettes
    palettes.push([...document.getElementById('colorPalette').querySelectorAll('.color')].map(colorBox => colorBox.style.backgroundColor));

    // Update local storage with the updated list of saved palettes
    localStorage.setItem('savedPalettes', JSON.stringify(palettes));

    // Display saved palettes below the generated palette
    displaySavedPalettes();
}

function displaySavedPalettes() {
    const savedPalettesElement = document.getElementById('savedPalettes');
    savedPalettesElement.innerHTML = '';

    palettes.forEach((palette, index) => {
        const paletteDiv = document.createElement('div');
        paletteDiv.classList.add('savedPalette');

        palette.forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.classList.add('color');
            colorBox.style.backgroundColor = color;
            colorBox.setAttribute('title', color);
            paletteDiv.appendChild(colorBox);
        });

        savedPalettesElement.appendChild(paletteDiv);
    });
}
