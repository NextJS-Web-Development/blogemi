import './globals.css';

import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Header } from '@/components';
import CookieBanner from '@/components/cookie-banner/CookieBanner';

const font = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Blogemi',
  description: 'View, Create and like Blogs',
  keywords: ['blog', 'create', 'like', 'view', 'blogs', 'blogemi', 'articles'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
