import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { Red_Rose } from 'next/font/google';

import { siteConfig } from '@/config/site';
import { Providers } from './providers';
import { Header } from '@/components/ui/header';
import Footer from '@/components/ui/footer';

// Import and configure the Red Rose font
const redRose = Red_Rose({
  subsets: ['latin'], // Choose the subsets you need
  weight: ['400', '500', '700'], // Select the required weights
  variable: '--font-red-rose', // Optional: assign a custom CSS variable name
});

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
    <html suppressHydrationWarning lang="en" className={redRose.variable}>
      <head />
      <body className={clsx(redRose.className)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div>
            <div className="bg-[#205CD4]">
              <Header />
            </div>
            <main>{children}</main>
            <div>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
