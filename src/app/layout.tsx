import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { preLoadResources, rootMetadata } from './metadata';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin']
});

export const metadata = rootMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  preLoadResources();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main id="main-app">{children}</main>
          <Toaster closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
