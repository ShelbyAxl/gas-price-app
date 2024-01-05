import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GasPrice | Station",
  description: "App con los ultimos precios de la gasolina",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
