let x = [];
let o = [];
let i = 0;
let step = 0;
var wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3],
];

function getWinner(playerPoint) {
  for (let win of wins) {
    let winner = win.every(function (number) {
      return playerPoint.indexOf(number) != -1;
    });
    if (winner) {
      return winner;
    }
  }
  return false;
}

function doMove(point) {
  let but = document.querySelector(".button" + point);
  if (!but.innerText) {
    if (i == 0) {
      x.push(point);

      document.querySelector(".button" + point).innerText = "X";
      i++;
    } else {
      o.push(point);
      document.querySelector(".button" + point).innerText = "O";
      i--;
    }

    if (getWinner(x)) {
      alert("x winner");
      alert("o winner");
    } else if (step >= 8) {
      alert("drow");
    }

    step++;
    console.log(x, o, point);
  }
}
