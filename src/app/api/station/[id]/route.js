import { NextResponse } from "next/server";
import { ConnectionDB } from "@/libs/mongoose";
import Station from "@/models/station";

export async function GET(request, { params }) {
  ConnectionDB();
  try {
    const stationFound = await Station.findById(params.id);
    if (!stationFound)
      return NextResponse.json(
        {
          message: "Station not found!",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(stationFound);
  } catch (error) {
    return NextResponse.json("id no valido", {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const stationDeleted = await Station.findByIdAndDelete(params.id);
    console.log(params.id)

    if (!stationDeleted)
      return NextResponse.json(
        {
          message: "Station not found!",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json({
      message: "Station deleted!",
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const stationUpdated = await Station.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    if (!stationUpdated)
      return NextResponse.json(
        {
          message: "Station not found!",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(stationUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
