import { nanoid } from "nanoid";

export const emptyGrid = () => {
    const boxs = document.querySelectorAll("#sudoku div");

    boxs.forEach((box) => {
        box.remove();
    });
};

const addHighlighting = (boxs, box) => {
    boxs.forEach((el) => {
        if (el.classList.contains("box-selected"))
            el.classList.remove("box-selected");

        if (el.classList.contains("color-extend"))
            el.classList.remove("color-extend");

        if (el.classList.contains("background-red2"))
            el.classList.remove("background-red2");

        if (el.classList.contains("background-blue"))
            el.classList.remove("background-blue");

        if (
            el.textContent === box.textContent &&
            el !== box &&
            box.textContent !== ""
        ) {
            if (el.classList.contains("text-red"))
                el.classList.add("background-red2");
            else el.classList.add("background-blue");
        }
    });
    box.classList.add("box-selected");

    const rows = document.querySelectorAll(`.row-${box.className[4]}`);
    const cols = document.querySelectorAll(`.col-${box.className[10]}`);
    const squares = document.querySelectorAll(`.box-${box.className[16]}`);

    rows.forEach((row) => {
        if (!row.classList.contains("box-selected"))
            row.classList.add("color-extend");
    });

    cols.forEach((col) => {
        if (!col.classList.contains("box-selected"))
            col.classList.add("color-extend");
    });

    squares.forEach((square) => {
        if (!square.classList.contains("box-selected"))
            square.classList.add("color-extend");
    });
};

const numberToAdd = (number, boxs, gridArr) => {
    const boxSelected = document.querySelector(".box-selected");

    if (boxSelected.classList.contains("color-black")) return;

    const extendsColor = document.querySelectorAll(".color-extend");
    let boxNumber;

    if (boxSelected) {
        boxSelected.textContent = number.textContent;
    }

    boxs.forEach((box, index) => {
        if (box.classList.contains("box-selected")) {
            boxNumber = gridArr[index];
        }

        if (box.classList.contains("background-red"))
            box.classList.remove("background-red");
    });

    if (boxSelected.textContent !== boxNumber) {
        boxSelected.classList.add("background-red");
        boxSelected.classList.add("text-red");

        extendsColor.forEach((extend) => {
            if (extend.textContent === boxSelected.textContent)
                extend.classList.add("background-red");
        });
    } else {
        if (
            boxSelected.classList.contains("background-red") ||
            boxSelected.classList.contains("text-red")
        ) {
            boxSelected.classList.remove("background-red");
            boxSelected.classList.remove("text-red");
        }
    }

    boxs.forEach((el) => {
        if (el.classList.contains("background-red2"))
            el.classList.remove("background-red2");

        if (el.classList.contains("background-blue"))
            el.classList.remove("background-blue");

        if (
            el.textContent === boxSelected.textContent &&
            el !== boxSelected &&
            boxSelected.textContent !== ""
        ) {
            if (el.classList.contains("text-red"))
                el.classList.add("background-red2");
            else el.classList.add("background-blue");
        }
    });
};

export const addEventListener = (gridArr) => {
    const boxs = document.querySelectorAll("#sudoku div");
    const numbers = document.querySelectorAll("#number div");

    boxs.forEach((box) => {
        box.addEventListener("click", () => addHighlighting(boxs, box));
    });

    numbers.forEach((number) => {
        number.addEventListener("click", () =>
            numberToAdd(number, boxs, gridArr)
        );
    });
};
