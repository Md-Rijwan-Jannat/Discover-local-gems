import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';

import { siteConfig } from '@/config/site';
import { Header } from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={'red-rose-light'}>
      <head />
      <body>
        <div>
          <div className="bg-[#205CD4]">
            <Header />
          </div>
          <main>{children}</main>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
