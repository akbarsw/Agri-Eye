# Roadmap MVP — AGRI-EYE

## Fase 0 — Fondasi Produk

Tujuan fase ini adalah memastikan konsep produk jelas sebelum masuk ke implementasi kode.

Output:

- Mini PRD
- Arah UI/UX
- Alur pengguna utama
- Daftar fitur MVP
- Rancangan awal database

## Fase 1 — Setup Proyek Next.js

Tujuan fase ini adalah membuat fondasi teknis aplikasi.

Pekerjaan:

- Setup Next.js App Router dengan TypeScript
- Setup Tailwind CSS
- Setup struktur folder
- Setup komponen UI awal
- Setup environment variable
- Setup halaman landing page awal

Output:

- Aplikasi Next.js berjalan lokal
- Landing page awal AGRI-EYE
- Struktur proyek siap dikembangkan

## Fase 2 — Autentikasi dan Role Pengguna

Tujuan fase ini adalah membuat sistem pengguna berdasarkan peran.

Role:

- Petani
- Pembeli B2B
- Admin

Pekerjaan:

- Register
- Login
- Role selector
- Proteksi route berdasarkan role
- Redirect dashboard sesuai role

Output:

- Petani masuk ke dashboard petani
- Pembeli B2B masuk ke dashboard pembeli
- Admin masuk ke dashboard admin

## Fase 3 — Dashboard Petani dan Batch Panen

Tujuan fase ini adalah membuat petani dapat mencatat hasil panen.

Pekerjaan:

- Dashboard Petani
- Form tambah batch panen
- Daftar batch panen
- Detail batch panen
- Status batch: Draft, Menunggu Validasi, Disetujui, Ditolak

Data batch:

- komoditas,
- tanggal panen,
- jumlah,
- satuan,
- harga per satuan,
- lokasi asal,
- deskripsi,
- foto produk,
- status validasi.

## Fase 4 — Dashboard Admin dan Validasi Batch

Tujuan fase ini adalah membuat admin dapat mengontrol lapisan kepercayaan platform.

Pekerjaan:

- Dashboard Admin
- Daftar petani
- Daftar batch menunggu validasi
- Detail batch untuk review
- Tombol setujui, minta revisi, tolak
- Pemberian grade mutu A/B/C
- Aktivasi produk ke marketplace

Output:

- Batch yang disetujui dapat tampil di marketplace
- Batch memiliki status validasi dan grade mutu

## Fase 5 — QR Code dan Halaman Keterlacakan

Tujuan fase ini adalah membuat bukti digital produk.

Pekerjaan:

- Generate QR Code untuk batch yang disetujui
- Membuat URL publik `/trace/[batchId]`
- Halaman keterlacakan produk
- Timeline keterlacakan sederhana
- Disclaimer non-sertifikasi

Output:

- Setiap batch valid memiliki QR Code
- QR mengarah ke halaman publik keterlacakan

## Fase 6 — Marketplace B2B

Tujuan fase ini adalah membuat pembeli bisnis dapat melihat produk yang tersedia.

Pekerjaan:

- Halaman marketplace
- Product card
- Filter sederhana
- Halaman detail produk
- Tombol Ajukan Pesanan

Filter awal:

- komoditas,
- lokasi,
- grade mutu,
- stok tersedia,
- tanggal panen.

## Fase 7 — Alur Pesanan

Tujuan fase ini adalah membuat alur transaksi sederhana tanpa payment gateway otomatis.

Pekerjaan:

- Pembeli mengajukan pesanan
- Petani melihat pesanan masuk
- Admin mengonfirmasi status pesanan
- Status pesanan: Menunggu Konfirmasi, Dikonfirmasi, Diproses, Dikirim, Selesai, Dibatalkan

Output:

- Pembeli dapat request order
- Admin dapat mengatur status order
- Petani dapat melihat pesanan yang masuk

## Fase 8 — Polishing MVP

Tujuan fase ini adalah membuat demo terlihat layak untuk business plan dan presentasi.

Pekerjaan:

- Perapian UI landing page
- Empty state
- Loading state
- Status badge
- Validasi form
- Data dummy demo
- Responsif mobile dan desktop

Output:

- MVP siap untuk demo lomba
- Alur end-to-end dapat dipresentasikan

## Urutan Demo MVP

1. Petani login.
2. Petani input batch panen cabai merah.
3. Admin memvalidasi batch dan memberi Grade A.
4. Sistem membuat QR Code.
5. Produk tampil di marketplace B2B.
6. Pembeli B2B mengajukan pesanan.
7. Admin mengubah status pesanan.
8. Halaman QR menampilkan asal-usul dan riwayat produk.
