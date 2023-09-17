import Link from "next/link";

export default function Navbar() {
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
          </ul>
        </nav>
      </div>
    </>
  );
}
