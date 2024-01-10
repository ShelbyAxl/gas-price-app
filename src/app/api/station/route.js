import { NextResponse } from "next/server";
import { ConnectionDB } from "@/libs/mongoose.js";
import Station from "@/models/station";

export async function GET() {
  ConnectionDB();
  const station = await Station.find();
  return NextResponse.json(station);
}

export async function POST(request) {
  try {
    const data = await request.json();
    let isVoid = false;
    Object.keys(data).forEach((key) => {
      if (!data[key]) isVoid = true;
    });

    if (isVoid)
      return NextResponse.json(
        {
          message: "Missing data to enter!",
        },
        {
          status: 400,
        }
      );

    const stationFound = await Station.findOne()
      .where("stationName")
      .equals(data.stationName);
    if (stationFound)
      return NextResponse.json(
        {
          message: "Station already exist!",
        },
        {
          status: 400,
        }
      );

    const addressFound = await Station.findOne()
      .where("address")
      .equals(data.address);
    if (addressFound)
      return NextResponse.json(
        {
          message: "Address already exist!",
        },
        {
          status: 400,
        }
      );

    const numberFound = await Station.findOne()
      .where("phoneNumber")
      .equals(data.phoneNumber);
    if (numberFound)
      return NextResponse.json(
        {
          message: "Phone station already exist!",
        },
        {
          status: 400,
        }
      );

    const newStation = new Station(data);
    const savedStation = await newStation.save();
    return NextResponse.json(savedStation);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
