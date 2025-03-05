import React from "react";
import Theme from "./ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center container">
      <Link href="/" className="text-4xl font-bold">
        Mix<span className="text-orange-500">Tape</span>
      </Link>
      <Theme />
    </nav>
  );
};

export default Navbar;
