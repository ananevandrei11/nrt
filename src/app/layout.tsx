import type { Metadata } from 'next';
import clsx from 'clsx';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-gray-950')}>
        <header>
          <nav className="flex gap-2 flex-wrap">
            <Link
              href="/slider-css"
              className="text-lg md:text-2xl text-lime-600 hover:text-lime-700 hover:underline pr-2 border-r-2 border-solid border-lime-600"
            >
              Slider CSS
            </Link>
            <Link
              href="/youtube-iframe"
              className="text-lg md:text-2xl text-lime-600 hover:text-lime-700 hover:underline pr-2 border-r-2 border-solid border-lime-600"
            >
              Youtube Iframe
            </Link>
            <Link
              href="/youtube-plugin"
              className="text-lg md:text-2xl text-lime-600 hover:text-lime-700 hover:underline pr-2 border-r-2 border-solid border-lime-600"
            >
              Youtube Plugin
            </Link>
            <Link href="/test" className="text-lg md:text-2xl text-lime-600 hover:text-lime-700 hover:underline">
              Test
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
