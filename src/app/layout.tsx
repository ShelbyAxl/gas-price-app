import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "GasPrice | Home",
  description: "App con los ultimos precios de la gasolina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main className="container mx-auto py-3 px-7 mt-4">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
