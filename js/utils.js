export const emptyGrid = () => {
    const boxs = document.querySelectorAll("#sudoku div");

    boxs.forEach((box) => {
        box.remove();
    });
};
