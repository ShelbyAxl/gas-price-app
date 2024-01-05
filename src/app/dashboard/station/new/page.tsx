"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useSession } from "next-auth/react";

export default function StationFormPage() {
  const { data: session, status } = useSession();
  let user:any = session?.user;

  let userId = user.id;

  const router = useRouter();
  const params = useParams();
  const [newStation, setNewStation] = useState({
    stationName: "",
    ownerId: userId,
    address: "",
    phoneNumber: "",
    gasPriceGreen: "",
    gasPriceRed: "",
  });

  const getStation = async () => {
    const res = await fetch(`/api/station/${params.id}`);
    const data = await res.json();
    setNewStation({
      stationName: data.stationName,
      ownerId: data.ownerId,
      address: data.address,
      phoneNumber: data.phoneNumber,
      gasPriceGreen: data.gasPriceGreen,
      gasPriceRed: data.gasPriceRed,
    });
  };

  const createStation = async () => {
    try {
      const res = await fetch("/api/station", {
        method: "POST",
        body: JSON.stringify(newStation),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/dashboard");
      router.refresh();
    } catch (error:any) {
      console.log(error.message);
    }
  };

  const updateStation = async () => {
    const res = await fetch(`/api/station/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(newStation),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/dashboard");
    router.refresh();
  };

  const deleteStation = async () => {
    if (window.confirm("Are you sure you want to delete this station?")) {
      const res = await fetch(`/api/station/${params.id}`, {
        method: "DELETE",
      });
      router.push("/dashboard");
      router.refresh();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!params.id) {
      await createStation();
    } else {
      updateStation();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewStation({ ...newStation, [e.target.name]: e.target.value });

  useEffect(() => {
    if (params.id) {
      getStation();
    }
  }, []);

  return (
    <div className="container">
      <h1 className="font-bold text-3xl">
        {params.id ? "Update" : "New"} Station
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-x-2">
          <div className="flex flex-col p-2">
            <label htmlFor="stationName">Station name:</label>
            <input
              type="text"
              value={newStation.stationName}
              onChange={handleChange}
              name="stationName"
              className="bg-slate-800 py-1 px-3 rounded-md"
            />
            <label htmlFor="ownerId">Owner Id:</label>
            <input
              type="text"
              value={params.id ? newStation.ownerId : userId}
              onChange={handleChange}
              disabled
              name="ownerId"
              className="bg-slate-800 py-1 px-3 rounded-md"
            />
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              value={newStation.address}
              onChange={handleChange}
              name="address"
              className="bg-slate-800 py-1 px-3 rounded-md"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="phoneNumber">Phone number:</label>
            <input
              type="text"
              value={newStation.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              className="bg-slate-800 py-1 px-3 rounded-md"
            />
            <label htmlFor="gasPriceGreen">Green gas price:</label>
            <input
              type="number"
              value={newStation.gasPriceGreen}
              onChange={handleChange}
              name="gasPriceGreen"
              className="bg-slate-800 py-1 px-3 rounded-md"
            />
            <label htmlFor="gasPriceRed">Red gas price:</label>
            <input
              type="number"
              value={newStation.gasPriceRed}
              onChange={handleChange}
              name="gasPriceRed"
              className="bg-slate-800 py-1 px-3 rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-700 py-2 px-6 m-3 rounded-md hover:bg-green-600 transition-all"
        >
          {params.id ? "Update" : "Save"}
        </button>
        <button
          className=" bg-red-500 hover:bg-red-600 transition-colors py-2 px-6 rounded-md"
          onClick={deleteStation}
          type="button"
        >
          Delete
        </button>
      </form>
    </div>
  );
}
