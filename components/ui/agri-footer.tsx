import { Mail, MapPin, MessageCircle } from 'lucide-react';
import AgriEyeLogo from '@/components/agri-eye-logo';

const products = [
  { label: 'Platform', href: '#platform' },
  { label: 'Marketplace B2B', href: '#market' },
  { label: 'Data Panen', href: '/farmer' },
  { label: 'QR Produk', href: '/marketplace' },
];

const solutions = [
  { label: 'Petani Horti', href: '/farmer' },
  { label: 'Pembeli B2B', href: '/buyer' },
  { label: 'Admin Validasi', href: '/admin' },
  { label: 'Sertifikat Mitra', href: '/farmer#sertifikat-saya' },
];

const company = [
  { label: 'Tentang AGRI-EYE', href: '#top' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Bantuan', href: 'mailto:hello@agri-eye.id' },
];

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="w-fit text-base font-medium text-[#5F584B] underline decoration-[#BEB39D] underline-offset-4 transition-colors duration-200 hover:text-[#25B866]"
    >
      {children}
    </a>
  );
}

export default function AgriFooter() {
  return (
    <footer className="border-t border-[#DCD0B8] bg-[#F7F4ED] px-6 py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.95fr_0.75fr]">
          <div>
            <a href="#top" className="inline-flex items-center">
              <AgriEyeLogo compact />
            </a>
            <p className="mt-5 max-w-md text-base font-medium leading-7 text-[#5F584B]">
              Platform pintar penyedia produk pertanian yang jelas asalnya, terverifikasi, dan siap terhubung ke pembeli B2B.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/farmer"
                className="rounded-2xl bg-[#25B866] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#1FA653] hover:shadow-md"
              >
                Mulai sebagai Petani
              </a>
              <a
                href="/buyer"
                className="rounded-2xl border border-[#DCD0B8] bg-white/75 px-5 py-3 text-sm font-bold text-[#5F584B] shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md"
              >
                Pembeli B2B
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#4E473B]">Produk</h3>
            <div className="mt-5 grid gap-4">
              {products.map((item) => (
                <FooterLink key={item.label} href={item.href}>{item.label}</FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#4E473B]">Solusi</h3>
            <p className="mt-5 text-xs font-bold uppercase tracking-wide text-[#5F584B]">
              Untuk yang <span className="text-[#25B866]">menanam</span>
            </p>
            <div className="mt-3 grid gap-4">
              <FooterLink href="/farmer">Petani Lokal</FooterLink>
              <FooterLink href="/farmer#sertifikat-saya">Mitra Terverifikasi</FooterLink>
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-wide text-[#5F584B]">
              Untuk yang <span className="text-[#25B866]">membeli</span>
            </p>
            <div className="mt-3 grid gap-4">
              {solutions.slice(1, 3).map((item) => (
                <FooterLink key={item.label} href={item.href}>{item.label}</FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#4E473B]">Perusahaan</h3>
            <div className="mt-5 grid gap-4">
              {company.map((item) => (
                <FooterLink key={item.label} href={item.href}>{item.label}</FooterLink>
              ))}
            </div>

            <div className="mt-7 grid gap-4 text-base font-medium text-[#5F584B]">
              <a href="mailto:hello@agri-eye.id" className="flex items-center gap-3 transition-colors hover:text-[#25B866]">
                <Mail className="h-5 w-5" />
                hello@agri-eye.id
              </a>
              <a href="https://wa.me/6281234567890" className="flex items-center gap-3 transition-colors hover:text-[#25B866]">
                <MessageCircle className="h-5 w-5" />
                Hubungi Tim
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                Indonesia
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#DCD0B8] pt-7">
          <div className="flex flex-col gap-5 text-sm font-medium text-[#5F584B] lg:flex-row lg:items-center lg:justify-between">
            <p>© 2026 AGRI-EYE. All rights reserved.</p>
            <div className="flex flex-wrap gap-5 lg:justify-end">
              <a href="#" className="transition-colors hover:text-[#25B866]">Kebijakan Cookies</a>
              <a href="#" className="transition-colors hover:text-[#25B866]">Kebijakan Privasi</a>
              <a href="#" className="transition-colors hover:text-[#25B866]">Syarat Layanan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
