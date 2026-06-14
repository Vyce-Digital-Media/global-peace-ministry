import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyDonate from '@/components/ui/StickyDonate';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Global Peace Ministry',
  description: 'Global Peace Is Possible. A movement of faith uniting locally to spread peace globally.',
  icons: {
    icon: '/GPC Logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow flex-col">{children}</main>
        <StickyDonate />
        <Footer />
      </body>
    </html>
  );
}
