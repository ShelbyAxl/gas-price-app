import React from "react";
import { useState } from "react";

function PopupMessage({status, request}) {
  const change = (e) => {
    e.preventDefault();
    request(false)
  }

  const deleted = (e) => {
    e.preventDefault();
    request(true)
  }

  return (
    <div className={status}>
      <div className="z-[2] absolute w-full h-full top-0 left-0 bg-slate-600 opacity-60 justify-center items-center"></div>
      <div className="z-[3] flex absolute justify-center items-center">
        <div className="bg-gray-800 py-10 px-16 rounded-lg">
          <h1 className="py-8">
            Are you sure do you want to delete this station?
          </h1>
          <div className="flex gap-x-3 justify-center items-center">
            <button onClick={deleted} className="bg-red-600 hover:bg-red-500 transition-all py-2 px-4 rounded-md">
              Delete
            </button>
            <button
              onClick={change}
              className="bg-yellow-500 hover:bg-yellow-400 transition-all py-2 px-4 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupMessage;
