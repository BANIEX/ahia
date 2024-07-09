import type { Metadata } from "next";
import { Inter, Montserrat, Inria_Sans, Public_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const inria_sans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria_sans",
});

const public_sans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600","700"],
  variable: "--font-public_sans",
});

export const metadata: Metadata = {
  title: "AHIA",
  description: "Shopping store for all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} ${public_sans.variable} ${inria_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
