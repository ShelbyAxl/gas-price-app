import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main className="w-full pt-20">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
