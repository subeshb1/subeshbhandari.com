import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://subeshbhandari.com'),
  title: "Subesh Bhandari - Personal Blog",
  description: "Personal blog and portfolio of Subesh Bhandari, where I write about technology, share projects, and document my experiences.",
  keywords: ["blog", "technology", "portfolio", "web development", "Subesh Bhandari"],
  openGraph: {
    images: '/og-image.jpg',
    type: 'website',
    locale: 'en_US',
    siteName: 'Subesh Bhandari',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@subeshb1',
    images: '/og-image.jpg',
  },
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-41Y4F820C0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-41Y4F820C0');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
