"use client";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function TicTacToe() {
  return (
    <main
      className={`flex min-h-screen items-center justify-center flex-col p-24
  ${inter.className}`}
    >
      tic tac toe
    </main>
  );
}
