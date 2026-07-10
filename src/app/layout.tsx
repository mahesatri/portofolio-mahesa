import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahesa Tri Anugrah Putra | Full-Stack Developer Portfolio",
  description: "Portfolio Mahesa Tri Anugrah Putra - Mahasiswa TRPL Politeknik Negeri Banyuwangi. Full-Stack Developer fokus pada Laravel, Next.js, Flutter, dan SQL.",
  keywords: ["Mahesa Tri Anugrah Putra", "Full-Stack Developer", "Banyuwangi", "TRPL", "Politeknik Negeri Banyuwangi", "Laravel", "Next.js", "Flutter"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#0a0f1d] dark:text-slate-100 font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

