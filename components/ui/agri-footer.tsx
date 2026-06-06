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
      className="w-fit text-sm font-medium text-[#5F584B] underline decoration-[#BEB39D] underline-offset-4 transition-colors duration-200 hover:text-[#25B866] lg:text-base"
    >
      {children}
    </a>
  );
}

export default function AgriFooter() {
  return (
    <footer className="border-t border-[#DCD0B8] bg-[#F7F4ED] px-6 py-7 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_0.9fr_0.75fr] lg:gap-8">
          <div>
            <a href="#top" className="inline-flex items-center">
              <AgriEyeLogo compact />
            </a>
            <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-[#5F584B] lg:text-base lg:leading-7">
              Platform pintar penyedia produk pertanian yang jelas asalnya, terverifikasi, dan siap terhubung ke pembeli B2B.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#4E473B]">Produk</h3>
            <div className="mt-3 grid gap-3">
              {products.map((item) => (
                <FooterLink key={item.label} href={item.href}>{item.label}</FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#4E473B]">Solusi</h3>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[#5F584B]">
              Untuk yang <span className="text-[#25B866]">menanam</span>
            </p>
            <div className="mt-2 grid gap-3">
              <FooterLink href="/farmer">Petani Lokal</FooterLink>
              <FooterLink href="/farmer#sertifikat-saya">Mitra Terverifikasi</FooterLink>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wide text-[#5F584B]">
              Untuk yang <span className="text-[#25B866]">membeli</span>
            </p>
            <div className="mt-2 grid gap-3">
              {solutions.slice(1, 3).map((item) => (
                <FooterLink key={item.label} href={item.href}>{item.label}</FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#4E473B]">Perusahaan</h3>
            <div className="mt-3 grid gap-3">
              {company.map((item) => (
                <FooterLink key={item.label} href={item.href}>{item.label}</FooterLink>
              ))}
            </div>

            <div className="mt-5 grid gap-3 text-sm font-medium text-[#5F584B] lg:text-base">
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

        <div className="mt-8 border-t border-[#DCD0B8] pt-5">
          <div className="flex flex-col gap-4 text-sm font-medium text-[#5F584B] lg:flex-row lg:items-center lg:justify-between">
            <p>© 2026 AGRI-EYE. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 lg:justify-end">
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
