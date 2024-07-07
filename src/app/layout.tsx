import type { Metadata } from "next";
import { Inter, Montserrat, Inria_Sans } from "next/font/google";
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
      <body className={`${inter.variable} ${montserrat.variable} ${inria_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
