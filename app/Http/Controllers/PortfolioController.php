<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        $data = [
            'nama' => 'Mahesa Tri Anugrah Putra',
            'pekerjaan' => 'Mahasiswa Teknik Rekayasa Perangkat Lunak',
            'kampus' => 'Politeknik Negeri Banyuwangi',
            'bio' => 'Saya berpengalaman mengerjakan proyek akademik dan mandiri menggunakan Flutter dan teknologi web. Saat ini fokus berkarier sebagai Software Developer dan siap berkembang di industri.',
            
            // --- DATA KONTAK (Baru Ditambahkan) ---
            'email' => 'mahesatrianugrahp@gmail.com',
            'github' => 'https://github.com/mahesatri',
            'instagram' => 'https://www.instagram.com/mahesatrianugrahp/', // Ganti dengan link LinkedIn asli
            'whatsapp' => '62895377105018', // Ganti dengan nomor WA asli (tanpa + atau 0 di depan, pakai 62)
            // --------------------------------------

            'skills' => [
                'Flutter (Mobile)', 
                'Laravel (Basic)', 
                'HTML & CSS', 
                'MySQL & Firebase', 
                'Git & GitHub'
            ],

            'projek' => [
                [
                    'judul' => 'Aplikasi Kasir Pintar', 
                    'kategori' => 'Mobile App (Flutter)',
                    'deskripsi' => 'Aplikasi kasir untuk transaksi penjualan, hitung total/kembalian otomatis, dan manajemen produk sederhana.'
                ],
                [
                    'judul' => 'Website Glory Ponsel', 
                    'kategori' => 'Web App',
                    'deskripsi' => 'Website manajemen toko ponsel dengan fitur CRUD data HP, riwayat transaksi, pembukuan, serta fitur trade-in.'
                ],
                [
                    'judul' => 'Sistem Rekomendasi HP', 
                    'kategori' => 'Web App',
                    'deskripsi' => 'Aplikasi web untuk membantu pengguna memilih handphone sesuai kriteria spesifikasi dan harga yang diinginkan.'
                ],
            ]
        ];

        return view('home', $data);
    }
}