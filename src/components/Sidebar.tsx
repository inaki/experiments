import { Inter } from "next/font/google";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });
interface SidebarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <div
      className={`absolute z-100 top-0 left-0 w-[200px]  bg-gray-100 dark:bg-gray-700 py-10 px-5 h-screen ${inter.className}`}
    >
      <div className="font-bold  text-gray-800 dark:text-light-secondary pb-10">
        Sidebar
      </div>
      <button
        className="top-5 right-5 absolute  text-gray-800 dark:text-light-secondary"
        onClick={onClose}
      >
        <FaTimes />
      </button>
      <div className="flex flex-col  text-gray-800 dark:text-light-secondary gap-2">
        <Link href="/">Home</Link>
        <Link href="/calculator">Calculator</Link>
        <Link href="/tictactoe">Tic Tac Toe</Link>
      </div>
    </div>
  );
}
