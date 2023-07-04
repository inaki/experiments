import { useState } from "react";
import { operate } from "./helpers";

export function useCalculator() {
  const [screen, setScreen] = useState("0");
  const [fNum, setFNum] = useState(0);
  const [operator, setOperator] = useState<null | string>(null);
  const [sNum, setSNum] = useState(0);

  const setCalcButton = (btn: string | number) => {
    if (typeof btn === "number") {
      if (!operator) {
        setFNum(Number(`${fNum}${btn}`));
        setScreen(`${fNum}${btn}`);
      } else {
        setSNum(Number(`${sNum}${btn}`));
        setScreen(`${sNum}${btn}`);
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
        setOperator(btn);
      }
    }
  };

  return {
    screen,
    setCalcButton,
  };
}
