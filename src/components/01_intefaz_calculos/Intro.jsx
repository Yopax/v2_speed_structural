import React from 'react'

function Intro() {
  return (
    <>
      <p className="w-[75%] max-sm:w-[85%] max-sm:text-center m-auto mt-[90px] text-xs text-slate-700 dark:text-slate-300 mb-2">
        Tener en cuenta las siguientes consideraciones:
      </p>
      <div className="flex w-[75%] max-sm:w-[85%] m-auto space-x-2  max-[425px]:space-y-2  max-[425px]:flex-col max-[425px]:space-x-0 max-[425px]:items-center">
        <div className="p-4  rounded-lg border border-emerald-600 m-auto text-xs text-center text-slate-700 dark:text-slate-300">
          Este análisis se aplicara solo a estructuras con distribuciones
          homogéneas en sus medidas.
        </div>
        <div className="p-4  rounded-lg border border-emerald-600 m-auto text-xs text-center text-slate-700 dark:text-slate-300">
          Asimismo se recomienda utilizar otros métodos estructurales con el fin
          de contrastar información.
        </div>
        <div className="p-4  rounded-lg border border-emerald-600 m-auto text-xs text-center text-slate-700 dark:text-slate-300">
          Por último, si notas alguna inconsistencia o encuentras algún error en
          la aplicación, no dudes en informarnos. 
        </div>
      </div>
    </>
  );
}

export default Intro