# LAUNCH-GUIDE.md — Panduan Launch FunBucks ($FUNB) di pump.fun

Panduan ini untuk pemilik akun (@tuyul-dua): agent TIDAK BISA launch coin — tanda tangan wallet adalah wewenang pemilik, mutlak. Ikuti langkah-langkah di bawah persis, dari browser yang memegang wallet Solana kamu. Deadline bounty: **Selasa 17 Nov 2026 13:00 WIB**. Jendela launch: dibuka **15 Nov 2026 06:00 UTC** — coin yang dibuat sebelum itu atau sesudah deadline DITOLAK.

## 1. Syarat — cek dulu sebelum mulai

- Wallet Solana kamu (**4k8b…E3ht**) SUDAH terhubung (linked) ke akun make.fun **@tuyul-dua**, dan terhubung di pump.fun.
- Saldo minimal **~0,05 SOL** (biaya create ~0,02 SOL + first buy kecil + buffer).
- Sisakan **~0,0035 SOL** di wallet yang sama untuk klaim hadiah bila menang (biaya klaim escrow).
- File logo: `funbucks-logo.png` di repo ini (atau unduh dari laporan Filos).

## 2. Buka pump.fun dan hubungkan wallet

1. Buka **pump.fun** di browser pemegang wallet (browser yang sama dengan Phantom).
2. Klik **Connect Wallet** → pilih wallet yang sama (**Phantom**, alamat 4k8b…E3ht).

## 3. Buat coin

1. Klik **"Create Coin"**.
2. Upload logo: file **`funbucks-logo.png`** (robot koin emas ceria + tas uang hijau, background ungu).
3. Isi kolom-kolom ini **persis** (copy-paste):

   | Kolom | Isi persis |
   |---|---|
   | Name | `FunBucks` |
   | Ticker | `FUNB` |
   | Description | (teks di bawah — copy-paste seluruhnya) |
   | Website | `https://make.fun/bounty/makefun-coin-promo-01` |
   | X | *(kosongkan)* |
   | Telegram | *(kosongkan)* |

   **Description (copy-paste persis, jangan diubah satu karakter pun):**

   ```
   FUNB is the house currency of the agent economy. On make.fun, AI agents build real software and win real cash bounties — this coin was launched for make.fun's own coin bounty to bring that game to pump.fun. The little coin-bot on the logo codes, ships, and gets paid — now it has its own coin. One arcade, one coin: agents ship code, traders ride the fun. https://make.fun/bounty/makefun-coin-promo-01
   ```

## 4. Initial buy (opsional)

- Initial buy kecil terserah kamu; **boleh 0** — bukan syarat bounty.

## 5. Create dan approve

1. Klik **Create Coin**.
2. **Approve transaksi** di wallet (Phantom).
3. **TUNGGU konfirmasi** sampai halaman coin muncul.

## 6. Catat DUA nilai ini — jangan sampai tertukar

Dari halaman coin / Solscan, catat:

- **(a) Mint address coin** — alamat token (base58, 32–44 karakter).
- **(b) Signature transaksi create** — signature transaksi yang MEMBUAT coin (base58, 64–88 karakter).

⚠️ **JANGAN sampai tertukar dengan signature transaksi buy** — yang dipakai adalah signature transaksi create-nya, bukan buy.

## 7. Kirim kedua nilai itu ke Filos

Kirim **mint address** dan **create signature** ke Filos. Setelah itu Filos yang mengerjakan sisanya:

1. Mengisi `LAUNCH.json` di repo dengan kedua nilai asli itu.
2. Menjalankan `main.ts` dan verifikasi.
3. Menjalankan check resmi kit + membuat bundle transkrip.
4. Melaporkan format-tetap untuk submit (kamu **Sign and submit** di browser pemegang wallet).

## 8. Peringatan

- Coin HANYA valid bila dibuat **dalam jendela** (dibuka 15 Nov 2026 06:00 UTC, tutup 17 Nov 2026 13:00 WIB) **DAN dari wallet yang terhubung ke akun make.fun** — jangan launch dari wallet lain.
- Jangan pernah membagikan seed phrase / secret key wallet ke siapa pun, termasuk ke Filos.
- Coin tetap milikmu: make.fun tidak mengambil bagian apa pun dari coin ini.
