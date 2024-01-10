"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function StationFormPage() {
  const { data: session } = useSession();
  let user: any = session?.user;

  let userId: any = user?.id;

  const router = useRouter();
  const params = useParams();
  const [newStation, setNewStation] = useState({
    stationName: "",
    ownerId: user?.id,
    address: "",
    phoneNumber: "",
    gasPriceGreen: "",
    gasPriceRed: "",
  });

  const [error, setError] = useState("");

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
      const resJSON = await res.json();
      if (!res.ok) {
        setError(resJSON.message);
        return;
      }
      router.push("/dashboard");
      router.refresh();
    } catch (error: any) {
      setError(error);
      return;
    }
  };

  const updateStation = async () => {
    try {
      const res = await fetch(`/api/station/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(newStation),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resJSON = await res.json();
      if (!res.ok) {
        setError(resJSON.message);
        return;
      }
      router.push("/dashboard");
      router.refresh();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const deleteStation = async () => {
    try {
      if (window.confirm("Are you sure you want to delete this station?")) {
        const res = await fetch(`/api/station/${params.id}`, {
          method: "DELETE",
        });
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error: any) {
      setError(error);
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
    <div className="h-[calc(100vh-14em)] px-5 lg:overflow-auto overflow-y-scroll overflow-x-hidden">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl">
          {params.id ? "Update" : "New"} Station
        </h1>
        <div className="grid lg:grid-cols-2 gap-x-2">
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
        <div className="flex justify-between gap-x-4">
          <div>
            <button
              type="submit"
              className="bg-green-700 py-2 px-6 m-2 rounded-md hover:bg-green-600 transition-all"
            >
              {params.id ? "Update" : "Save"}
            </button>
            {params.id && (
              <button
                className=" bg-red-500 hover:bg-red-600 transition-colors py-2 px-6 rounded-md"
                onClick={deleteStation}
                type="button"
              >
                Delete
              </button>
            )}
          </div>
          <div>
            <Link
              className="bg-yellow-500 hover:bg-yellow-600 transition-colors py-2 px-6 mx-2 my-2 rounded-md flex"
              href="/dashboard"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
      <div className="my-8">
        {error && (
          <span className="bg-red-600 py-4 px-4 rounded-md">{error}</span>
        )}
      </div>
    </div>
  );
}
