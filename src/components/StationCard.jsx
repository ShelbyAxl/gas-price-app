"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Appear = keyframes`
  0%{
    opacity: 0;
    padding-top: 3em;
  }

  100%{
    opacity:1;
  }
`;

const Box = styled.div.attrs({ 'data-display-name': 'Box' })`
  animation-name: ${Appear};
  animation-duration: .15s;
`;

function StationCard({ station, delay }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, delay);
  });

  return (
    mounted && (
      <Box>
        <Link href="/">
          <div
            className={`bg-slate-800 rounded-md hover:cursor-pointer hover:bg-slate-700 text-white py-3 px-4 overflow-hidden`}
          >
            <h3 className="font-bold text-lg"> {station.stationName} </h3>
            <div className="flex gap-10">
              <h1 className=" text-4xl py-3 text-green-600">
                $ {station.gasPriceGreen}
              </h1>
              <h1 className=" text-4xl py-3 text-red-600">
                $ {station.gasPriceRed}
              </h1>
            </div>
            <p> {station.address} </p>
          </div>
        </Link>
      </Box>
    )
  );
}

export default StationCard;
