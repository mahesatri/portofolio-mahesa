<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio {{ $nama }}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800 font-sans">
    <img src="{{ asset('img/profil.jpg') }}" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover">
    <div class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ $nama }}</h1>
        <p class="text-xl md:text-2xl font-light mb-2">{{ $pekerjaan }}</p>
        <p class="text-sm opacity-80">{{ $kampus }}</p>
        
        <div class="mt-8">
           <a href="{{ $link_cv }}" target="_blank" class="bg-white text-blue-700 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition mx-2 flex items-center inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                CV Saya
            </a>

            <a href="{{ $github }}" target="_blank" class="border border-white text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-blue-700 transition mx-2">
                GitHub Saya
            </a>
        </div>
    </div>

    <div class="max-w-5xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block">Tentang Saya</h2>
            <p class="text-lg leading-relaxed text-gray-600">
                {{ $bio }}
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block">Keahlian</h2>
            <div class="flex flex-wrap gap-2">
                @foreach($skills as $skill)
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {{ $skill }}
                </span>
                @endforeach
            </div>
        </div>
    </div>

    <div class="bg-gray-100 py-12 px-6">
        <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-10 text-gray-800">Portofolio Proyek</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                @foreach($projek as $item)
                <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                    <span class="text-xs font-bold text-blue-600 uppercase tracking-wide">{{ $item['kategori'] }}</span>
                    <h3 class="text-xl font-bold mb-3 mt-1">{{ $item['judul'] }}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">{{ $item['deskripsi'] }}</p>
                </div>
                @endforeach
            </div>
        </div>
    </div>

   <div class="bg-white py-16 px-6">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-800 mb-2">Mari Terhubung</h2>
            <p class="text-gray-600 mb-10">Punya tawaran kerjasama atau ingin berdiskusi? Hubungi saya melalui:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <a href="mailto:{{ $email }}" class="group block p-6 border rounded-xl hover:border-blue-500 hover:bg-blue-50 transition cursor-pointer">
                    <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-lg text-gray-800">Email</h3>
                    <p class="text-sm text-gray-500 mt-1">{{ $email }}</p>
                </a>

                <a href="{{ $instagram }}" target="_blank" class="group block p-6 border rounded-xl hover:border-pink-500 hover:bg-pink-50 transition cursor-pointer">
                    <div class="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600 group-hover:text-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </div>
                    <h3 class="font-bold text-lg text-gray-800">Instagram</h3>
                    <p class="text-sm text-gray-500 mt-1">@mahesatrianugrahp</p>
                </a>

                <a href="https://wa.me/{{ $whatsapp }}" target="_blank" class="group block p-6 border rounded-xl hover:border-green-500 hover:bg-green-50 transition cursor-pointer">
                    <div class="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-lg text-gray-800">WhatsApp</h3>
                    <p class="text-sm text-gray-500 mt-1">Chat Cepat</p>
                </a>

            </div>
        </div>
    </div>

    <footer class="bg-gray-800 text-gray-400 text-center py-6 text-sm">
        &copy; 2024 {{ $nama }}. Dibuat dengan Laravel & Tailwind CSS.
    </footer>

</body>
</html>

</body>
</html>