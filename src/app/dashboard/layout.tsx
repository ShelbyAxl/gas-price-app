import type { Metadata } from "next";
import SignOut from "@/components/SignOut";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GasPrice | Dashboard",
  description: "App con los ultimos precios de la gasolina",
};

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="my-6 mx-4 lg:w-[calc(100vw-2rem)] w-[calc(100vw-2rem)]">
      <div className="flex bg-zinc-950 rounded-lg overflow-hidden py-8 h-[calc(100vh-9rem)] max-h-[calc(40rem)]">
        <section className="flex flex-col w-[5rem] lg:w-[20rem] justify-center lg:justify-normal gap-4 py-5 border-r-2 border-slate-600"> 
          <h1 className="py-4 px-8 text-4xl text-center lg:block hidden"> Dashboard </h1>
          <ul className="py-10 lg:py-0">
            <Link href="/dashboard">
              <li className="flex py-4 px-6 gap-x-6 hover:bg-zinc-900 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="28" fill="currentColor"><path d="M14 17H6v1.5A1.5 1.5 0 0 1 4.5 20h-1A1.5 1.5 0 0 1 2 18.5v-1.67A3.001 3.001 0 0 1 0 14v-3c0-.62.188-1.196.51-1.674l1.086-6.8A3 3 0 0 1 4.56 0h10.88a3 3 0 0 1 2.96 2.527l1.083 6.79c.326.48.516 1.06.516 1.683v3a3.001 3.001 0 0 1-2 2.83v1.67a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V17zM3 15h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1zm14.25-6.99l-.824-5.168A1 1 0 0 0 15.44 2H4.559a1 1 0 0 0-.988.842l-.825 5.169A3.04 3.04 0 0 1 3 8h14c.084 0 .168.003.25.01zM15.5 12a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm0 2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-11-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm0 2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.704-10.906a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"></path></svg>
                 <p className="lg:block hidden">Stations</p>
              </li>
            </Link>
            <Link href="/dashboard/profile">
              <li className="flex py-4 px-6 gap-x-6 hover:bg-zinc-900 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="28" fill="currentColor"><path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm1.229 16H4a2 2 0 0 1-.813-.172 5.58 5.58 0 0 1 3.347-3.758 1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 5.229 18zm9.512 0a3.658 3.658 0 0 0-2.097-2.066 1 1 0 1 1 .712-1.868 5.659 5.659 0 0 1 3.437 3.77A1.993 1.993 0 0 1 16 18h-1.26zM10 4a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2z"></path></svg>
               <p  className="lg:block hidden">
                Profile
               </p>
              </li>
            </Link>
            <SignOut clases="w-full">
              <li className="flex py-4 px-6 gap-x-6 hover:bg-zinc-900 text-left transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -3 24 24" width="28" fill="currentColor"><path d="M3.414 7.828h5.642a1 1 0 1 1 0 2H3.414l1.122 1.122a1 1 0 1 1-1.415 1.414L.293 9.536a.997.997 0 0 1 0-1.415L3.12 5.293a1 1 0 0 1 1.415 1.414L3.414 7.828zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z"></path></svg>
              <p  className="lg:block hidden">
                Sign Out
              </p>
                </li>
            </SignOut>
          </ul>
        </section>
        <div className="flex flex-col w-10/12 p-5 gap-4">{children}</div>
      </div>
    </div>
  );
}
