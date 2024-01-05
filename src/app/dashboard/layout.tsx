import type { Metadata } from "next";
import SignOut from "@/components/SignOut";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const metadata: Metadata = {
  title: "GasPrice | Home",
  description: "App con los ultimos precios de la gasolina",
};

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="container">
      <h1 className="font-bold text-4xl my-2">Dashboard</h1>
      <div className="flex  bg-zinc-950 rounded-lg overflow-hidden py-8 min-w-[calc(50rem)] h-[calc(100vh-13rem)] max-h-[calc(40rem)]">
        <section className="flex flex-col w-3/12 gap-4 py-5 min-w-64 border-r-2 border-slate-600">.
          <h1 className="py-4 px-8 text-3xl"> { " " } </h1>
          <ul>
            <Link href="/dashboard">
              <li className="py-4 px-4 hover:bg-zinc-900 transition-all">
                Stations
              </li>
            </Link>
            <Link href="/dashboard/profile">
              <li className="py-4 px-4 hover:bg-zinc-900 transition-all">
                Profile
              </li>
            </Link>
            <SignOut clases="w-full">
              <li className="py-4 px-4 hover:bg-zinc-900 text-left transition-all">Sign Out</li>
            </SignOut>
          </ul>
        </section>
        <div className="flex flex-col w-9/12 p-5 gap-4">{children}</div>
      </div>
    </div>
  );
}
