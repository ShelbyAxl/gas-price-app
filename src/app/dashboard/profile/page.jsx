import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/prisma";

async function loadStation() {
    const session = await getServerSession(authOptions);
    const userFound = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    return userFound;
}

async function ProfilePage() {
    const user = await loadStation()
  return (
    <div className="flex flex-col w-7/12 p-8">
        <label htmlFor="username">Username:</label>
        <input className="bg-slate-800 px-4 py-3 rounded-md" type="text" disabled value={ user.username }/>
        <label htmlFor="username">Email:</label>
        <input className="bg-slate-800 px-4 py-3 rounded-md" type="text" disabled value={ user.email }/>
        <label htmlFor="username">Phone:</label>
        <input className="bg-slate-800 px-4 py-3 rounded-md" type="text" disabled value={ user.phone }/>
    </div>
  )
}

export default ProfilePage;