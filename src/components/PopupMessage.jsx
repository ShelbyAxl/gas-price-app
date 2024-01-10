import React from "react";
import { useState } from "react";

function PopupMessage({ status, request }) {
  const change = (e) => {
    e.preventDefault();
    request(false);
  };

  const deleted = (e) => {
    e.preventDefault();
    request(true);
  };

  return (
    <div className={status}>
      <div className="z-[2] absolute w-full h-full top-0 left-0 bg-neutral-900 opacity-60 justify-center items-center"></div>
      <div className="z-[3] flex absolute justify-center items-center">
        <div className="bg-gray-800 flex flex-col px-14 py-5 lg:py-10 lg:px-16 rounded-lg items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -3 24 24"
            width="58"
            fill="currentColor"
          >
            <path d="M12.8 1.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H3.298C1.477 18 0 16.47 0 14.581c0-.639.173-1.264.498-1.807L7.2 1.613C8.162.01 10.196-.481 11.743.517c.428.276.79.651 1.057 1.096zM10 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1z"></path>
          </svg>
          <h1 className="py-3 text-center">
            Are you sure do you want to delete this station?
          </h1>
          <div className="flex gap-x-3 justify-center items-center">
            <button
              onClick={deleted}
              className="bg-red-600 hover:bg-red-500 transition-all py-2 px-4 rounded-md"
            >
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
