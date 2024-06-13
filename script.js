const resetButton = document.querySelector('#reset');
const boxes = document.querySelectorAll('.box');
let turn1 = true;
const player1 = 'X';
const player2 = 'O';

boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    box.innerText = turn1 ? player1 : player2;
    turn1 = !turn1;
  })
})

const resetGame = () => {
  boxes.forEach((box) => { box.innerText = '' })
}

resetButton.addEventListener('click', resetGame)
