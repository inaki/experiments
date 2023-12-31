"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { createModalAppendEl } from "@/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { FaBars } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarModal, setSidebarModal] = useState<HTMLElement | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const portalRef = useRef(null);

  useEffect(() => {
    const createSidebarModal = createModalAppendEl("div", "sidebar-modal");
    setSidebarModal(createSidebarModal);

    return () => {
      if (sidebarModal) {
        document.body.removeChild(sidebarModal);
      }
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const renderSidebar = () => {
    if (!sidebarModal) return null;
    return createPortal(
      <Sidebar onClose={() => setSidebarOpen(false)} />,
      sidebarModal
    );
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={`
      bg-light-primary dark:bg-dark-primary text-dark-primary
      dark:text-white ${inter.className}
      `}
        >
          <button
            className="absolute top-5 left-5"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>
          <button
            className="absolute top-5 right-5"
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          >
            {theme === "light" ? <FiSun /> : <FiMoon />}
          </button>
          {sidebarOpen && renderSidebar()}
          {children}
        </div>
      </body>
    </html>
  );
}
