import {
    generateRandomNumber,
    generateUniqueRandomNumbers,
} from "./randomNumber.js";
import { addEventListener, emptyGrid } from "./utils.js";

export const changeDifficulty = () => {
    const select = document.querySelector("#difficulty-select");
    emptyGrid();
    createGrid(select.value);
};

const createGrid = (difficulty) => {
    const COLS = 9;
    const ROWS = 9;
    const grid = document.querySelector("#sudoku");

    let i = 0;

    while (i < ROWS) {
        let rowSuccess = true;

        for (let j = 0; j < COLS; j++) {
            const div = document.createElement("div");

            div.classList.add(`row-${i}`);
            div.classList.add(`col-${j}`);
            // Calcule les indices des boxs 3x3
            const boxRow = Math.floor(i / 3);
            const boxCol = Math.floor(j / 3);
            const boxIndex = boxRow * 3 + boxCol;
            div.classList.add(`box-${boxIndex}`);

            const number = generateRandomNumber(i, j, boxIndex);

            if (number === null) {
                rowSuccess = false;
                break;
            }

            div.textContent = number;
            div.classList.add("color-black");

            if (i === 2 || i === 5) div.style.borderBottom = "1px solid #000";
            if (j === 2 || j === 5) div.style.borderRight = "1px solid #000";

            grid.appendChild(div);
        }

        if (!rowSuccess) {
            // Supprime la ligne actuelle et la précédente si elles existent
            const deleteRows = document.querySelectorAll(`.row-${i}`);
            const deleteLastRows = document.querySelectorAll(`.row-${i - 1}`);
            const boxs = [...deleteRows, ...deleteLastRows];

            boxs.forEach((box) => {
                box.remove();
            });
            i -= 2;
        }

        i++;
    }

    const gridArr = [];
    const gridNumber = document.querySelectorAll("#sudoku div");
    gridNumber.forEach((el) => {
        gridArr.push(el.textContent);
    });

    removeNumbers(difficulty);
    addEventListener(gridArr);
};

const removeNumbers = (difficulty) => {
    let numberBoxesToDelete;
    switch (difficulty) {
        case "easy":
            numberBoxesToDelete = 46; // 46 cases vides
            break;
        case "medium":
            numberBoxesToDelete = 52;
            break;
        case "hard":
            numberBoxesToDelete = 58;
            break;
        case "extreme":
            numberBoxesToDelete = 65;
            break;
        default:
            numberBoxesToDelete = 45; // Default to easy
    }

    const boxs = document.querySelectorAll("#sudoku div");
    const emptyBoxes = generateUniqueRandomNumbers(numberBoxesToDelete);

    emptyBoxes.forEach((number) => {
        boxs[number].textContent = "";
        boxs[number].classList.add("text-blue");
        boxs[number].classList.remove("color-black");
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector("#difficulty-select");
    select.value = "easy";
    createGrid("easy");
});

window.changeDifficulty = changeDifficulty;
