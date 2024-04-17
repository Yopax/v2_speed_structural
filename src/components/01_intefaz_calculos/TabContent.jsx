import React from 'react'

function TabContent() {
  return (
    <>
      <div role="tablist" className="tabs tabs-lifted mt-[30px] w-[75%] m-auto">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="01.Predimensionamiento"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="w-[75%] m-auto">
            
            <p className="text-lg text-emerald-700 font-bold my-4">
              01. Predimensionamiento de Elementos Estructurales
            </p>
            <p className="text-sm my-4 text-justify text-slate-700 dark:text-slate-300">
              La importancia del predimensionamiento, un proceso crucial que
              determina las dimensiones iniciales de los elementos
              estructurales. Estas dimensiones preliminares son fundamentales
              para permitir un Análisis Estructural que cumpla lo establecido
              por las las normas Peruanas (José Alberto, 2022). Como dijo el
              ingeniero Alberto el predimensionamiento es darle dimensiones
              tentativas a los elementos estructurales, si realizamos un buen
              predimensionamiento podemos lograr que las dimensiones tentativas
              sean las finales, y así ahorrar tiempo, esto dependerá mucho de la
              experiencia del Ingeniero. Ademas, se emplearon formulas y
              criterios del ingeniero Antonio Blanco Blasco de su libro
              `Estructuración y diseño de edificaciones de concreto armado`.
            </p>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="02.Metrado_de_cargas"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="w-[75%] m-auto">
            
            <p className="text-lg text-emerald-700 font-bold my-4">
              01. Predimensionamiento de Elementos Estructurales
            </p>
            <p className="text-sm my-4 text-justify text-slate-700 dark:text-slate-300">
              La importancia del predimensionamiento, un proceso crucial que
              determina las dimensiones iniciales de los elementos
              estructurales. Estas dimensiones preliminares son fundamentales
              para permitir un Análisis Estructural que cumpla lo establecido
              por las las normas Peruanas (José Alberto, 2022). Como dijo el
              ingeniero Alberto el predimensionamiento es darle dimensiones
              tentativas a los elementos estructurales, si realizamos un buen
              predimensionamiento podemos lograr que las dimensiones tentativas
              sean las finales, y así ahorrar tiempo, esto dependerá mucho de la
              experiencia del Ingeniero. Ademas, se emplearon formulas y
              criterios del ingeniero Antonio Blanco Blasco de su libro
              `Estructuración y diseño de edificaciones de concreto armado`.
            </p>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="03.Análisis_de_cargas"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 3
        </div>
      </div>
    </>
  );
}

export default TabContent