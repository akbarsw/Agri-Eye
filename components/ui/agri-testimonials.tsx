const testimonials = [
  {
    text: 'Data panen cabai jadi lebih rapi. Saya bisa menunjukkan asal produk dan jumlah panen ke calon pembeli dengan lebih percaya diri.',
    name: 'Petani Cabai',
    role: 'Boyolali, Jawa Tengah',
    initials: 'PC',
  },
  {
    text: 'QR Produk membantu pembeli melihat asal sawi dan tanggal panen tanpa harus bertanya berkali-kali ke petani.',
    name: 'Petani Sawi',
    role: 'Bandung, Jawa Barat',
    initials: 'PS',
  },
  {
    text: 'AGRI-EYE membuat produk kopi kami terlihat lebih profesional karena ada data panen, lokasi asal, dan grade yang jelas.',
    name: 'Kelompok Tani Kopi',
    role: 'Kintamani, Bali',
    initials: 'KK',
  },
  {
    text: 'Kami lebih mudah mencari pasokan sayur yang jelas asalnya. Sebelum order, tim bisa cek QR Produk terlebih dahulu.',
    name: 'Restoran Nusantara',
    role: 'Pembeli B2B',
    initials: 'RN',
  },
  {
    text: 'Untuk kebutuhan katering, informasi stok, lokasi, dan tanggal panen sangat membantu saat memilih produk segar.',
    name: 'Katering Sehat Jaya',
    role: 'Pembeli B2B',
    initials: 'KS',
  },
  {
    text: 'Marketplace berbasis data membuat proses negosiasi lebih cepat karena informasi awal produk sudah lengkap.',
    name: 'Distributor FreshMart',
    role: 'Distributor Bahan Segar',
    initials: 'DF',
  },
  {
    text: 'Petani tomat di kelompok kami jadi punya catatan panen yang lebih tertata dan mudah dipantau status validasinya.',
    name: 'Petani Tomat',
    role: 'Karo, Sumatera Utara',
    initials: 'PT',
  },
  {
    text: 'Sebagai pembeli, kami merasa lebih aman karena produk yang tampil sudah melalui validasi dan memiliki halaman keterlacakan.',
    name: 'UMKM Olahan Pangan',
    role: 'Pembeli B2B',
    initials: 'UM',
  },
  {
    text: 'AGRI-EYE membantu menjembatani petani lokal dengan pembeli bisnis tanpa menghilangkan informasi penting dari petani.',
    name: 'Koperasi Tani Lokal',
    role: 'Mitra Pasokan',
    initials: 'KT',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialsColumn({
  items,
  className = '',
  reverse = false,
}: {
  items: typeof testimonials;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`agri-testimonial-track flex flex-col gap-5 pb-5 ${reverse ? 'agri-testimonial-track-reverse' : ''}`}>
        {[...items, ...items].map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="w-full max-w-xs rounded-[1.75rem] border border-[#E8DDC7] bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white hover:shadow-md"
          >
            <p className="text-sm leading-7 text-slate-600">“{item.text}”</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-bold text-white shadow-sm">
                {item.initials}
              </div>
              <div>
                <p className="text-sm font-bold tracking-tight text-slate-900">{item.name}</p>
                <p className="mt-0.5 text-xs font-medium text-slate-500">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function AgriTestimonials() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E8DDC7] bg-white/55 p-6 shadow-sm backdrop-blur lg:p-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold text-emerald-600">Testimoni Pengguna</p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-slate-900 lg:text-5xl">
            Dipercaya petani lokal dan pembeli B2B.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-500">
            Gambaran pengalaman pengguna AGRI-EYE dari sisi petani, kelompok tani, restoran, katering, distributor, dan UMKM pangan.
          </p>
        </div>

        <div className="mt-10 flex max-h-[660px] justify-center gap-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <TestimonialsColumn items={firstColumn} />
          <TestimonialsColumn items={secondColumn} className="hidden md:block" reverse />
          <TestimonialsColumn items={thirdColumn} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
