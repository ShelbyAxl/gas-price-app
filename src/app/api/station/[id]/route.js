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
      status: 500,
    });
  }
}

export async function PUT(request, { params }) {
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

    const stations = await Station.find({ _id: { $ne: params.id } });
    const anotherName = () => {
      let isFind = false;
      Object.values(stations).forEach((stations) => {
        if (data.stationName == stations.stationName) isFind = true;
      });
      return isFind;
    };
    if (anotherName())
      return NextResponse.json(
        {
          message: "Station already exist!",
        },
        {
          status: 400,
        }
      );

    const anotherAddress = () => {
      let isFind = false;
      Object.values(stations).forEach((station) => {
        if (data.address == station.address) isFind = true;
      });
      return isFind;
    };
    if (anotherAddress())
      return NextResponse.json(
        {
          message: "Address already exist!",
        },
        {
          status: 400,
        }
      );

    const anotherPhone = () => {
      let isFind = false;
      Object.values(stations).forEach((station) => {
        if (data.phoneNumber == station.phoneNumber) isFind = true;
      });
      return isFind;
    };
    if (anotherPhone())
      return NextResponse.json(
        {
          message: "Phone station already exist!",
        },
        {
          status: 400,
        }
      );

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
      status: 500,
    });
  }
}
