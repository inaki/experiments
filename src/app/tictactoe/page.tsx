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

export default function TicTacToe() {
  const boardInit = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [turn, setTurn] = useState<"X" | "O">("X"); // ["X", "O", "X", "O"
  const [isGameStarted, setIsGameStarted] = useState(false); // [true, false]
  const [isGameEnded, setIsGameEnded] = useState(false); // [true, false]
  const [winner, setWinner] = useState<"X" | "O" | null>(null); // ["X", "O", null
  const [score, setScore] = useState<[number, number]>([0, 0]); // [0, 1]
  const [board, setBoard] = useState<CellValue[][]>(boardInit);

  const handleClickTurn = (rIdx: number, cIdx: number) => {
    if (!isGameStarted) {
      return;
    }

    if (board[rIdx][cIdx]) {
      return;
    }

    setBoard((prev: CellValue[][]) => {
      const newBoard: CellValue[][] = [...prev];
      newBoard[rIdx][cIdx] = turn;

      if (checkWinner(newBoard)) {
        setIsGameEnded(true);
        setIsGameStarted(false);
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
    console.log("start game");
    setBoard(boardInit);
    setIsGameStarted(true);
  };

  const handleResetGame = () => {
    setBoard(boardInit);
    setIsGameEnded(false);
    setWinner(null);
    setIsGameStarted(false);
    setScore([0, 0]);
    setTurn("X");
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
                  className={`${cellBorder(rowIndex, cellIndex)}`}
                  onClick={() => handleClickTurn(rowIndex, cellIndex)}
                >
                  <TicTacToeCell value={cell} />
                </div>
              );
            });
          })}
        </div>

        <div className="grid grid-rows-4 gap-2">
          <div className="p-4 pt-10">
            <div className="flex justify-between">
              <div>Score:</div>
              <span>X : {score[0]}</span>
              <span>O : {score[1]}</span>
            </div>
          </div>
          <div className="p-4 pt-10">
            {isGameStarted && (
              <>
                Is <span className="underline">{turn}</span> turn!
              </>
            )}
            {isGameEnded && !isGameStarted && (
              <span>
                {winner} player <span className="underline">won</span> this
                play!
              </span>
            )}
          </div>
          <div className="p-4">
            <br />
            {!isGameStarted && (
              <span>
                Press <span className="font-bold">`start`</span> to play!
              </span>
            )}
          </div>
          <div className="p-4 flex justify-around">
            <button
              className="border h-[50px] border-gray-400 rounded box-sizing inline-block px-4 py-2 hover:bg-gray-300"
              onClick={handleResetGame}
            >
              reset
            </button>
            <button
              className="border h-[50px] border-gray-400 rounded box-sizing inline-block px-4 py-2 hover:bg-gray-300"
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
