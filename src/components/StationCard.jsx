import Link from "next/link";

function StationCard({ station }) {
  return (
    <Link href="/">
      <div
        className="bg-slate-800 rounded-md hover:cursor-pointer hover:bg-slate-700 transition-all text-white py-3 px-4 overflow-hidden"
      >
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
    </Link>
  );
}

export default StationCard;
