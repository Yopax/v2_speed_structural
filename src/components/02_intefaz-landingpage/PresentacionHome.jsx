import React from "react";
import BotonDashboard from "./BotonDashboard";

function PresentacionHome() {
  return (
    <>
      <div className="flex mx-auto w-[60%] max-sm:w-[75%]  mb-24 max-sm:mb-4 pt-[150px] max-sm:pt-[100px]">
        <div className="flex-col w-full justify-center text-center ">
          <h4 className="text-lg font-medium max-sm:text-[11px] text-emerald-600 leading-3  ">
            App Web creada para optimizar el tiempo de cálculo de tu
          </h4>
          <h1 className=" text-6xl py-4 max-sm:py-5  max-sm:text-3xl max-[320px]:text-2xl  flex justify-center text-emerald-600 font-extrabold text-center">
            Predimensionamiento y metrado de cargas para el análisis y  diseño sísmico.
            <br />
          </h1>
          <p className="max-sm:text-sm  leading-6 mb-2 mt-2 max-sm:mt-0 mb1:mx-10">
            Speed Structural,tiene como finalidad optimizar el tiempo de cálculo.
            
          </p>
          <p className=" mb-6 text-[10px] font-semibold">
            Proyecto de titulación para optar el grado de Ingeniero Civil.
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
