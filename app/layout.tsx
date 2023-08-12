import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shant Melikyan Portfolio",
  description: "Hi, my name is Shant and I am a Software Developer.",
  appleWebApp: {
    title: "Shant Melikyan Portfolio",
    statusBarStyle: "black-translucent",
  },
  icons: {
    apple: [
      {
        url: "../public/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "../public/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    other: {
      rel: "apple-touch-icon",
      url: "../public/apple-touch-icon.png",
    },
  },
  applicationName: "Shant Melikyan Portfolio",
  keywords: ["Software Developer", "Web Developer"],
  authors: [{ name: "Shant", url: "https://shantmelikyan.com/" }],
  creator: "Shant",
  metadataBase: new URL('https://shantmelikyan.com'),
  alternates: {
    canonical: "https://shantmelikyan.com/",
  },
  category: "technology",
  openGraph: {
    title: "Shant Melikyan Portfolio",
    description: "Hi, my name is Shant and I am a Software Developer.",
    url: "https://shantmelikyan.com/",
    siteName: "Portfolio",
    images: [
      {
        url: "https://i.imgur.com/IIP6UzK.jpeg",
        width: 800,
        height: 600,
        alt: "Shant Melikyan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shant Melikyan Portfolio",
    description: "Hi, my name is Shant and I am a Software Developer.",
    creator: "Shant",
    images: ["https://i.imgur.com/IIP6UzK.jpeg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
