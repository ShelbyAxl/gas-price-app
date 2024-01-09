import { ConnectionDB } from "@/libs/mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/libs/prisma";
import Station from "@/models/station";
import StationOwner from "@/components/StationOwner";
import Add from "@/images/add.png";

async function loadStation() {
  const session = await getServerSession(authOptions);
  const userFound = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  ConnectionDB();
  const stations = await Station.find().where("ownerId").equals(userFound?.id);
  return stations;
}

async function DashboardPage() {
  const stations = await loadStation();

  return (
    <div className="flex flex-col lg:flex-row justify-between h-screen">
      <div className="flex flex-col lg:w-2/12 gap-y-1 items-center justify-center">
        <Link href="/dashboard/station/new">
          <Image src={Add} width={50} height={50} alt="" />
        </Link>
        <p>Add station</p>
      </div>
      {stations.length != 0 ? (
        <div className="px-10 py-3 gap-y-2 lg:w-11/12 overflow-y-scroll overflow-x-hidden h-[24rem]">
          {stations.map((station) => (
            <StationOwner station={station} key={station._id} />
          ))}
        </div>
      ) : (
        <div className="container flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            Aún no tienes estaciones agregadas!
          </h1>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
