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
                <h3>
                  <Image src="/images/notif.png" width={15} height={15}></Image>
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
                  className="responsive-image"
                  src="/images/swift2.png"
                  width={650}
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
      <section id="about" className="section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">About</h2>
          </header>
          <div className="section-body">
            <div className="row">
              <div className="col-1-2">
                <Image
                  className="responsive-image"
                  src="/images/swift2.png"
                  width={900}
                  height={600}
                ></Image>
              </div>
              <div className="col-1-2">
                <p>
                  SwiftInventory was created to address the pressing need for
                  store and shop managers in Small and Medium Scale Enterprises
                  (SMEs) to have a lightweight and user-friendly tool for
                  efficient inventory management. In a market saturated with
                  complex Inventory Management Software and Advanced Retail POS
                  systems, acquiring and maintaining such solutions can be a
                  burden for most SMEs. At SwiftInventory, we understand the
                  unique challenges faced by small businesses, stores, and
                  warehouses when it comes to inventory management. Our mission
                  is to provide an easy-to-use tool that empowers these
                  enterprises to effectively manage their inventory without the
                  unnecessary complexities and high costs associated with
                  larger-scale solutions. With SwiftInventory, users can enjoy a
                  streamlined and intuitive interface designed specifically for
                  their needs. Our web application offers a range of essential
                  features that simplify the inventory management process. From
                  tracking stock levels and monitoring product movement to
                  generating comprehensive reports, SwiftInventory ensures that
                  SMEs have the necessary tools at their disposal to make
                  informed decisions and optimize their operations. We believe
                  that access to efficient inventory management should not be
                  limited to large corporations. By offering a lightweight and
                  affordable solution, SwiftInventory levels the playing field,
                  enabling SMEs to compete in today's fast-paced business
                  landscape. Our commitment to simplicity, affordability, and
                  user-friendliness sets us apart, making SwiftInventory the
                  go-to choice for businesses seeking a reliable inventory
                  management solution tailored to their specific needs. Join the
                  growing community of satisfied SwiftInventory users and
                  experience the ease and efficiency of managing your inventory
                  with our intuitive web app. Simplify your operations, save
                  valuable time, and focus on what truly matters—growing your
                  business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
