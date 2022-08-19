import { useState } from "react";
import styles from "./ticTacToe.module.css";

type StTup = [string, string];
type NTup = [number, number];
type STrip = [string, string, string];

type TileProps = {
  row: number;
  col: number;
  mx: StTup[];
  winners: NTup[];
  onClick: Function;
};

const Tile = (props: TileProps) => {
  const { mx, winners, onClick, row, col } = props;
  let text = mx[row][col];

  if (winners[row][col]) text = "booya!";

  return (
    <div className={styles.tile} onClick={() => onClick(row, col)}>
      <span>{text}</span>
    </div>
  );
};

export const TicTacToeApp = () => {
  // const mx: string[][] = new Array(3).fill(0).map(() => new Array(3).fill(''));
  const mx: STrip[] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [matrix, updateMatrix] = useState<STrip[]>(mx);
  const [next, updateNext] = useState<string>("X");
  const [winners, updateWinners] = useState<NTup[]>([]);

  function checkRow(r: number) {
    if (matrix[r][0] === matrix[r][1] && matrix[r][1] === matrix[r][2])
      return true;
    return false;
  }
  function checkCol(c: number) {
    if (matrix[0][c] === matrix[1][c] && matrix[1][c] === matrix[2][c])
      return true;
    return false;
  }
  function checkDiagonal(int: number) {
    const ds = [
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
    const tup: number[][] = ds[int];
    if (
      matrix[tup[0][0]][tup[0][1]] === matrix[tup[1][0]][tup[1][1]] &&
      matrix[tup[1][0]][tup[1][1]] === matrix[tup[2][0]][tup[2][1]]
    )
      return tup;
    return [];
  }
  function checkForWin() {
    for (let i = 0; i < 3; i++) {
      if (checkRow(i)) {
        updateWinners([
          [i, 0],
          [i, 1],
          [i, 2],
        ]);
      } else if (checkCol(i)) {
        updateWinners([
          [0, i],
          [1, i],
          [2, i],
        ]);
      }
      if (checkDiagonal(0).length) {
        // update lla d1
      } else if (checkDiagonal(1).length) {
        // update
      }
    }
  }

  function updateTile(row: number, col: number) {
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

  return <div className={styles.board}>{tiles}</div>;
};
