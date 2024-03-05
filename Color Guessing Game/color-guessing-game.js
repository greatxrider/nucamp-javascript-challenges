const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];

function runGame() {
    let guessColor = '';
    let correct = false;

    let numTries = 0;
    const targetIndex = COLORS_ARRAY[Math.floor(Math.random() * (COLORS_ARRAY.length - 1)) + 1]

    do {
        guessColor = prompt(`I am thinking of one of these colors:\n\n${COLORS_ARRAY.join(', ')}\n\nWhat color am I thinking of?\n`);

        if (guessColor === null) {
            alert("The game has been aborted.");
            return;
        }

        numTries++;
        correct = checkGuess(guessColor, targetIndex);
    } while (!correct);

    alert(`Wow, you nailed it!\n\nYou took ${numTries} tries! Were you cheating?\n\nHit OK to see the color in the background.`);
    document.body.style.backgroundColor = targetIndex;
}

function checkGuess(guessColor, targetIndex) {
    let correct = false;
    guessColor.toLowerCase();

    if (Number(guessColor)) {
        alert(`I guessed a color not a number!`)
    } else if (!COLORS_ARRAY.includes(guessColor)) {
        alert(
            `Whoa, a color from another dimension, huh? Try again.`
        );
    } else if (COLORS_ARRAY.indexOf(guessColor) > COLORS_ARRAY.indexOf(targetIndex)) {
        alert(
            `Sorry, your guess is incorrect.\n\nHint: Your color is alphabetically higher than mine.\n\nPlease try again.`
        );
    } else if (COLORS_ARRAY.indexOf(guessColor) < COLORS_ARRAY.indexOf(targetIndex)) {
        alert(
            `Sorry, your guess is incorrect.\n\nHint: Your color is alphabetically lower than mine.\n\nPlease try again.`
        );
    } else {
        correct = true;
    }
    return correct;
}
