import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section class="section-hero">
        <div className="container-img">
          <div className="section-body">
            <section className="section-inner">
              <h2 className="section-title" style={{ paddingLeft: "10px" }}>
                Inventory Management made Easy
              </h2>
              <Link href="/login" className="button">
                Get Started
              </Link>
            </section>
          </div>
        </div>
      </section>
      <section id="features" className="section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Features</h2>
          </header>
          <div className="section-body">
            <div className="row">
              <div className="col-1-2">
                <h3>
                  <Image
                    src="/images/update.png"
                    width={20}
                    height={15}
                  ></Image>
                  {"  "}Create and update on the go
                </h3>
                <p>
                  Whether you're in the office, on the go, or anywhere in
                  between, SwiftInventory helps you to conveniently track and
                  manage your inventory from the palm of your hand. With our
                  user-friendly interface and seamless mobile accessibility, You
                  can easily make updates or add new items on the fly.
                </p>
                <h3><Image
                    src="/images/notif.png"
                    width={15}
                    height={15}
                  ></Image>
                  {"  "}Get notifications
                  </h3>
                <p>
                  SwiftInventory will never let you run out of stock. Set up
                  your reorder levels and expiry notifications, and you will
                  instantly be alerted when a stock is about to run out or
                  expire
                </p>
                <h3>
                <Image
                    src="/images/export.png"
                    width={15}
                    height={15}
                  ></Image>
                  {"  "}Export data
                  </h3>
                <p>
                  Select and export data from your inventory in a few clicks and
                  in easy to read formats
                </p>
              </div>
              <div className="col-1-2">
                <Image
                  src="/images/swift2.png"
                  width={620}
                  height={430}
                ></Image>
              </div>
            </div>
          </div>
          <div className="section-footer">
            <Link href="#" className="button">
              Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
