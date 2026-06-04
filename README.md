# AGRI-EYE

**AGRI-EYE** adalah platform **keterlacakan pangan (food traceability)** dan **marketplace B2B hasil pertanian** yang membantu petani lokal mencatat data hasil panen, membuat QR Code keterlacakan produk, dan menghubungkan hasil panen tersebut dengan pembeli bisnis.

## Visi Produk

AGRI-EYE membantu petani lokal mengubah hasil panen dari komoditas biasa menjadi produk berbasis data yang lebih transparan, terpercaya, dan siap dipasarkan ke pembeli B2B.

## Konsep Utama

AGRI-EYE menggabungkan tiga fungsi inti:

1. **Pencatatan Data Panen**  
   Petani memasukkan data hasil panen seperti jenis komoditas, tanggal panen, jumlah, lokasi asal, foto produk, dan harga harapan.

2. **QR Code Keterlacakan Produk**  
   Setiap batch panen yang disetujui akan mendapatkan QR Code yang mengarah ke halaman publik berisi informasi asal-usul produk.

3. **Marketplace B2B**  
   Batch panen yang sudah divalidasi dapat ditampilkan ke pembeli B2B seperti restoran, hotel, katering, UMKM pangan, toko sayur modern, dan distributor.

## Peran Pengguna

- **Petani**: membuat batch panen, mengunggah data produk, mendapatkan QR Code, dan menerima pesanan.
- **Pembeli B2B**: mencari produk pertanian, melihat data keterlacakan, dan mengajukan pesanan.
- **Admin AGRI-EYE**: memverifikasi petani, memvalidasi batch panen, memberi grade mutu, dan mengelola pesanan.

## Fitur MVP

- Autentikasi multi-role: Petani, Pembeli B2B, dan Admin
- Dashboard Petani
- Form input batch panen
- Upload foto hasil panen
- Validasi batch oleh Admin
- Pemberian grade mutu produk
- Generate QR Code keterlacakan
- Halaman publik keterlacakan produk
- Marketplace B2B sederhana
- Pengajuan pesanan oleh Pembeli B2B
- Manajemen status pesanan oleh Admin

## Rencana Tech Stack

- **Framework**: Next.js App Router
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS
- **Komponen UI**: shadcn/ui
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Auth**: Auth.js / NextAuth atau Supabase Auth
- **Storage Foto**: Supabase Storage atau Cloudinary
- **QR Code**: qrcode
- **Deployment**: Vercel

## Struktur Repo

```txt
app/                  Route utama Next.js
components/           Komponen UI reusable
docs/                 Dokumen produk dan perencanaan
lib/                  Utility dan shared logic
prisma/               Schema database
```

## Status Saat Ini

Repo ini berada pada tahap perencanaan produk dan persiapan MVP awal.
