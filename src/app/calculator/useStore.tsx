import { useState } from "react";
import { operate, trimLeadingZeros } from "./helpers";

export function useCalculator() {
  const [screen, setScreen] = useState("0");
  const [fNum, setFNum] = useState(0);
  const [operator, setOperator] = useState<string | null>(null);
  const [sNum, setSNum] = useState<number | null>(0);

  const updateStates = (
    sc: string,
    num: number,
    op: string | null,
    sec: number | null
  ) => {
    setScreen(sc);
    setFNum(num);
    setOperator(op);
    setSNum(sec);
  };

  const setCalcButton = (btn: string | number) => {
    if (btn === "AC") {
      updateStates("0", 0, null, null);
    } else if (typeof btn === "number" || btn === ".") {
      console.log("is number or dot");
      if (operator !== null) {
        let newSecondNum = `${sNum ?? ""}${btn}`;
        if (btn === "." && !newSecondNum.includes(".")) {
          newSecondNum += ".";
        }
        newSecondNum = String(trimLeadingZeros(+newSecondNum));
        setSNum(parseFloat(newSecondNum));
        setScreen(newSecondNum);
      } else {
        let newNum = `${fNum ?? ""}${btn}`;
        if (btn === "." && !newNum.includes(".")) {
          console.log("is flaot");
          newNum += ".";
        }
        newNum = String(trimLeadingZeros(+newNum));
        setFNum(parseFloat(newNum));
        setScreen(newNum);
      }
    } else if (btn === "=") {
      if (operator && fNum !== null && sNum !== null) {
        let result = operate(operator, fNum, sNum);
        console.log(result);
        updateStates(result.toString(), result, null, null);
      }
    } else {
      if (operator && fNum !== null && sNum !== null) {
        let result = operate(operator, fNum, sNum);
        console.log(result);
        updateStates(result.toString(), result, btn, null);
      } else if (fNum !== null) {
        setOperator(btn);
      }
    }
  };

  return {
    screen,
    setCalcButton,
  };
}
