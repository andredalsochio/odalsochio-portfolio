import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'André Dalsochio — Desenvolvedor',
  description: 'O espaço de André Dalsochio para compartilhar projetos, ideias e código. Conheça seu portfólio e conecte-se pelo GitHub e LinkedIn.',
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="pt-BR" className="dark"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
