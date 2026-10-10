# VEXOR

VEXOR adalah proyek toko elektronik yang dibangun dengan Next.js dan TypeScript. Pengunjung bisa mencari produk, melihat detailnya, menambahkan barang ke keranjang, dan masuk ke akun melalui Supabase.

Proyek ini masih dalam pengembangan. Katalog memakai data lokal dan halaman checkout masih berupa demo, jadi alur belanja belum sampai ke pembayaran atau pembuatan pesanan.

## Fitur

- Beranda dengan daftar produk, kategori, banner promosi, dan testimoni.
- Pencarian berdasarkan nama produk lewat kolom di header. Hasilnya ditampilkan di halaman shop.
- Halaman detail untuk tiap produk, termasuk gambar, harga, pilihan ukuran, dan kontrol jumlah barang.
- Penambahan produk ke keranjang menggunakan React Context dan `sessionStorage`.
- Login email/password dan Google melalui Supabase, halaman profil, serta logout.
- Tema terang dan gelap, dengan tombol ganti tema pada header desktop.
- Layout yang menyesuaikan layar desktop dan ponsel.

Filter kategori beranda sudah berjalan untuk All, Audio, Laptops, dan Wearables. Data contoh Wearables belum tersedia. Daftar produk juga bisa diakses sebagai JSON melalui `GET /api/products`.

## Stack

Next.js 16.3.0 dengan App Router, React 19.2.8, TypeScript, dan Tailwind CSS 4. Komponen UI menggunakan shadcn/ui dan Radix UI; autentikasi menggunakan Supabase JS serta `@supabase/ssr`.

Pengaturan tema memakai `next-themes`. React Compiler sudah diaktifkan di `next.config.ts`. Daftar dependensi lengkap ada di [`package.json`](./package.json).

## Instalasi

Siapkan Node.js 20.9 atau lebih baru, npm, dan proyek Supabase untuk autentikasi.

### 1. Pasang dependensi

Setelah clone atau mengunduh repositori, masuk ke folder proyek:

```bash
cd VEXORNSL
npm ci
```

`npm ci` mengikuti versi di `package-lock.json`. Jika sedang menambah atau mengganti dependensi, gunakan `npm install` untuk memperbarui lockfile.

### 2. Isi konfigurasi Supabase

Buat `.env.local` di folder utama, sejajar dengan `package.json`. Jika sudah ada, cukup lengkapi nilai yang diperlukan.

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_GANTI_DENGAN_KEY_PROYEK
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_GANTI_DENGAN_KEY_PROYEK
```

Ganti URL dan key di atas dengan milik proyek Supabase. Kedua variabel key bisa diisi dengan publishable key yang sama. Saat ini client di `lib/supabase/client.ts` membaca `ANON_KEY`, sementara client server membaca `PUBLISHABLE_KEY`, sehingga keduanya perlu diisi.

Gunakan key publik untuk variabel `NEXT_PUBLIC_*`; secret key dan `service_role` tidak digunakan di sini. Berkas `.env.local` sudah masuk `.gitignore`. Penjelasan jenis key ada di [dokumentasi Supabase](https://supabase.com/docs/guides/getting-started/api-keys).

### 3. Atur URL autentikasi

Di konfigurasi Supabase Auth, isi Site URL dengan `http://localhost:3000`. Tambahkan dua alamat berikut ke Redirect URLs:

```text
http://localhost:3000/login
http://localhost:3000/auth/callback
```

Alamat `/login` dipakai setelah verifikasi email. Login Google kembali ke aplikasi melalui `/auth/callback`.

Jika ingin mencoba login Google, aktifkan provider Google di Supabase dan isi kredensial OAuth dari Google Cloud. Redirect URI di Google Cloud memakai callback Supabase, biasanya `https://PROJECT_REF.supabase.co/auth/v1/callback`. Langkah lengkapnya tersedia di [panduan login Google](https://supabase.com/docs/guides/auth/social-login/auth-google).

Katalog belum memakai database. Produk disimpan di `lib/products.ts`, jadi tidak ada migrasi atau tabel produk yang perlu disiapkan.

## Menjalankan aplikasi

Jalankan server pengembangan:

```bash
npm run dev
```

Buka [localhost:3000](http://localhost:3000). Perubahan pada halaman atau komponen akan tampil otomatis selama server berjalan. Untuk menghentikannya, tekan `Ctrl+C`.

Kalau port 3000 sedang digunakan:

```bash
npm run dev -- --port 3001
```

Gunakan `http://localhost:3001` dan sesuaikan URL autentikasi di Supabase. Mulai ulang server setiap kali mengubah `.env.local`.

Skrip `dev` memakai host `0.0.0.0`. Untuk mencoba tampilan di ponsel pada jaringan yang sama, buka alamat IP komputer dengan port server, selama firewall mengizinkan.

## Lint dan build

Periksa kode terlebih dahulu:

```bash
npm run lint
```

Untuk menjalankan versi produksi secara lokal, lakukan build lalu mulai server setelah build berhasil:

```bash
npm run build
npm run start
```

Next.js 16 tidak menjalankan lint saat build, jadi keduanya perlu dijalankan terpisah. Isi `.env.local` sebelum build karena nilai `NEXT_PUBLIC_*` disertakan ke bundle browser.

Build juga membutuhkan akses internet untuk mengunduh font Geist melalui `next/font`. Jika unduhan font gagal, periksa koneksi lingkungan build.

## Halaman yang tersedia

| Alamat | Isi |
| --- | --- |
| `/` dan `/homepage` | Beranda; tautan Home di header menuju `/homepage` |
| `/shop` | Katalog; tambahkan `?search=earpondes` untuk mencoba pencarian |
| `/productdescriptive/1` | Detail produk dengan ID 1 |
| `/cartdrawer` | Keranjang belanja |
| `/checkoutshipping` | Demo formulir pengiriman dan checkout |
| `/login` dan `/register` | Login dan formulir pendaftaran |
| `/profile` | Profil dan logout; pengguna tanpa sesi diarahkan ke login oleh client |
| `/auth/callback` | Callback login Google |
| `/api/products` | Data produk dalam format JSON melalui `GET` |

## Struktur proyek

```text
app/
  (auth)/              Halaman login dan registrasi
  api/products/        Endpoint katalog
  auth/callback/       Callback autentikasi
  cartdrawer/          Keranjang
  checkoutshipping/    Checkout
  component/           Header dan footer
  homepage/            Bagian-bagian beranda
  productdescriptive/  Detail produk dan rute [id]
  profile/             Profil pengguna
  shop/                Katalog dan pencarian
  layout.tsx           Layout utama dan provider
  page.tsx             Beranda utama
  globals.css          Styling global
components/ui/         Komponen UI bersama
lib/                   Data produk, context keranjang, client Supabase, dan utilitas
public/                Gambar dan aset statis
```

Untuk menambah produk contoh, edit `lib/products.ts`. Simpan gambar di `public/` dan gunakan path seperti `/images/products/contoh.png` pada data produk.

## Yang masih perlu diselesaikan

Beberapa bagian sudah tampil di UI, tetapi logikanya belum lengkap:

- Checkout belum memproses pembayaran atau menyimpan pesanan. Harga pada ringkasan, pajak, ongkir, dan promo masih berupa angka contoh.
- Filter harga, rating, stok, pengurutan, dan pagination di shop belum memengaruhi daftar produk. Yang sudah bekerja adalah pencarian nama dan filter kategori di beranda.
- Tombol hapus dan kontrol jumlah di keranjang belum memperbarui state bersama. Subtotal belum dihitung dari isi keranjang; penambahan barang masih dihitung per klik, dan pilihan warna belum tersambung ke state varian.
- Input konfirmasi password pada formulir registrasi belum terhubung ke `confirmPassword`. Ini membuat pendaftaran berhenti dengan pesan “Password tidak sama”.
- Helper pembaruan sesi di `lib/middleware.ts` belum dipasang sebagai entry point Proxy/Middleware.

Rating, stok, testimoni, dan rekomendasi produk juga masih menggunakan data contoh.

Jika Supabase gagal terhubung, periksa ketiga variabel di `.env.local` lalu restart server. Untuk masalah redirect login Google, periksa provider, kredensial OAuth, serta konfigurasi URL di Supabase dan Google Cloud.

## Dokumentasi

- [Next.js App Router](https://nextjs.org/docs/app)
- [Supabase Auth untuk Next.js](https://supabase.com/docs/guides/auth/quickstarts/nextjs)
- [Pengaturan Redirect URLs Supabase](https://supabase.com/docs/guides/auth/redirect-urls)

Panduan Next.js untuk versi yang terpasang tersedia di `node_modules/next/dist/docs/` setelah instalasi dependensi.
 