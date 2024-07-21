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

export const addEventListener = () => {
    const boxs = document.querySelectorAll("#sudoku div");

    boxs.forEach((box) => {
        box.addEventListener("click", () => addHighlighting(boxs, box));

        if (box.textContent === "") {
        }
    });
};
