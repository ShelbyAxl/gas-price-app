import Link from "next/link";
import Image from "next/image";
import Icon from "@/images/gas-price.png";
import { getServerSession } from "next-auth";
import SignOut from "@/components/SignOut";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="bg-[#0078FE] p-3">
      <div className="flex justify-between container mx-auto">
        <Link href={"/"} className="flex">
          <Image src={Icon} width={70} height={70} priority={true} alt="" />
          <h1 className="py-4 px-3 font-bold text-3xl">GasPrice</h1>
        </Link>
        <ul className="flex gap-x-4">
          {session?.user ? (
            <>
              <li className="px-2 py-5">
                <Link href={"/dashboard"}> Dashboard </Link>
              </li>
              <p className="py-5">|</p>
              <li className="px-2 py-5">
                <SignOut>SignOut</SignOut>
              </li>
            </>
          ) : (
            <>
              <li className="px-2 py-5">
                <Link href={"/auth/login"}> Sign in </Link>
              </li>
              <p className="py-5">|</p>
              <li className="px-2 py-5">
                <Link href={"/auth/register"}> Sign up </Link>
              </li>
            </>
          )}
          <p className="py-5">|</p>
          <li className="px-2 py-5">
            <Link href={"/about"}> About us </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
