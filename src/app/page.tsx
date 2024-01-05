import type { Metadata } from "next";
import Station from '@/models/station'
import { ConnectionDB } from '@/libs/mongoose'
import StationCard from '@/components/StationCard'

export const metadata: Metadata = {
  title: "GasPrice | Home",
  description: "App con los ultimos precios de la gasolina",
};

async function loadStation (){
  ConnectionDB()
  const stations = await Station.find();
  return stations;
}

async function HomePage() {
  const stations = await loadStation()
  return (
    <div className='grid grid-cols-3 gap-3'>
      {
        stations.map((station) =>(
          <StationCard station={station} key={station._id} />
        ))
      }
    </div>
  )
}

export default HomePage