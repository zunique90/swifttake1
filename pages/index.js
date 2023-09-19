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
                <h3>Stay Updated on the fly</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum, omnis expedita! Eum, praesentium cumque accusantium
                  rem, sit quaerat est nisi ratione, deserunt ducimus quidem
                  iste dicta quibusdam atque maxime cum!
                </p>
                <h3>Get notifications</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum, omnis expedita! Eum, praesentium cumque accusantium
                  rem, sit quaerat est nisi ratione, deserunt ducimus quidem
                  iste dicta quibusdam atque maxime cum!
                </p>
                <h3>Export data</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum, omnis expedita! Eum, praesentium cumque accusantium
                  rem, sit quaerat est nisi ratione, deserunt ducimus quidem
                  iste dicta quibusdam atque maxime cum!
                </p>
              </div>
              <div className="col-1-2">
                <Image
                  src="/images/SwiftI.png"
                  width={600}
                  height={450}
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
