import type { Metadata } from "next";
import Station from "@/models/station";
import { ConnectionDB } from "@/libs/mongoose";
import StationCard from "@/components/StationCard";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "GasPrice | Home",
  description: "App con los ultimos precios de la gasolina",
};

async function loadStation() {
  ConnectionDB();
  const stations = await Station.find();
  const data = stations.map((station) => {
    return {
      _id: station._id.toString(),
      stationName: station.stationName,
      ownerId: station.ownerId,
      address: station.address,
      gasPriceGreen: station.gasPriceGreen,
      gasPriceRed: station.gasPriceRed
    };
  });
  return data;
}

async function HomePage() {
  const stations = await loadStation();
  return (
    <div className="container mx-auto py-3 px-7 mt-4">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {stations.map((station, index) => (
            <StationCard
              station={station}
              key={station._id}
              delay={index * 100}
            />
          )
        )}
      </div>
    </div>
  );
}

export default HomePage;
