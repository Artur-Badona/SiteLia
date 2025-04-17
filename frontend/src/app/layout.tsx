import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";

const lexend_300 = Lexend({
  subsets: ['latin'],
  weight: ['300'],
  variable: "--font-lexend-300",
});

const lexend_400 = Lexend({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-lexend-400",
});

const lexend_500 = Lexend({
  subsets: ['latin'],
  weight: ['500'],
  variable: "--font-lexend-500",
});

const lexend_600 = Lexend({
  subsets: ['latin'],
  weight: ['600'],
  variable: "--font-lexend-600",
});

const lexend_700 = Lexend({
  subsets: ['latin'],
  weight: ['700'],
  variable: "--font-lexend-700",
});

const lexend_800 = Lexend({
  subsets: ['latin'],
  weight: ['800'],
  variable: "--font-lexend-800",
});

const lexend_900 = Lexend({
  subsets: ['latin'],
  weight: ['900'],
  variable: "--font-lexend-900",
});

export const metadata: Metadata = {
  title: "LIA²",
  description: "Laboratório de Inteligência Artificial Aplicada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${lexend_300.variable}
        ${lexend_400.variable} ${lexend_500.variable} ${lexend_600.variable} 
        ${lexend_700.variable} ${lexend_800.variable} ${lexend_900.variable}
      `}>
        {children}
      </body>
    </html>
  );
}
