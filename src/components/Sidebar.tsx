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
      className={`absolute z-100 top-0 left-0 w-[200px] bg-gray-100 py-10 px-5 h-screen ${inter.className}`}
    >
      <div className="font-bold">Sidebar</div>
      <button className="top-5 right-5 absolute" onClick={onClose}>
        <FaTimes />
      </button>
      <br />
      <Link href="/">home</Link>
      <br />
      <Link href="/calculator">calculator</Link>
    </div>
  );
}
