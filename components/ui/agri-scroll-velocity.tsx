const items = [
  'Data Panen Terverifikasi',
  'QR Produk',
  'Marketplace B2B',
  'Asal Produk Jelas',
  'Petani Lokal',
  'Produk Siap Pasok',
];

export default function AgriScrollVelocity() {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <section className="overflow-hidden border-y border-[#E8DDC7] bg-[#F7F4ED] py-5">
      <div className="agri-scroll-track flex w-max items-center gap-6 whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-6 text-xl font-bold uppercase tracking-[-0.04em] text-slate-800 sm:text-2xl lg:text-4xl"
          >
            {item}
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
          </span>
        ))}
      </div>
    </section>
  );
}
