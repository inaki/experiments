"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import { TiTimes, TiMediaRecord } from "react-icons/ti";

const inter = Inter({
  subsets: ["latin"],
});

interface TicTacToeCellProps {
  value: "X" | "O" | null;
}

const TicTacToeCell = ({ value }: TicTacToeCellProps) => {
  return (
    <div className="absolute">
      {value === "X" && <TiTimes size={32} />}
      {value === "O" && <TiMediaRecord size={32} />}
    </div>
  );
};

const cellBorder = (rIdx: number, cIdx: number) => {
  if (rIdx === 0 && cIdx === 0) {
    return "border-b-2 border-r-2 border-gray-400";
  } else if (rIdx === 1 && cIdx === 0) {
    return "border-r-2 border-l-1 border-gray-400";
  } else if (rIdx === 2 && cIdx === 0) {
    return "border-t-2 border-r-2 border-gray-400";
  } else if (rIdx === 0 && cIdx === 1) {
    return "border-b-2 border-r-2 border-gray-400";
  } else if (rIdx === 1 && cIdx === 1) {
    return "border-r-2 border-gray-400";
  } else if (rIdx === 2 && cIdx === 1) {
    return "border-t-2 border-r-2 border-gray-400";
  } else if (rIdx === 0 && cIdx === 2) {
    return "border-b-2 border-gray-400";
  } else if (rIdx === 1 && cIdx === 2) {
    return "border-gray-400";
  } else if (rIdx === 2 && cIdx === 2) {
    return "border-t-2 border-gray-400";
  } else {
    return "";
  }
};

export default function TicTacToe() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  return (
    <main
      className={`flex min-h-screen items-center justify-center flex-col p-24
  ${inter.className}`}
    >
      <div className="grid grid-cols-[60%,35%] border w-[600px] h-[360px] overflow-hidden border-gray-400 dark:border-light-secondary rounded">
        <div className="grid grid-cols-3 gap-0">
          {board.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
              return (
                <div
                  key={`${rowIndex}-${cellIndex}`}
                  className={`bg-white ${cellBorder(rowIndex, cellIndex)}`}
                >
                  <TicTacToeCell value={cell} />
                </div>
              );
            });
          })}
        </div>

        <div className="grid grid-rows-6 gap-2">
          <div className="bg-green-300 p-4">Row 1 in Column 2</div>
          <div className="bg-green-300 p-4">Row 2 in Column 2</div>
          <div className="bg-green-300 p-4">Row 3 in Column 2</div>
          <div className="bg-green-300 p-4">Row 4 in Column 2</div>
          <div className="bg-green-300 p-4">Row 5 in Column 2</div>
          <div className="bg-green-300 p-4">Row 6 in Column 2</div>
        </div>
      </div>
    </main>
  );
}
