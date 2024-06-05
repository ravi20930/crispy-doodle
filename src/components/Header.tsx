import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <header className="flex items-center justify-between bg-white shadow-md p-4 sticky top-0 z-10">
    <div className="logo max-w-xs overflow-hidden">
      <Link href="/" passHref>
        <img
          src="logo.png"
          alt="Easy PDFs!"
          className="w-full h-full object-contain"
        />
      </Link>
    </div>
    <nav className="flex items-center justify-end flex-grow text-right">
      <Link href="https://calendly.com/ravi20930/catchup" passHref>
        <span className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-md font-medium">
          Contact Us
        </span>
      </Link>
    </nav>
  </header>
);

export default Header;
