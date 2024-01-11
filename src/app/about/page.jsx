import React from "react";
import Image from "next/image";
import GasStation from "@/images/gas-station.png";

function AboutPage() {
  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-center">
      <div className="px-10 flex flex-col gap-y-10 items-center mb-10 lg:mb-0 ">
        <Image src={GasStation} width={300} height={300} alt="" />
        <h1 className="text-6xl w-[28rem]">Quienes somos?</h1>
      </div>
      <div>
        <p className="text-2xl px-10">
          En GasPrice, nos enorgullece ofrecer a nuestros usuarios una
          herramienta sencilla y eficiente para acceder a información
          actualizada sobre los precios de la gasolina en las estaciones más
          cercanas a su localidad.
        <br />
        <br />
          Nuestra misión es facilitar a los conductores la toma de decisiones
          informadas sobre dónde llenar el tanque al mejor precio posible.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
