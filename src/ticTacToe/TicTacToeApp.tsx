import { useState } from "react";
import styles from "./ticTacToe.module.css";

type NTup = [number, number];
type STrip = [string, string, string];

type TileProps = {
  row: number;
  col: number;
  mx: STrip[];
  winners: string[] | undefined;
  onClick: Function;
};

const Tile = (props: TileProps) => {
  const { mx, winners, onClick, row, col } = props;
  let text = mx[row][col];

  if (winners && winners.includes(`${row}-${col}`)) text = "B!";

  return (
    <div className={styles.tile} onClick={() => onClick(row, col)}>
      <span>{text}</span>
    </div>
  );
};

export const TicTacToeApp = () => {
  const mx: STrip[] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [matrix, updateMatrix] = useState<STrip[]>(mx);
  const [next, updateNext] = useState<string>("X");
  const [winners, updateWinners] = useState<string[] | undefined>();

  function checkRow(r: number) {
    if (
      matrix[r][0] !== "" &&
      matrix[r][0] === matrix[r][1] &&
      matrix[r][1] === matrix[r][2]
    )
      return true;
    return false;
  }

  function checkCol(c: number) {
    if (
      matrix[0][c] !== "" &&
      matrix[0][c] === matrix[1][c] &&
      matrix[1][c] === matrix[2][c]
    )
      return true;
    return false;
  }

  function checkDiagonal(int: number): string[] {
    const ds: NTup[][] = [
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];
    const tupArr: NTup[] = ds[int];
    if (
      matrix[tupArr[0][0]][tupArr[0][1]] !== "" &&
      matrix[tupArr[0][0]][tupArr[0][1]] ===
        matrix[tupArr[1][0]][tupArr[1][1]] &&
      matrix[tupArr[1][0]][tupArr[1][1]] === matrix[tupArr[2][0]][tupArr[2][1]]
    ) {
      return tupArr.map((a) => `${a[0]}-${a[1]}`);
    }
    return [];
  }

  function checkForWin() {
    for (let i = 0; i < 3; i++) {
      if (checkRow(i)) {
        updateWinners([`${i}-0`, `${i}-1`, `${i}-2`]);
      } else if (checkCol(i)) {
        updateWinners([`0-${i}`, `1-${i}`, `2-${i}`]);
      }
      if (checkDiagonal(0).length) {
        updateWinners(checkDiagonal(0));
      } else if (checkDiagonal(1).length) {
        updateWinners(checkDiagonal(1));
      }
    }
  }

  function updateTile(row: number, col: number) {
    if (winners) return;
    const currVal = matrix[row][col];
    if (currVal !== "") return;
    const copy = [...matrix];
    copy[row][col] = next;
    updateNext(next === "X" ? "Y" : "X");
    updateMatrix(copy);
    checkForWin();
  }

  const tiles = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      tiles.push(
        <Tile
          key={`${row}-${col}`}
          row={row}
          col={col}
          mx={matrix}
          winners={winners}
          onClick={updateTile}
        />
      );
    }
  }

  function reset() {
    updateWinners(undefined);
    updateMatrix(mx);
  }

  return (
    <div className={styles.board}>
      {tiles}
      <button onClick={reset}>reset</button>
    </div>
  );
};
