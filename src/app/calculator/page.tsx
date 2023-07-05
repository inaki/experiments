"use client";
import { Inter } from "next/font/google";
import { useCalculator } from "./useStore";
import { calcKeys } from "./helpers";

const inter = Inter({
  subsets: ["latin"],
});

export default function Calculator() {
  const { screen, setCalcButton } = useCalculator();

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
            onClick={() => setCalcButton(calcBtn)}
            className={`border border-gray-400 dark:border-light-secondary h-10 rounded-full focus:outline-none ${
              calcBtn === "=" ? "bg-orange-400 border-none" : ""
            } ${calcBtn === 0 ? "col-span-2" : ""}`}
          >
            {calcBtn}
          </button>
        ))}
      </div>
    </main>
  );
}
