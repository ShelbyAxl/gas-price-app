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
    const newStation = new Station(data);
    const savedStation = await newStation.save();
    return NextResponse.json(savedStation);
  } catch (error) {
    console.log(error.message)
    return NextResponse.json(error.message, {
      status: 401,
    });
  }
}
