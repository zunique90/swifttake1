import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-1-2">
              <p className="footer-copyright">
                © 2023 SwiftInventory.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
