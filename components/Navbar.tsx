import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <nav className="flex items-center gap-5">
          <Link href="/">Home</Link>
          <Link href="/">About us</Link>
          <Link href="/">Our Teams</Link>
          <Link href="/">MarketPlace</Link>
          <Link href="/">Road Map</Link>
          <Link href="/">WhitePaper</Link>
        </nav>
        <div className="flex items-center justify-end gap-5">
          <Button
            type="button"
            title="Connect Wallet"
            className="common-button connect-button"
          />
          <button>
            <Image src="/language.svg" alt="language" width={24} height={24} />
            <Image src="/language.svg" alt="language" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
