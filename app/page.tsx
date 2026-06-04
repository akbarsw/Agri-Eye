const workflow = [
  {
    title: "Catat hasil panen",
    text: "Petani mengisi komoditas, jumlah panen, tanggal panen, lokasi asal, foto produk, dan harga harapan.",
  },
  {
    title: "Validasi batch",
    text: "AGRI-EYE meninjau data petani, kualitas produk, lalu memberikan grade mutu sederhana A/B/C.",
  },
  {
    title: "Buat QR Code",
    text: "Batch yang disetujui mendapatkan halaman QR keterlacakan publik berisi asal-usul dan riwayat produk.",
  },
  {
    title: "Jual ke B2B",
    text: "Produk terverifikasi ditampilkan untuk restoran, hotel, katering, UMKM pangan, dan distributor.",
  },
];

const products = [
  {
    name: "Cabai Merah — Grade A",
    meta: "Boyolali · stok 100 kg · panen 10 Jun 2026",
    price: "Rp32rb/kg",
  },
  {
    name: "Tomat Segar — Grade B",
    meta: "Karo · stok 240 kg · QR keterlacakan tersedia",
    price: "Rp11rb/kg",
  },
  {
    name: "Sawi Hijau — Grade A",
    meta: "Bandung · stok 80 kg · batch terverifikasi",
    price: "Rp9rb/kg",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="container">
        <nav className="navbar">
          <a className="logo" href="#top" aria-label="Beranda AGRI-EYE">
            <span className="logo-mark">A</span>
            <span>AGRI-EYE</span>
          </a>

          <div className="nav-links" aria-label="Navigasi utama">
            <a href="#product">Produk</a>
            <a href="#traceability">Keterlacakan</a>
            <a href="#marketplace">Marketplace</a>
            <a href="#workflow">Alur Kerja</a>
          </div>

          <div className="nav-actions">
            <a href="#login">Masuk</a>
            <a className="btn btn-primary" href="#start">Mulai Sekarang</a>
          </div>
        </nav>

        <section className="hero" id="top">
          <div>
            <span className="eyebrow">Keterlacakan pangan berbasis QR untuk hasil panen lokal</span>
            <h1>Panen lebih transparan. Pasokan lebih terpercaya. Nilai jual meningkat.</h1>
            <p>
              AGRI-EYE membantu petani mencatat data hasil panen, membuat QR Code keterlacakan produk,
              dan menghubungkan produk pertanian lokal dengan pembeli B2B.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#start">Mulai sebagai Petani</a>
              <a className="btn btn-secondary" href="#marketplace">Jelajahi Marketplace</a>
            </div>

            <div className="stats-row" aria-label="Sorotan platform">
              <div className="stat-card">
                <strong>3</strong>
                <span>peran utama: petani, pembeli, admin</span>
              </div>
              <div className="stat-card">
                <strong>QR</strong>
                <span>keterlacakan publik untuk setiap batch panen</span>
              </div>
              <div className="stat-card">
                <strong>B2B</strong>
                <span>akses pasar untuk produk lokal terverifikasi</span>
              </div>
            </div>
          </div>

          <div className="visual-stack" aria-label="Preview keterlacakan produk">
            <div className="visual-card">
              <div className="visual-top">
                <span className="badge">Batch Terverifikasi</span>
                <div className="qr-box" aria-hidden="true">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <span key={index} style={{ opacity: index % 3 === 0 ? 0.35 : 0.95 }} />
                  ))}
                </div>
              </div>

              <h2 className="batch-title">Cabai Merah — Batch #AGRI-2026-001</h2>
              <p className="batch-meta">Pak Suyanto · Boyolali, Jawa Tengah · Grade A</p>

              <div className="timeline">
                <div className="timeline-item"><span className="dot" /> Panen dicatat oleh petani</div>
                <div className="timeline-item"><span className="dot" /> Data divalidasi oleh AGRI-EYE</div>
                <div className="timeline-item"><span className="dot" /> Tampil di marketplace B2B</div>
                <div className="timeline-item"><span className="dot" /> Siap menerima pesanan pembeli</div>
              </div>
            </div>

            <div className="floating-card">
              <span>Skor kesiapan jual</span>
              <strong>87/100</strong>
              <p>Data lengkap, foto jelas, asal produk terverifikasi, dan kualitas Grade A.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="section" id="product">
        <div className="container">
          <div className="section-header">
            <h2>Lapisan kepercayaan untuk pasokan pertanian lokal.</h2>
            <p>
              AGRI-EYE bukan sekadar marketplace. Setiap batch panen memiliki identitas digital
              agar asal produk, tanggal panen, grade, dan status distribusi lebih mudah diverifikasi.
            </p>
          </div>

          <div className="grid-3">
            <div className="info-card">
              <h3>Untuk Petani</h3>
              <p>Catat data panen, dapatkan QR keterlacakan, dan akses pembeli B2B di luar jalur perantara tradisional.</p>
            </div>
            <div className="info-card">
              <h3>Untuk Pembeli B2B</h3>
              <p>Temukan produk lokal terverifikasi dengan informasi asal, grade, stok, dan tanggal panen yang lebih jelas.</p>
            </div>
            <div className="info-card">
              <h3>Untuk Admin AGRI-EYE</h3>
              <p>Validasi data petani, beri grade batch panen, kelola listing produk, dan pantau alur pesanan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="workflow">
        <div className="container">
          <div className="section-header">
            <h2>Dari data panen menjadi kepercayaan pasar.</h2>
            <p>Pipeline MVP yang sederhana: catat, validasi, buat keterlacakan, lalu jual ke pembeli B2B.</p>
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
            <h2>Marketplace yang dibangun dengan keterlacakan.</h2>
            <p>
              Pembeli tidak hanya melihat harga dan stok. Mereka juga dapat mengecek asal batch,
              tanggal panen, profil petani, grade, dan status validasi AGRI-EYE sebelum memesan.
            </p>
          </div>

          <div className="product-list">
            {products.map((product) => (
              <div className="product-card" key={product.name}>
                <div>
                  <span className="badge">QR Keterlacakan</span>
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
              <h2>Ubah data panen menjadi kepercayaan pasar.</h2>
              <p>
                AGRI-EYE membantu petani lokal mengubah hasil panen menjadi produk transparan berbasis data
                yang lebih siap memenuhi kebutuhan pembeli B2B.
              </p>
            </div>
            <a className="btn" href="#top">Bangun MVP</a>
          </div>
        </div>
      </section>
    </main>
  );
}
