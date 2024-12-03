function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    // Generate dice values and corresponding images
    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6 + 1); // Random dice value between 1-6
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`); // 
    }

    // Update text content with the dice values
    diceResult.textContent = `Dice: ${values.join(', ')}`;

    // Update the diceImages container with the images
    diceImages.innerHTML = images.join(''); // Join images into a single HTML string
}
