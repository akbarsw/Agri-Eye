const products = [
  { title: 'Cabai Merah Grade A', meta: 'Boyolali · QR aktif', image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=600&q=80' },
  { title: 'Sawi Segar', meta: 'Bandung · Siap pasok', image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=600&q=80' },
  { title: 'Kopi Arabika', meta: 'Kintamani · Grade A', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80' },
  { title: 'Tomat Lokal', meta: 'Karo · Tervalidasi', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80' },
  { title: 'Produk Terverifikasi', meta: 'Asal produk jelas', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80' },
];

const partners = [
  { title: 'Petani Lokal', meta: 'Data panen tercatat', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80' },
  { title: 'Marketplace B2B', meta: 'Pembeli bisnis terhubung', image: 'https://images.unsplash.com/photo-1601593768797-9f5be7d36a28?auto=format&fit=crop&w=600&q=80' },
  { title: 'QR Produk', meta: 'Keterlacakan digital', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80' },
  { title: 'Rantai Pasok', meta: 'Transparan dan rapi', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' },
  { title: 'Produk Siap Pasok', meta: 'Fresh product B2B', image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=600&q=80' },
];

function VelocityCard({ item }: { item: (typeof products)[number] }) {
  return (
    <article className="group flex w-[260px] shrink-0 items-center gap-3 rounded-[1.35rem] border border-[#E8DDC7] bg-white/80 p-2.5 shadow-sm backdrop-blur transition-all duration-300 hover:bg-white hover:shadow-md sm:w-[320px]">
      <div className="h-16 w-20 shrink-0 overflow-hidden rounded-[1rem] bg-[#F1EBDD] sm:h-20 sm:w-24"><img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
      <div className="min-w-0"><p className="truncate text-sm font-bold tracking-tight text-slate-800 sm:text-base">{item.title}</p><p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{item.meta}</p><span className="mt-2 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">AGRI-EYE</span></div>
    </article>
  );
}

export default function AgriScrollVelocity() {
  const firstRow = [...products, ...products, ...products];
  const secondRow = [...partners, ...partners, ...partners];

  return (
    <section className="overflow-hidden border-y border-[#E8DDC7] bg-[#F1EBDD]/55 py-5 lg:py-6">
      <div className="mb-3 flex w-max items-center gap-4 agri-card-marquee-left">{firstRow.map((item, index) => <VelocityCard key={`product-${item.title}-${index}`} item={item} />)}</div>
      <div className="flex w-max items-center gap-4 agri-card-marquee-right">{secondRow.map((item, index) => <VelocityCard key={`partner-${item.title}-${index}`} item={item} />)}</div>
    </section>
  );
}
