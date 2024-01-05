import Link from "next/link";
import Image from "next/image";
import Edit from "@/images/edit.png";

function StationOwner({ station }) {
  return (
    <div className="py-3 px-4 flex bg-slate-800 rounded-md text-white overflow-hidden justify-between mb-2">
      <div className="flex flex-col">
        <h3 className="font-bold text-lg"> {station.stationName} </h3>
        <div className="flex gap-10">
          <h1 className=" text-4xl py-3 text-green-600">
            $ {station.gasPriceGreen}
          </h1>
          <h1 className=" text-4xl py-3 text-red-600">
            $ {station.gasPriceRed}
          </h1>
        </div>
        <p> {station.address} </p>
      </div>
      <div className="flex flex-wrap content-center gap-x-3 px-3">
        <Link
          href={`dashboard/station/${station._id}`}
          className="p-2 rounded-md hover:bg-slate-700 transition-all"
        >
          <Image
            src={Edit}
            width={50}
            height={50}
            alt="Edit station"
            priority={true}
          />
        </Link>
      </div>
    </div>
  );
}

export default StationOwner;
