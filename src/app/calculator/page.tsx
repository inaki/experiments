"use client";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
});

function operate(operator: string, a: number, b: number) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return 0;
  }
}

export default function Calculator() {
  const [screen, setScreen] = useState("0");
  const [fNum, setFNum] = useState(0);
  const [operator, setOperator] = useState<null | string>(null);
  const [sNum, setSNum] = useState(0);

  const handleButtonClick = (btn: string | number) => {
    if (typeof btn === "number") {
      if (!operator) {
        setFNum(Number(`${fNum}${btn}`));
        setScreen(`${fNum}${btn}`);
        console.log("fNum", Number(`${fNum}${btn}`));
      } else {
        setSNum(Number(`${sNum}${btn}`));
        setScreen(`${sNum}${btn}`);
        console.log("sNum", sNum);
      }
    } else {
      if (btn === "AC") {
        setFNum(0);
        setSNum(0);
        setOperator(null);
        setScreen("0");
      } else if (btn === "%") {
        if (sNum) {
          setSNum(sNum / 100);
          setScreen((sNum / 100).toString());
        } else {
          setFNum(fNum / 100);
          setScreen((fNum / 100).toString());
        }
      } else if (btn === "+/-") {
        if (sNum) {
          setSNum(sNum * -1);
          setScreen((sNum * -1).toString());
        } else {
          setFNum(fNum * -1);
          setScreen((fNum * -1).toString());
        }
      } else {
        if (sNum) {
          setFNum(operate(operator!, fNum, sNum));
          setSNum(0);
          setScreen(operate(operator!, fNum, sNum).toString());
        }
        console.log("operator", btn);
        setOperator(btn);
      }
    }
  };
  return (
    <main
      className={`flex min-h-screen items-center justify-center flex-col p-24
      ${inter.className}`}
    >
      <div className="border w-[220px] rounded p-2 grid grid-cols-4 gap-4">
        <div className="border rounded col-span-4 p-4 text-right text-2xl">
          {screen}
        </div>
        {calcKeys.map((calcBtn, idx) => (
          <button
            key={`${calcBtn}-${idx}`}
            onClick={() => handleButtonClick(calcBtn)}
            className={`border border-gray-200 h-10 rounded-full focus:outline-none ${
              calcBtn === "=" ? "bg-orange-400" : ""
            } ${calcBtn === 0 ? "col-span-2" : ""}`}
          >
            {calcBtn}
          </button>
        ))}
      </div>
    </main>
  );
}

export const calcKeys = [
  "AC",
  "+/-",
  "%",
  "/",
  7,
  8,
  9,
  "*",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "=",
];
