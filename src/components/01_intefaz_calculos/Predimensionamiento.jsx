// ComponentContext2.js
import React from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";
import { useEffect, useState } from "react";

const commonInputClasses =
  " dark:text-white text-gray-700 border border-solid rounded-md justify-center items-center text-center border-gray-300 w-[100px] text-xs py-1";
const claseOne = "font-medium text-gray-900 font justify-between  text-xs mx-2";
const subTitle = "text-xs text-white font-bold my-2";
const claseTwo = "text-xs text-white font-medium mx-2 ";
const claseDivOne =
  "flex flex-col mx-auto text-white items-center justify-center text-center m-2 rounded-md h-72 w-44 bg-emerald-700 max-[425px]:w-full";
const claseDivTwo =
  "flex flex-col mx-auto text-white items-center justify-center text-center m-2 rounded-md h-72 w-44 bg-sky-700 max-sm:bg-sky-700 max-[425px]:w-full";

//Formula para calcular la losa aligerada para las tres formas
function Predimensionamiento() {
  const { inputValue7, updateInputValue7 } = useGeneralContext();
  const { inputValue8, updateInputValue8 } = useGeneralContext();
  const { inputValue9, updateInputValue9 } = useGeneralContext();
  const { inputValue10, updateInputValue10 } = useGeneralContext();
  const { inputValue11, updateInputValue11 } = useGeneralContext();
  const { inputValue12, updateInputValue12 } = useGeneralContext();
  const { perimetroA, updatePerimetroA } = useGeneralContext();
  const { perimetroB, updatePerimetroB } = useGeneralContext();
  const { servicio, updateServicio } = useGeneralContext();
  const { inputFc, updateInputFc } = useGeneralContext();
  const { inputValue2, updateInputValue2 } = useGeneralContext();
  const { tipoSuelo, updateTipoSuelo } = useGeneralContext();
  const { capacidadAdmisible, updatCapacidadAdmisible } = useGeneralContext();
  const { np, updateNp } = useGeneralContext();
  const { ca, updateCa } = useGeneralContext();
  const { dx, updateDx } = useGeneralContext();
  const { dy, updateDy } = useGeneralContext();
  const { pec, updatePec } = useGeneralContext();
  const { nc, updateNc } = useGeneralContext();
  const { dx_col, updateDx_col } = useGeneralContext();
  const { dy_col, updateDy_col } = useGeneralContext();
  const { l_col, updateL_col } = useGeneralContext();
  const { nvx, updateNvx } = useGeneralContext();
  const { dx_vgx, updateDx_vgx } = useGeneralContext();
  const { dy_vgx, updateDy_vgx } = useGeneralContext();
  const { l_vgx, updateL_vgx } = useGeneralContext();
  const { nvy, updateNvy } = useGeneralContext();
  const { dx_vgy, updateDx_vgy } = useGeneralContext();
  const { dy_vgy, updateDy_vgy } = useGeneralContext();
  const { l_vgy, updateL_vgy } = useGeneralContext();
  const { cv, updateCv } = useGeneralContext();
  const { cvr, updateCvr } = useGeneralContext();
  const { dx_t, updateDx_t } = useGeneralContext();
  const { dy_t, updateDy_t } = useGeneralContext();
  const { inputValue4, updateInputValue4 } = useGeneralContext();
  const { inputValue5, updateInputValue5 } = useGeneralContext();
  const { inputValue6, updateInputValue6 } = useGeneralContext();
  const { inputValue1, updateInputValue1 } = useGeneralContext();
  const { ocupacionUso, updateOcupacionUso } = useGeneralContext();

  // PRE - LOSAS
  const [roundedValue, setRoundedValue] = useState(0);

  useEffect(() => {
    const losa = inputValue7 / 25;
    const calculateRoundedValue = () => {
      if (losa === 0) {
        setRoundedValue(losa);
      } else {
        const distances = [
          Math.abs(losa - 30),
          Math.abs(losa - 25),
          Math.abs(losa - 20),
          Math.abs(losa - 17),
        ];
        const minDistance = Math.min(...distances);
        if (minDistance === Math.abs(losa - 30)) {
          setRoundedValue(30);
        } else if (minDistance === Math.abs(losa - 25)) {
          setRoundedValue(25);
        } else if (minDistance === Math.abs(losa - 20)) {
          setRoundedValue(20);
        } else {
          setRoundedValue(17);
        }
      }
    };
    calculateRoundedValue();
  }, [inputValue7]);

  // 	Losa Prefabricada Pretensada
  const [roundedValue2, setRoundedValue2] = useState(0);

  useEffect(() => {
    const losa = inputValue7 / 28;
    const calculateRoundedValue2 = () => {
      if (losa === 0) {
        setRoundedValue2(losa);
      } else {
        const distances = [
          Math.abs(losa - 30),
          Math.abs(losa - 25),
          Math.abs(losa - 20),
          Math.abs(losa - 17),
        ];
        const minDistance = Math.min(...distances);
        if (minDistance === Math.abs(losa - 30)) {
          setRoundedValue2(30);
        } else if (minDistance === Math.abs(losa - 25)) {
          setRoundedValue2(25);
        } else if (minDistance === Math.abs(losa - 20)) {
          setRoundedValue2(20);
        } else {
          setRoundedValue2(17);
        }
      }
    };
    calculateRoundedValue2();
  }, [inputValue7]);

  // 	Losa Maciza
  const [roundedValue3, setRoundedValue3] = useState(0);

  useEffect(() => {
    const losa = inputValue7 / 30;
    const calculateRoundedValue3 = () => {
      if (losa === 0) {
        setRoundedValue3(losa);
      } else {
        const distances = [
          Math.abs(losa - 30),
          Math.abs(losa - 25),
          Math.abs(losa - 20),
          Math.abs(losa - 17),
        ];
        const minDistance = Math.min(...distances);
        if (minDistance === Math.abs(losa - 30)) {
          setRoundedValue3(30);
        } else if (minDistance === Math.abs(losa - 25)) {
          setRoundedValue3(25);
        } else if (minDistance === Math.abs(losa - 20)) {
          setRoundedValue3(20);
        } else {
          setRoundedValue3(17);
        }
      }
    };
    calculateRoundedValue3();
  }, [inputValue7]);

  // Losa Maciza Bidireccional

  const perimetro = (perimetroA * 2 + perimetroB * 2) / 140;
  const perimetroRedondeado = perimetro.toFixed(2);
  const perimetroNumerico = parseFloat(perimetroRedondeado);

  //PRE - VIGAS
  const vigax = inputValue8 / 10;
  const vigay = inputValue9 / 10;

  //PRE - COLUMNAS

  //columna centreda
  const pservicio = servicio * inputValue10 * inputValue2;
  const areaColumna = pservicio / (0.45 * inputFc);
  const acolumnofinal = Math.ceil(Math.sqrt(areaColumna) / 5) * 5;
  const acolumnofinalFormateada = acolumnofinal.toFixed(2);

  //columna esquinada
  const pservicio2 = servicio * inputValue11 * inputValue2;
  const areaColumna2 = pservicio2 / (0.35 * inputFc);
  const acolumnofinal2 = Math.ceil(Math.sqrt(areaColumna2) / 5) * 5;

  //columna excentrica
  const pservicio3 = servicio * inputValue12 * inputValue2;
  const areaColumna3 = pservicio3 / (0.35 * inputFc);
  const acolumnofinal3 = Math.ceil(Math.sqrt(areaColumna3) / 5) * 5;

  //PRE - ZAPATAS

  //Zapatacentrada
  const zapatacentrada = pservicio / (tipoSuelo * capacidadAdmisible);
  const azapatacentrada = Math.ceil(Math.sqrt(zapatacentrada) / 5) * 5;

  //Zapataesquinada
  const zapataesquinada = pservicio2 / (tipoSuelo * capacidadAdmisible);
  const azapataesquinada = Math.ceil(Math.sqrt(zapataesquinada) / 5) * 5;

  //Zapataexcentrica
  const zapataexcentrica = pservicio3 / (tipoSuelo * capacidadAdmisible);
  const azapataexcentrica = Math.ceil(Math.sqrt(zapataexcentrica) / 5) * 5;

  return (
    <>
      <div className="w-[75%] max-sm:w-[85%] m-auto">
        <hr className="my-2" />
        <div className="flex max-[425px]:flex-col space-x-8 max-[425px]:space-x-0 ">
          <div className="my-2 w-[590px] max-[425px]:w-full bg-emerald-700  p-4 rounded-md">
            <p className={subTitle}>Losas - Ingresa los datos solicitados:</p>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>Ln - Losa aligerada:</label>
              <input
                className={commonInputClasses}
                placeholder="cm"
                value={inputValue7}
                onChange={(e) => updateInputValue7(e.target.value)}
                type="number"
              />
            </div>
            <p className={subTitle}>Para la losa maciza bidimensional</p>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>Largo en el eje x-x:</label>
              <input
                className={commonInputClasses}
                placeholder="cm"
                value={perimetroA}
                onChange={(e) => updatePerimetroA(e.target.value)}
                type="number"
              />
            </div>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>Largo en el eje y-y:</label>
              <input
                className={commonInputClasses}
                placeholder="cm"
                value={perimetroB}
                onChange={(e) => updatePerimetroB(e.target.value)}
                type="number"
              />
            </div>
          </div>
          <div className="overflow-x-auto my-4">
            <p className="text-xs font-medium text-emerald-700 mb-2">
              Resultados Previos:
            </p>
            <table className="table ">
              <thead>
                <tr className="text-center ">
                  <th></th>
                  <th>Losa Aligerada</th>
                  <th>Losa Prefabricada Pretensada</th>
                  <th>Losa maciza</th>
                  <th>Losa maciza Bidireccional</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-base-200 text-center text-xs">
                  <th>Altura</th>
                  <td>{roundedValue}cm</td>
                  <td>{roundedValue2}cm</td>
                  <td>{roundedValue3}cm</td>
                  <td>{perimetroNumerico}cm</td>
                </tr>
              </tbody>
            </table>
            <p className=" text-xs dark:text-red-500">
              Recomendación : en la losa aligerada para los primeros pisos
              asumimos {roundedValue} cm y para el ultimo piso consideramos{" "}
              {roundedValue - 5}cm.
            </p>
            <p className="text-xs mt-2 text-slate-600 max-sm:hidden dark:text-slate-300">
              Las formulas utilizadas para calcular las losas fueron las
              siguientes, para la losa aligerada: ln/25, para la Losa
              Prefabricada Pretensada: ln/28, para la losa maciza: ln/30, para
              la losa maciza bidireccional: ln x-x *2 + ln y-y*2 / 140.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[75%] max-sm:w-[85%] m-auto">
        <hr className="my-2" />
        <div className="flex max-[425px]:flex-col space-x-8 max-[425px]:space-x-0">
          <div className="my-2 w-[390px] max-[425px]:w-full bg-emerald-700  p-4 rounded-md">
            <p className={subTitle}>Vigas- Ingresa los datos solicitados:</p>

            <div className="flex my-4 justify-between">
              <label className={claseOne}>Ln - Viga en el eje x-x:</label>
              <input
                className={commonInputClasses}
                placeholder="cm"
                value={inputValue8}
                onChange={(e) => updateInputValue8(e.target.value)}
                type="number"
              />
            </div>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>Ln - Viga en el eje y-y:</label>
              <input
                className={commonInputClasses}
                placeholder="cm"
                value={inputValue9}
                onChange={(e) => updateInputValue9(e.target.value)}
                type="number"
              />
            </div>
            <p className={subTitle}>Columnas- Ingresa los datos solicitados:</p>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>Numero de pisos:</label>
              <input
                className={commonInputClasses}
                placeholder="und"
                value={inputValue2}
                onChange={(e) => updateInputValue2(e.target.value)}
                type="number"
              />
            </div>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>Carga de la Edificación(P):</label>
              <input
                className={commonInputClasses}
                placeholder="kgf/m2"
                value={servicio}
                onChange={(e) => updateServicio(e.target.value)}
                type="number"
              />
            </div>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>Fuerza de Compresión(fc):</label>
              <input
                className={commonInputClasses}
                placeholder="kgf/cm2"
                value={inputFc}
                onChange={(e) => updateInputFc(e.target.value)}
                type="number"
              />
            </div>

            <div className="flex my-4 justify-between">
              <label className={claseOne}>AT - Columna Centrada:</label>
              <input
                className={commonInputClasses}
                placeholder="m2"
                value={inputValue10}
                onChange={(e) => updateInputValue10(e.target.value)}
                type="number"
              />
            </div>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>AT - Columna esquinada:</label>
              <input
                className={commonInputClasses}
                placeholder="m2"
                value={inputValue11}
                onChange={(e) => updateInputValue11(e.target.value)}
                type="number"
              />
            </div>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>AT - Columna excéntrica:</label>
              <input
                className={commonInputClasses}
                placeholder="m2"
                value={inputValue12}
                onChange={(e) => updateInputValue12(e.target.value)}
                type="number"
              />
            </div>
          </div>
          <div className="overflow-x-auto my-4">
            <p className="text-xs font-medium text-emerald-700 mb-2">
              Resultados Previos:
            </p>
            <table className="table ">
              <thead>
                <tr className="text-center  ">
                  <th></th>
                  <th>Viga eje x - x</th>
                  <th>Vigas eje y - y</th>
                  <th>Columna Centrada</th>
                  <th>Columna Esquinada</th>
                  <th>Columna Excéntrica</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-base-200 text-center text-xs">
                  <th>Altura</th>
                  <td>{vigax}cm</td>
                  <td>{vigay}cm</td>
                  <td>{isNaN(acolumnofinal) ? "0cm" : `${acolumnofinal}cm`}</td>
                  <td>
                    {isNaN(acolumnofinal2) ? "0cm" : `${acolumnofinal2}cm`}
                  </td>
                  <td>
                    {isNaN(acolumnofinal3) ? "0cm" : `${acolumnofinal3}cm`}
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="bg-base-200 text-center text-xs">
                  <th>Base</th>
                  <td>{vigax / 2}cm</td>
                  <td>{vigay / 2}cm</td>
                  <td>{isNaN(acolumnofinal) ? "0cm" : `${acolumnofinal}cm`}</td>
                  <td>
                    {isNaN(acolumnofinal2) ? "0cm" : `${acolumnofinal2}cm`}
                  </td>
                  <td>
                    {isNaN(acolumnofinal3) ? "0cm" : `${acolumnofinal3}cm`}
                  </td>
                </tr>
              </tbody>
            </table>
            <p className=" font2 text-xs mt-2 max-sm:hidden text-slate-600 dark:text-slate-300">
              Las formulas utilizadas para calcular las vigas es ta dada por,
              para la altura: ln/10 y para la base: la altura /2, esto aplica
              para ambas direcciones.
            </p>
            <p className="font2 text-xs mt-2 max-sm:hidden text-slate-700 underline dark:text-slate-400">
              Para las columnas centradas:
            </p>
            <p className="font2 text-xs mt-2 max-sm:hidden text-slate-600 dark:text-slate-300">
              pservicio = carga de la edificación(P)*AT - Columna Centrada:*N de
              pisos; <br />
              AreaColumna = (pservicio/(0.45*f´c del concreto))
            </p>
            <p className="font2 text-xs mt-2 max-sm:hidden text-slate-700 underline dark:text-slate-400">
              Para las columnas excéntricas:
            </p>
            <p className="font2 text-xs mt-2 max-sm:hidden text-slate-600 dark:text-slate-300">
              pservicio = carga de la edificación(P)*AT - Columna excéntrica:*N
              de pisos; <br />
              AreaColumna = (pservicio/(0.35*f´c del concreto))
            </p>
            <p className="font2 text-xs mt-2 max-sm:hidden text-slate-700 underline dark:text-slate-400">
              Para las columnas esquinadas:
            </p>
            <p className="font2 text-xs mt-2 max-sm:hidden text-slate-600 dark:text-slate-300">
              pservicio = carga de la edificación(P)*AT - Columna esquinada:*N
              de pisos; <br />
              AreaColumna = (pservicio/(0.35*f´c del concreto))
            </p>
          </div>
        </div>
      </div>
      <div className="w-[75%] max-sm:w-[85%] m-auto">
        <hr className="my-2" />
        <div className="flex max-[425px]:flex-col space-x-8 max-[425px]:space-x-0 ">
          <div className="my-2 w-[660px] max-[425px]:w-full bg-emerald-700  p-4 rounded-md">
            <p className={subTitle}>Zapatas - Ingresa los datos solicitados:</p>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>Coeficiente del suelo(k):</label>
              <input
                className={commonInputClasses}
                placeholder="1.0, 0.9, 0.8, 0.7 "
                value={tipoSuelo}
                onChange={(e) => updateTipoSuelo(e.target.value)}
                type="number"
              />
            </div>
            <p className={subTitle}>Para la losa maciza bidimensional</p>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>Capacidad admisible:</label>
              <input
                className={commonInputClasses}
                placeholder="kg/cm2"
                value={capacidadAdmisible}
                onChange={(e) => updatCapacidadAdmisible(e.target.value)}
                type="number"
              />
            </div>
          </div>
          <div className="overflow-x-auto my-2">
            <p className="text-xs font-medium text-emerald-700 mb-2">
              Resultados Previos:
            </p>
            <table className="table table-xs ">
              <thead>
                <tr>
                  <th></th>
                  <th>Zapata centrada</th>
                  <th>Zapata esquinada</th>
                  <th>Zapata excéntrica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Altura(h)</th>
                  <td>50 cm</td>
                  <td>50 cm </td>
                  <td>50 cm</td>
                </tr>
                <tr>
                  <th>size x</th>
                  <td>
                    {isNaN(azapatacentrada) ? "0cm" : `${azapatacentrada}cm`}
                  </td>
                  <td>
                    {isNaN(azapataesquinada) ? "0cm" : `${azapataesquinada}cm`}
                  </td>
                  <td>
                    {isNaN(azapataexcentrica)
                      ? "0cm"
                      : `${azapataexcentrica}cm`}
                  </td>
                </tr>
                <tr>
                  <th>size y</th>
                  <td>
                    {isNaN(azapatacentrada) ? "0cm" : `${azapatacentrada}cm`}
                  </td>
                  <td>
                    {isNaN(azapataesquinada) ? "0cm" : `${azapataesquinada}cm`}
                  </td>
                  <td>
                    {isNaN(azapataexcentrica)
                      ? "0cm"
                      : `${azapataexcentrica}cm`}
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
            <p className="font2 text-xs text-cyan-600">
              Recomendación : la altura de la zapata sera de (50cm) es una
              altura tentativa, por favor verificar por punzonamiento.
            </p>
            <p className="font2 max-sm:hidden text-xs mt-2 text-slate-600 dark:text-slate-400">
              La formula para calcular las zapatas es la siguiente: Area de de
              la zapata = pservicio/(coeficiente del suelo * la carga admisible)
            </p>
            <p className="font2 max-sm:hidden text-xs mt-2 text-slate-600 dark:text-slate-400">
              Siendo pservicio, el calculo para cada tipo de columna, ejem: si
              se requiere calcular la zapata centrada se debe utilizar el
              pservicio de la columna centrada, este dato el programa ya lo
              calcula y utiliza internamente, por lo que no tendría mayor
              relevancia.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[75%] max-sm:w-[85%] m-auto">
        <hr className=" my-2" />
        <h2 className="flex text-lg max-[425px]:text-center text-sky-700 max-sm:text-sky-700 font-bold mt-6 mb-2">
          <p className="max-sm:text-center max-sm:mx-auto">Metrado de Cargas</p>
          <p className="max-sm:hidden">-para un análisis y diseño sísmico</p>
        </h2>
        <p className="text-sm text-slate-700 max-sm:hidden dark:text-slate-300">
          El metrado de cargas es una técnica con la cual se estiman las cargas
          actuantes sobre los distintos elementos estructurales que componen al
          edificio. Este proceso es aproximado ya que por lo general se
          desprecian los efectos hiperestáticos producidos por los momentos
          flectores, salvo que estos sean muy importantes. Ademas, se emplearon
          formulas y criterios del ingeniero Angel san bartolome de su libro
          `Análisis de edificios`.
        </p>
        <div className="flex w-full space-y-2">
          <div className="flex my-8 w-full items-center justify-center">
            <img
              className="h-[280px]  w-[55%] max-sm:w-full"
              src="https://i.imgur.com/4uDHvnv.png"
              alt="referencia"
            />
          </div>
        </div>
      </div>
      <div className="w-[75%] max-sm:w-[85%] m-auto grid grid-cols-5 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 mt-8 mb-8 ">
        <div className={claseDivTwo}>
          <p className="mb-2">Paños</p>
          <label className={claseTwo}>Numero de paños:</label>
          <input
            className={commonInputClasses}
            placeholder="und"
            value={np}
            onChange={(e) => updateNp(e.target.value)}
            type="number"
          />
          <label className={claseTwo}>Carga por área:</label>
          <input
            className={commonInputClasses}
            placeholder="tnf/m2"
            value={ca}
            onChange={(e) => updateCa(e.target.value)}
            type="number"
          />

          <label className={claseTwo}>Dim en x del paño :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            value={dx}
            onChange={(e) => updateDx(e.target.value)}
            type="number"
          />
          <label className={claseTwo}>Dim en x del paño :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            value={dy}
            onChange={(e) => updateDy(e.target.value)}
            type="number"
          />
        </div>
        <div className={claseDivTwo}>
          <p>Columnas</p>
          <label className={claseTwo}>Peso especifico - concreto:</label>
          <input
            className={commonInputClasses}
            placeholder="tn/m3"
            value={pec}
            onChange={(e) => updatePec(e.target.value)}
            type="number"
          />
          <label className={claseTwo}>Numero de columnas :</label>
          <input
            className={commonInputClasses}
            placeholder="und"
            value={nc}
            onChange={(e) => updateNc(e.target.value)}
            type="number"
          />
          <label className={claseTwo}>Dim x de la columna :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            value={dx_col}
            onChange={(e) => updateDx_col(e.target.value)}
            type="number"
          />
          <label className={claseTwo}>Dim y de la columna :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            value={dy_col}
            onChange={(e) => updateDy_col(e.target.value)}
            type="number"
          />
          <label className={claseTwo}>Longitud de la columna :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            value={l_col}
            onChange={(e) => updateL_col(e.target.value)}
            type="number"
          />
        </div>
        <div className={claseDivTwo}>
          <p className="mb-10">Vigas en x</p>
          <label className={claseTwo}>Numero de vigas en x :</label>
          <input
            className={commonInputClasses}
            placeholder="und"
            type="number"
            value={nvx}
            onChange={(e) => updateNvx(e.target.value)}
          />
          <label className={claseTwo}>Dim en x de la vigax :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            type="number"
            value={dx_vgx}
            onChange={(e) => updateDx_vgx(e.target.value)}
          />
          <label className={claseTwo}>Dim en y de la vigax :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            type="number"
            value={dy_vgx}
            onChange={(e) => updateDy_vgx(e.target.value)}
          />
          <label className={claseTwo}>Longitud de la vigax :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            type="number"
            value={l_vgx}
            onChange={(e) => updateL_vgx(e.target.value)}
          />
        </div>
        <div className={claseDivTwo}>
          <p className="mb-10">Vigas en y</p>
          <label className={claseTwo}>Numero de vigas en y :</label>
          <input
            className={commonInputClasses}
            placeholder="und"
            type="number"
            value={nvy}
            onChange={(e) => updateNvy(e.target.value)}
          />
          <label className={claseTwo}>Dim en x de la vigay :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            type="number"
            value={dx_vgy}
            onChange={(e) => updateDx_vgy(e.target.value)}
          />
          <label className={claseTwo}>Dim en y de la vigay :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            type="number"
            value={dy_vgy}
            onChange={(e) => updateDy_vgy(e.target.value)}
          />
          <label className={claseTwo}>Longitud de la vigay :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            type="number"
            value={l_vgy}
            onChange={(e) => updateL_vgy(e.target.value)}
          />
        </div>
        <div className={claseDivTwo}>
          <p className="mb-2">Carga Viva</p>
          <label className={claseTwo}>CV techo ultimo piso :</label>
          <input
            className={commonInputClasses}
            placeholder="tn/m2"
            type="number"
            value={cv}
            onChange={(e) => updateCv(e.target.value)}
          />
          <label className={claseTwo}>CV techo demás pisos :</label>
          <input
            className={commonInputClasses}
            placeholder="tn/m2"
            type="number"
            value={cvr}
            onChange={(e) => updateCvr(e.target.value)}
          />
          <label className={claseTwo}>ancho del plano :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            type="number"
            value={dx_t}
            onChange={(e) => updateDx_t(e.target.value)}
          />
          <label className={claseTwo}>largo del plano :</label>
          <input
            className={commonInputClasses}
            placeholder="m"
            type="number"
            value={dy_t}
            onChange={(e) => updateDy_t(e.target.value)}
          />
          <label className={claseTwo}>Profundidad de desplante:</label>
          <input
            className={commonInputClasses}
            type="number"
            placeholder="m"
            value={inputValue5}
            onChange={(e) => updateInputValue5(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Predimensionamiento;
