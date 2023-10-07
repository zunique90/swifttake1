import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section class="section-hero">
        <div className="container-img">
          <div className="section-body">
            <section className="section-inner">
              <h2 className="section-title" style={{ paddingLeft: "10px" }}>
                About SwiftInventory
              </h2>
              <h3 className="section-tagline" style={{ paddingLeft: "10px" }}>
                Simplifying Inventory Management
              </h3>
            </section>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-body">
            <div className="row">
              <div className="col-1-2">
                <p>
                  SwiftInventory was created to address the pressing need for
                  store and shop managers in Small and Medium Scale Enterprises
                  (SMEs) to have a lightweight and user-friendly tool for
                  efficient inventory management. In a market saturated with
                  complex Inventory Management Software and Advanced Retail POS
                  systems, acquiring and maintaining such solutions can be a
                  burden for most SMEs.
                </p>
                <p>
                  At SwiftInventory, we understand the unique challenges faced
                  by small businesses, stores, and warehouses when it comes to
                  inventory management. Our mission is to provide an easy-to-use
                  tool that empowers these enterprises to effectively manage
                  their inventory without the unnecessary complexities and high
                  costs associated with larger-scale solutions. With
                  SwiftInventory, users can enjoy a streamlined and intuitive
                  interface designed specifically for their needs.
                </p>
                <p>
                  Our web application offers a range of essential features that
                  simplify the inventory management process. From tracking stock
                  levels and monitoring product movement to generating
                  comprehensive reports, SwiftInventory ensures that SMEs have
                  the necessary tools at their disposal to make informed
                  decisions and optimize their operations. We believe that
                  access to efficient inventory management should not be limited
                  to large corporations. By offering a lightweight and
                  affordable solution, SwiftInventory levels the playing field,
                  enabling SMEs to compete in today's fast-paced business
                  landscape.
                </p>
                <p>
                  Our commitment to simplicity, affordability, and
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
              <div className="col-1-2">
                <Image
                  className="responsive-image"
                  src="/images/swift3.jpg"
                  width={650}
                  height={680}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="section-footer">
          <Link href="#" className="button">
            Watch Demo
          </Link>
        </div>
      </section>
    </>
  );
}
