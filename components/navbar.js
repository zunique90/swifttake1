import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLinkClick = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className="container">
        <div className="header-logo">
          <Link href="/">
            <h1>SwiftInventory</h1>
          </Link>
        </div>
        <nav className="navbar-menu">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#about">
                About
              </Link>
            </li>
            <li className="nav-item-sign">
              <div className>
                <Link
                  className="nav-link"
                  href="#"
                  onClick={handleDropdownToggle}
                >
                  <Image src="/images/user.png" width={25} height={25}></Image>
                </Link>
                {showDropdown && (
                  <div className="dropdown-menu">
                    <Link href="/login" onClick={handleLinkClick}>
                      Login
                    </Link>
                    <Link href="/dashboard" onClick={handleLinkClick}>
                      Dashboard
                    </Link>
                    <Link href="/" onClick={handleLinkClick}>
                      Sign Out
                    </Link>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
