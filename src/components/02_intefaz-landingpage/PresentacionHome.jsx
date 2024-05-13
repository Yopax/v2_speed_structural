import React from "react";
import BotonDashboard from "./BotonDashboard";

function PresentacionHome() {
  return (
    <>
      <div className="flex mx-auto w-[55%] max-sm:w-[80%]  mb-24 mt-[150px] max-sm:mt-[120px]">
        <div className="flex-col w-full justify-center text-center ">
          <h4 className="text-lg font-medium max-sm:text-[11px] text-emerald-600  ">
            Web App creada para optimizar tu tiempo de cálculo del
          </h4>
          <h1 className=" text-6xl py-4 max-sm:py-0 max-sm:text-2xl flex justify-center text-emerald-600 font-extrabold text-center">
            Predimensionamiento y metrado de cargas.
            <br />
          </h1>
          <p className="max-sm:text-lg  leading-6 mb-2 mt-2 mb1:mx-10">
            Speed Structural,tiene como finalidad optimizar el tiempo de calculo
            del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.
          </p>
          <p className=" mb-6 text-[10px] font-semibold">
            Proyecto de titulación para optar el grado Ingeniero Civil.
          </p>
          <div className="flex justify-center  space-x-4 my-2">
            <BotonDashboard />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default PresentacionHome;