"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiCircleLight } from "react-icons/pi";
import { cellBorder, checkWinner } from "./helpers";

const inter = Inter({
  subsets: ["latin"],
});

type CellValue = "X" | "O" | null;
interface TicTacToeCellProps {
  value: CellValue;
}

const TicTacToeCell = ({ value }: TicTacToeCellProps) => {
  return (
    <div className="absolute pt-8 pl-8 box-sizing">
      {value === "X" && <IoMdClose size={60} />}
      {value === "O" && <PiCircleLight size={60} />}
    </div>
  );
};

const boardInit = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function TicTacToe() {
  const [turn, setTurn] = useState<"X" | "O">("X"); // ["X", "O", "X", "O"
  const [isGameStarted, setIsGameStarted] = useState(false); // [true, false]
  const [isGameEnded, setIsGameEnded] = useState(false); // [true, false]
  const [winner, setWinner] = useState<"X" | "O" | null>(null); // ["X", "O", null
  const [score, setScore] = useState<[number, number]>([0, 0]); // [0, 1]
  const [board, setBoard] = useState<CellValue[][]>(boardInit);

  const handleClickTurn = (rIdx: number, cIdx: number) => {
    setBoard((prev: CellValue[][]) => {
      const newBoard: CellValue[][] = [...prev];
      newBoard[rIdx][cIdx] = turn;

      if (checkWinner(newBoard)) {
        console.log("winner");
        setIsGameEnded(true);
        setWinner(turn);
        setScore((prev) => {
          if (turn === "X") {
            return [prev[0] + 1, prev[1]];
          } else {
            return [prev[0], prev[1] + 1];
          }
        });
      }

      return newBoard;
    });

    setTurn((prev) => (prev === "X" ? "O" : "X"));
  };

  const handleStartGame = () => {
    console.log("start");
  };

  const handleResetGame = () => {
    console.log("reset");
  };

  return (
    <main
      className={`flex min-h-screen items-center justify-center flex-col p-24
  ${inter.className}`}
    >
      <div className="grid grid-cols-[60%,40%] border w-[600px] h-[400px] overflow-hidden border-gray-400 dark:border-light-secondary rounded">
        <div className="grid grid-cols-3 gap-0">
          {board.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
              return (
                <div
                  key={`${rowIndex}-${cellIndex}`}
                  className={`bg-white ${cellBorder(rowIndex, cellIndex)}`}
                  onClick={() => handleClickTurn(rowIndex, cellIndex)}
                >
                  <TicTacToeCell value={cell} />
                </div>
              );
            });
          })}
        </div>

        <div className="grid grid-rows-4 gap-2">
          <div className="bg-gray-300 p-4">
            <div>Score:</div>X : {score[0]} | O : {score[1]}
          </div>
          <div className="bg-gray-300 p-4">turn: {turn}</div>
          <div className="bg-gray-300 p-4">{isGameEnded ? "end" : "going"}</div>
          <div className="p-4 flex justify-around">
            <button
              className="border h-[50px] border-gray-400 rounded box-sizing inline-block px-4 py-2"
              onClick={handleResetGame}
            >
              reset
            </button>
            <button
              className="border h-[50px] border-gray-400 rounded box-sizing inline-block px-4 py-2"
              onClick={handleStartGame}
            >
              start
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
