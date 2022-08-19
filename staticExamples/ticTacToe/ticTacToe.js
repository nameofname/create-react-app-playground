document.addEventListener("DOMContentLoaded", () => {
  const WS = "B!";
  const board = document.querySelector(".board");
  const mx = new Array(3).fill(0).map(() => new Array(3).fill(""));
  const tiles = [];
  let next = "X";
  let winner = false;

  function Updater(tile, r, c) {
    function _update() {
      if (mx[r][c] || winner) return;
      mx[r][c] = next;
      // this.firstChild.innerText = mx[r][c];
      this.updateContent();
      next = next === "X" ? "Y" : "X";
      checkForWin();
    }
    return _update.bind(tile);
  }

  function checkCol(i) {
    for (let i = 0; i < 3; i++) {
      if (mx[i][0] !== "" && mx[i][0] === mx[i][1] && mx[i][1] === mx[i][2]) {
        mx[i][0] = WS;
        mx[i][1] = WS;
        mx[i][2] = WS;
        tiles.forEach((tile) => tile.updateContent());
        winner = true;
      }
    }
  }

  function checkRow(i) {
    for (let i = 0; i < 3; i++) {
      if (mx[0][i] !== "" && mx[0][i] === mx[1][i] && mx[1][i] === mx[2][i]) {
        mx[0][i] = WS;
        mx[1][i] = WS;
        mx[2][i] = WS;
        tiles.forEach((tile) => tile.updateContent());
        winner = true;
      }
    }
  }

  function checkDiagonals() {
    if (mx[0][0] !== "" && mx[0][0] === mx[1][1] && mx[1][1] === mx[2][2]) {
      mx[0][0] = WS;
      mx[1][1] = WS;
      mx[2][2] = WS;
      tiles.forEach((tile) => tile.updateContent());
      winner = true;
      return;
    }
    if (mx[0][2] !== "" && mx[0][2] === mx[1][1] && mx[1][1] === mx[2][0]) {
      mx[0][2] = WS;
      mx[1][1] = WS;
      mx[2][0] = WS;
      tiles.forEach((tile) => tile.updateContent());
      winner = true;
      return;
    }
  }

  function checkForWin() {
    for (let i = 0; i < 3; i++) {
      checkRow(i);
      checkCol(i);
    }
    checkDiagonals();
  }

  function drawBoard() {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const tile = document.createElement("div");
        const p = document.createElement("p");
        tile.appendChild(p);
        tile.setAttribute("class", "tile");
        tile.onclick = new Updater(tile, r, c);
        tile.updateContent = function () {
          this.firstChild.innerText = mx[r][c];
        };
        board.appendChild(tile);
        tiles.push(tile);
      }
    }
  }

  document.querySelector(".reset").addEventListener("click", function () {
    winner = false;
    mx.forEach((a, r) =>
      a.forEach((l, c) => {
        mx[r][c] = "";
        tiles.forEach((tile) => tile.updateContent());
      })
    );
  });

  drawBoard();
});
