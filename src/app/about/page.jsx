import React from "react";
import Image from "next/image";
import GasStation from "@/images/gas-station.png";

function AboutPage() {
  return (
    <div className="h-[calc(100vh-12rem)] flex items-center">
      <div className="px-10 flex flex-col gap-y-10 items-center">
        <Image src={GasStation} width={200} height={200} alt="" />
        <h1 className="text-6xl w-[28rem]">Quienes somos?</h1>
      </div>
      <div>
        <p className="text-lg px-10 text-center">
          En GasPrice, nos enorgullece ofrecer a nuestros usuarios una
          herramienta sencilla y eficiente para acceder a información
          actualizada sobre los precios de la gasolina en las estaciones más
          cercanas a su localidad.
        <br />
        <br />
          Nuestra misión es facilitar a los conductores la toma de decisiones
          informadas sobre dónde llenar el tanque al mejor precio posible. Nos
          esforzamos por ofrecer una plataforma fácil de usar que te permita
          encontrar rápidamente las gasolineras más cercanas y comparar los
          precios para que puedas ahorrar dinero en cada viaje.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
