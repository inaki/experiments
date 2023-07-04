type OperatorFn = (a: number, b: number) => number;

export function operate(operator: string, a: number, b: number): number {
  const operators: Record<string, OperatorFn> = {
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "=": (a, b) => b,
  };

  return operators[operator](a, b);
}

export function trimLeadingZeros(num: number): number {
  const numString = num.toString();
  const trimmedNumString = parseFloat(numString).toString();
  return parseFloat(trimmedNumString);
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
