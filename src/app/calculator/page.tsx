"use client";
import { Inter } from "next/font/google";
import { parse } from "path";
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
  const [fNum, setFNum] = useState<null | string>(null);
  const [operator, setOperator] = useState<null | string>(null);
  const [sNum, setSNum] = useState<null | string>(null);

  const handleButtonClick = (btn: string) => {
    if (btn === "AC") {
      setFNum("0");
      setSNum("0");
      setOperator(null);
      setScreen("0");
    }
    if ("0123456789".includes(btn) || btn === ".") {
      if (!operator) {
        if (btn === "0" && fNum === "0") {
          return;
        }
        if (btn === "." && fNum === "0") {
          setFNum(`0${btn}`);
          setScreen(`0${btn}`);
          return;
        }
        if (btn === "." && fNum?.includes(".")) {
          return;
        }

        setFNum(`${fNum !== null ? fNum : ""}${btn}`);
        setScreen(`${fNum !== null ? fNum : ""}${btn}`);
      } else {
        if (btn === "." && sNum === "0") {
          setSNum(`0${btn}`);
          setScreen(`0${btn}`);
          return;
        }
        if (btn === "." && sNum?.includes(".")) {
          return;
        }

        setSNum(`${sNum !== null ? sNum : ""}${btn}`);
        setScreen(`${sNum !== null ? sNum : ""}${btn}`);
        console.log("sNum", `${sNum !== null ? sNum : ""}${btn}`);
      }
    } else if (btn === "%") {
      if (sNum) {
        setSNum(`${parseFloat(sNum) / 100}`);
        setScreen(`${parseFloat(sNum) / 100}`);
      }
    } else if (["+", "-", "/", "*"].includes(btn)) {
      if (sNum !== null && operator !== null && fNum !== null) {
        console.log("sNum", sNum);
        setScreen(`${operate(operator, parseFloat(fNum), parseFloat(sNum))}`);
        setFNum(`${operate(operator, parseFloat(fNum), parseFloat(sNum))}`);
        setSNum("");
      }
      console.log("operator", btn);
      setOperator(btn);
    } else if (btn === "=") {
      if (sNum !== null && operator !== null && fNum !== null) {
        setScreen(`${operate(operator, parseFloat(fNum), parseFloat(sNum))}`);
        setFNum(`${operate(operator, parseFloat(fNum), parseFloat(sNum))}`);
        setSNum(null);
        setOperator(null);
      }
    } else if (btn === "+/-") {
      if (sNum) {
        setSNum(`${parseFloat(sNum) * -1}`);
        setScreen(`${parseFloat(sNum) * -1}`);
      } else if (fNum) {
        setFNum(`${parseFloat(fNum) * -1}`);
        setScreen(`${parseFloat(fNum) * -1}`);
      }
    }
  };
  return (
    <main
      className={`flex min-h-screen items-center justify-center flex-col p-24
      ${inter.className}`}
    >
      <div className="border w-[220px] border-gray-400 dark:border-light-secondary rounded p-2 grid grid-cols-4 gap-4">
        <div className="border rounded border-gray-400 dark:border-light-secondary col-span-4 p-4 text-right text-2xl">
          {screen}
        </div>
        {calcKeys.map((calcBtn, idx) => (
          <button
            key={`${calcBtn}-${idx}`}
            onClick={() => handleButtonClick(calcBtn)}
            className={`border border-gray-400 dark:border-light-secondary h-10 rounded-full focus:outline-none ${
              calcBtn === "=" ? "bg-orange-400 border-none" : ""
            } ${calcBtn === "0" ? "col-span-2" : ""}`}
          >
            {calcBtn}
          </button>
        ))}
      </div>
    </main>
  );
}

const calcKeys = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
