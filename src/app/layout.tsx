import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";



const inter = Inter({
   variable: "--font-inter",
   subsets: ["latin"],
   weight: ["400", "500", "700"],
   display:"swap",
   style: "normal",
})

export const metadata: Metadata = {
  title: "Bernardowert - Portfolio",
  description: "portfolio - 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-primary-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
