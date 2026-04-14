let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

let turnO = true; // player O starts

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// CLICK EVENT
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

// CHECK WINNER
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("Winner:", pos1Val);
            disableBoxes();
            return; // stop after winner
        }
    }
};

// DISABLE ALL BOXES AFTER WIN
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// RESET GAME
const resetGame = () => {
    turnO = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
};

resetBtn.addEventListener("click", resetGame);