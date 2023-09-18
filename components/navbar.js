import { useState } from "react";
import style from "../styles/dropdown.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
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
            <li className="nav-item">
              <div className>
                <Link
                  className="nav-link"
                  href="#"
                  onClick={handleDropdownToggle}
                >
                  <Image src="/images/user.png" width={25} height={25}></Image>
                </Link>
                {showDropdown && (
                  <div>
                    <Link href="/login">Signup/Login </Link>
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </div>
                )}
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <Image
                  src="/images/notification.png"
                  width={25}
                  height={25}
                ></Image>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
