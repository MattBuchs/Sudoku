const getRandomIntInclusive = (bannedNumbers) => {
    const possibleNumbers = [];

    // Remplir le tableau possibleNumbers avec les chiffres de 1 à 9, sauf ceux bannis
    for (let i = 1; i <= 9; i++) {
        if (!bannedNumbers.includes(i)) {
            possibleNumbers.push(i);
        }
    }

    // Si tous les chiffres sont bannis, renvoit null
    if (possibleNumbers.length === 0) {
        return null;
    }

    // Générer un index aléatoire dans le tableau possibleNumbers
    const randomIndex = Math.floor(Math.random() * possibleNumbers.length);

    return possibleNumbers[randomIndex];
};

export const generateRandomNumber = (rowIndex, colIndex, boxIndex) => {
    const rows = document.querySelectorAll(`.row-${rowIndex}`);
    const cols = document.querySelectorAll(`.col-${colIndex}`);
    const boxs = document.querySelectorAll(`.box-${boxIndex}`);
    const number = [];

    rows.forEach((row) => {
        if (row.textContent !== "") number.push(Number(row.textContent));
    });

    cols.forEach((col) => {
        if (col.textContent !== "") number.push(Number(col.textContent));
    });

    boxs.forEach((box) => {
        if (box.textContent !== "") number.push(Number(box.textContent));
    });

    const numberBanned = [...new Set(number)]; // Remove duplicates
    const randomNumber = getRandomIntInclusive(numberBanned);

    return randomNumber;
};

export const generateUniqueRandomNumbers = (count) => {
    if (count > 81) {
        throw new Error("Count exceeds the number of unique values available.");
    }

    // Create an array of numbers from 0 to 80
    const numbers = Array.from({ length: 81 }, (_, index) => index);

    // Shuffle the array
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Return the first 'count' numbers from the shuffled array
    return numbers.slice(0, count);
};
