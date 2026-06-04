const workflow = [
  {
    title: "Record harvest",
    text: "Farmers submit commodity, quantity, harvest date, origin, photo, and expected price.",
  },
  {
    title: "Validate batch",
    text: "AGRI-EYE reviews farmer data, product quality, and assigns a simple A/B/C grade.",
  },
  {
    title: "Generate QR",
    text: "Approved batches receive a public QR traceability page with product origin and timeline.",
  },
  {
    title: "Sell to B2B",
    text: "Verified produce is listed for restaurants, hotels, caterers, food MSMEs, and distributors.",
  },
];

const products = [
  {
    name: "Red Chili — Grade A",
    meta: "Boyolali · 100 kg available · Harvested 10 Jun 2026",
    price: "Rp32k/kg",
  },
  {
    name: "Fresh Tomato — Grade B",
    meta: "Karo · 240 kg available · QR traceability ready",
    price: "Rp11k/kg",
  },
  {
    name: "Green Mustard — Grade A",
    meta: "Bandung · 80 kg available · Verified batch",
    price: "Rp9k/kg",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="container">
        <nav className="navbar">
          <a className="logo" href="#top" aria-label="AGRI-EYE home">
            <span className="logo-mark">A</span>
            <span>AGRI-EYE</span>
          </a>

          <div className="nav-links" aria-label="Main navigation">
            <a href="#product">Product</a>
            <a href="#traceability">Traceability</a>
            <a href="#marketplace">Marketplace</a>
            <a href="#workflow">Workflow</a>
          </div>

          <div className="nav-actions">
            <a href="#login">Login</a>
            <a className="btn btn-primary" href="#start">Get Started</a>
          </div>
        </nav>

        <section className="hero" id="top">
          <div>
            <span className="eyebrow">QR-based food traceability for local harvests</span>
            <h1>Traceable harvests. Trusted supply. Better value.</h1>
            <p>
              AGRI-EYE helps farmers digitize harvest data, generate QR-based food traceability,
              and connect verified produce with B2B buyers.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#start">Start as Farmer</a>
              <a className="btn btn-secondary" href="#marketplace">Explore Marketplace</a>
            </div>

            <div className="stats-row" aria-label="Platform highlights">
              <div className="stat-card">
                <strong>3</strong>
                <span>core roles: farmer, buyer, admin</span>
              </div>
              <div className="stat-card">
                <strong>QR</strong>
                <span>public traceability per harvest batch</span>
              </div>
              <div className="stat-card">
                <strong>B2B</strong>
                <span>market access for verified local produce</span>
              </div>
            </div>
          </div>

          <div className="visual-stack" aria-label="Traceability preview mockup">
            <div className="visual-card">
              <div className="visual-top">
                <span className="badge">Verified Batch</span>
                <div className="qr-box" aria-hidden="true">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <span key={index} style={{ opacity: index % 3 === 0 ? 0.35 : 0.95 }} />
                  ))}
                </div>
              </div>

              <h2 className="batch-title">Red Chili — Batch #AGRI-2026-001</h2>
              <p className="batch-meta">Pak Suyanto · Boyolali, Central Java · Grade A</p>

              <div className="timeline">
                <div className="timeline-item"><span className="dot" /> Harvest recorded by farmer</div>
                <div className="timeline-item"><span className="dot" /> Data validated by AGRI-EYE</div>
                <div className="timeline-item"><span className="dot" /> Listed on B2B marketplace</div>
                <div className="timeline-item"><span className="dot" /> Ready for buyer order</div>
              </div>
            </div>

            <div className="floating-card">
              <span>Sell readiness score</span>
              <strong>87/100</strong>
              <p>Complete data, clear photo, verified origin, and Grade A quality.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="section" id="product">
        <div className="container">
          <div className="section-header">
            <h2>A trust layer for local agricultural supply.</h2>
            <p>
              AGRI-EYE is not just a marketplace. It gives each harvest batch a digital identity,
              making origin, harvest date, grade, and distribution status easier to verify.
            </p>
          </div>

          <div className="grid-3">
            <div className="info-card">
              <h3>For farmers</h3>
              <p>Record harvest data, receive QR traceability, and access B2B buyers beyond traditional middlemen.</p>
            </div>
            <div className="info-card">
              <h3>For B2B buyers</h3>
              <p>Find verified local produce with clearer origin, grade, stock, and harvest information.</p>
            </div>
            <div className="info-card">
              <h3>For AGRI-EYE admin</h3>
              <p>Validate farmer data, grade harvest batches, manage listings, and monitor order workflows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="workflow">
        <div className="container">
          <div className="section-header">
            <h2>From harvest data to market trust.</h2>
            <p>A simple pipeline designed for MVP: record, validate, generate traceability, and sell.</p>
          </div>

          <div className="workflow">
            {workflow.map((item, index) => (
              <div className="step" key={item.title}>
                <div className="step-number">{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="marketplace">
        <div className="container marketplace-preview">
          <div className="section-header">
            <h2>Marketplace built around traceability.</h2>
            <p>
              Buyers do not only see price and stock. They can also check batch origin, harvest date,
              farmer profile, grade, and AGRI-EYE validation status before ordering.
            </p>
          </div>

          <div className="product-list">
            {products.map((product) => (
              <div className="product-card" key={product.name}>
                <div>
                  <span className="badge">QR Traceability</span>
                  <h3>{product.name}</h3>
                  <p>{product.meta}</p>
                </div>
                <div className="product-price">{product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="start">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Turn harvest data into market trust.</h2>
              <p>
                AGRI-EYE helps local farmers transform produce into transparent, data-backed products
                that are more ready for B2B demand.
              </p>
            </div>
            <a className="btn" href="#top">Build MVP</a>
          </div>
        </div>
      </section>
    </main>
  );
}
