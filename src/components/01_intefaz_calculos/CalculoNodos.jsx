
import React from 'react';
import { useGeneralContext } from '@/app/context/GeneralContext';
import { useEffect, useState } from 'react';

const commonInputClasses = " dark:text-white text-gray-700 border border-solid rounded-md justify-center items-center text-center border-gray-300 w-[100px] text-xs py-1";
const claseOne = "font-medium text-gray-900 font justify-between  text-xs mx-2";


function CalculoNodos() {

const { inputValue5, np, ca, dx,dy,nc,pec,dx_col,dy_col,l_col,nvx, dx_vgx, dy_vgx,l_vgx,nvy,dx_vgy,
        dy_vgy,l_vgy, cv,dx_t,dy_t,cvr, inputValue2, inputValue7, inputFc, inputValue4, servicio, 
        inputValue8, inputValue9,inputValue10,inputValue11,inputValue12, h1, h2,h3 , updateH1, fcol, updateFcol,
        fvig, updateFvig, v1, updateV1, updateH2   } = useGeneralContext();


const vigax = inputValue8/10;
const vigay = inputValue9/10;
       
//columna centreda
const pservicio = servicio*inputValue10*inputValue2;
const areaColumna = (pservicio/(0.45*inputFc))
const acolumnofinal = Math.ceil(Math.sqrt(areaColumna) / 5) * 5

 //Losa Aligerada
    const [roundedValue, setRoundedValue] = useState(0);

    useEffect(() => {
      const losa = inputValue7 / 25;
  
      const calculateRoundedValue = () => {
        if (losa === 0) {
          setRoundedValue(losa);
        } else {
          const distances = [Math.abs(losa - 30), Math.abs(losa - 25), Math.abs(losa - 20), Math.abs(losa - 17)];
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
    

  //CARGA MUERTA
  //Losa aligerada
  const losaAligerada = np*ca*dx*dy;
  const resultado_redondeado = Math.round(losaAligerada * 1000) / 1000;

  //Columnas
  const columnas = nc*pec*dx_col*dy_col*l_col;
  const resultado_redondeado2 = Math.round(columnas * 1000) / 1000;

  //Columnas primer PISO 
  const a = parseFloat(l_col);
  const b = parseFloat(inputValue5);
  let c = parseFloat(a+b);

  const columnas2 = nc*pec*dx_col*dy_col*c;
  
  //Vigas
  const vigasy = nvx*pec*dx_vgx*dy_vgx*l_vgx;
  const resultado_redondeado3 = Math.round(vigasy * 1000) / 1000;

  const vigasx = nvy*pec*dx_vgy*dy_vgy*l_vgy;
  const resultado_redondeado4 = Math.round(vigasx * 1000) / 1000;

  //CARGA VIVA
  //Techo
  const techo = cv*dx_t*dy_t;
  const resultado_redondeado5 = Math.round(techo * 1000) / 1000;
//Techo intermedio
  const techo2 = cvr * dx_t * dy_t;
  const resultadocvpinter = Math.round(techo2 * 1000) / 1000;
  

  function getConinValue(setRoundedValue) {
    if (setRoundedValue === 17) {
      return 0.28;
    } else if (setRoundedValue === 20) {
      return 0.3;
    } else if (setRoundedValue === 25) {
      return 0.35;
    } else if (setRoundedValue === 30) {
      return 0.4;
    } else {

      return null; 
    }
  }
  const coninValue = getConinValue(roundedValue)
  
//pisos intermedios
  const losaAligerada2 = np*coninValue*dx*dy;
  const resultado_redondeadop2 = Math.round(losaAligerada2 * 1000) / 1000;

  console.log(losaAligerada2)

//TOTALES DE CARGA

const cargatotal01 = resultado_redondeado +
resultado_redondeado2 +
resultado_redondeado3 +
resultado_redondeado4 


const cargatotal02 = resultado_redondeadop2 +
resultado_redondeado2 +
resultado_redondeado3 +
resultado_redondeado4 


const cargatotal03 = resultado_redondeadop2 +
columnas2 +
resultado_redondeado3 +
resultado_redondeado4;

//PESO
const p_one = !isNaN(cargatotal01) && !isNaN(resultado_redondeado5) ? (cargatotal01 + 0.5 * resultado_redondeado5).toFixed(2) : '';
const p_two = (((cargatotal02 + 0.5 * resultadocvpinter)).toFixed(2));
const p_three = !isNaN(cargatotal03) && !isNaN(resultadocvpinter) ? (cargatotal03 + 0.5 * resultadocvpinter).toFixed(2) : '0.00';

const pesosPorPiso = [];

// Calculamos y almacenamos los pesos para cada piso
for (let i = 0; i < inputValue2; i++) {
  let pesoPiso;

  if (i === 0) {
    // Primer piso
    pesoPiso = !isNaN(cargatotal01) && !isNaN(resultado_redondeado5)
      ? (cargatotal01 + 0.5 * resultado_redondeado5).toFixed(2)
      : '';
  } else if (i === inputValue2 - 1) {
    // Último piso
    pesoPiso = !isNaN(cargatotal03) && !isNaN(resultadocvpinter)
      ? (cargatotal03 + 0.5 * resultadocvpinter).toFixed(2)
      : '0.00';
  } else {
    // Pisos intermedios
    pesoPiso = ((cargatotal02 + 0.5 * resultadocvpinter)).toFixed(2);
  }

  // Agregamos el peso del piso al array
  pesosPorPiso.push(pesoPiso);
}

// Mostramos el array de pesos en la consola para verificar
console.log("Pesos por piso:", pesosPorPiso);

//Modulo de elasticidad
 const raiz = Math.sqrt(inputFc);
const modulo = 15100 * raiz;
const ec = modulo/0.1


//Inercia de la columna c1

const resultadoinerciacolumnas = ((acolumnofinal*0.01) * Math.pow((acolumnofinal*0.01), 3)) / 12;
console.log(resultadoinerciacolumnas)


//  inercia de las vigas
const inerciaVigas = ((vigax*0.01)* Math.pow(((vigax/2)*0.01), 3)) / 12;

//sumatoria inercia de las columnas C1
const fic = ((fcol * resultadoinerciacolumnas)/h1);
console.log(fic)

//sumatoria inercia de las columnas c2
const fic2 = ((fcol * resultadoinerciacolumnas)/h2);
console.log(fic2)

//sumatoria inercia de las vigas
const fiv = ((fvig * inerciaVigas)/v1);

const rigidezOne = (48 * ec) / (h1 * ((4 * h1 / fic) + ((h1 + h2) / (fiv + fic / 12))));
const rigidezTwo = (48 * ec) / ((h2 * ((4 * h2 / fic2) + ((h1 + h2) / (fiv + fic / 12))+((h2+h2)/fiv))));
const rigidezThree = (48 * ec) / ((h2 * ((4 * h2 / fic2) + ((h2 + h2) / (fiv))+((h2+h2)/fiv))));
const rigidezFour = (48 * ec) / ((h2 * ((4 * h2 / fic2) + ((h2 + h2) / (fiv))+((h2)/fiv))));

// Creamos un array para almacenar las rigideces de cada piso
const rigidezPorPiso = [];

// Calculamos y almacenamos las rigideces para cada piso, comenzando desde rigidezFour hasta rigidezOne
for (let i = 0; i < inputValue2; i++) {
  let rigidezPiso;

  if (i === 0) {
    // Primer piso
    rigidezPiso = ((48 * ec) / (h2 * ((4 * h2 / fic2) + ((h2 + h2) / fiv) + ((h2) / fiv)))).toFixed(2);
  } else if (i === inputValue2 - 1) {
    // Último piso
    rigidezPiso = ((48 * ec) / (h1 * ((4 * h1 / fic) + ((h1 + h2) / (fiv + fic / 12))))).toFixed(2);
  } else if (i === inputValue2 - 2) {
    // Penúltimo piso
    rigidezPiso = ((48 * ec) / (h2 * ((4 * h2 / fic2) + ((h1 + h2) / (fiv + fic / 12)) + ((h2 + h2) / fiv)))).toFixed(2);
  } else {
    // Pisos intermedios
    rigidezPiso = ((48 * ec) / (h2 * ((4 * h2 / fic2) + ((h2 + h2) / fiv) + ((h2 + h2) / fiv)))).toFixed(2);
  }

  // Agregamos la rigidez del piso al array
  rigidezPorPiso.push(rigidezPiso);
}

// Mostramos el array de rigideces en la consola para verificar
console.log("Rigideces por piso:", rigidezPorPiso);


// Definir la matriz de rigidez
const n = rigidezPorPiso.length;

// Crear la matriz de rigidez y rellenarla con 0s
const matrizRigidez = [];
for (let i = 0; i < n; i++) {
  matrizRigidez[i] = new Array(n).fill(0);
}

// Asignar los valores de rigidez del array rigidezPorPiso a la diagonal principal en orden inverso
for (let i = 0; i < n; i++) {
  matrizRigidez[i][i] = rigidezPorPiso[n - 1 - i];
}

// Función para imprimir la matriz en un formato legible en la consola
function imprimirMatriz(matriz) {
  let resultado = "[\n";
  for (let i = 0; i < matriz.length; i++) {
    resultado += "  [ ";
    for (let j = 0; j < matriz[i].length; j++) {
      resultado += matriz[i][j];
      if (j !== matriz[i].length - 1) {
        resultado += ", ";
      }
    }
    resultado += " ]";
    if (i !== matriz.length - 1) {
      resultado += ",\n";
    } else {
      resultado += "\n";
    }
  }
  resultado += "]";
  return resultado;
}

// Imprimir la matriz de rigidez en formato legible en la consola
console.log(`Matriz de rigidez 1:\n${imprimirMatriz(matrizRigidez)}`);

const n2 = rigidezPorPiso.length;

// Crear la matriz de rigidez y rellenarla con 1 en la diagonal principal
const matrizRigidez2 = [];
for (let i = 0; i < n2; i++) {
  matrizRigidez2[i] = new Array(n2).fill(1);
}

// Asignar los valores de rigidez del array rigidezPorPiso a la diagonal superior en orden inverso
for (let i = 0; i < n2 - 1; i++) {
  matrizRigidez2[i][i + 1] = rigidezPorPiso[n2 - 2 - i];
}

// Función para imprimir la matriz en un formato legible en la consola
function imprimirMatriz(matriz) {
  let resultado = "[\n";
  for (let i = 0; i < matriz.length; i++) {
    resultado += "  [ ";
    for (let j = 0; j < matriz[i].length; j++) {
      resultado += matriz[i][j];
      if (j !== matriz[i].length - 1) {
        resultado += ", ";
      }
    }
    resultado += " ]";
    if (i !== matriz.length - 1) {
      resultado += ",\n";
    } else {
      resultado += "\n";
    }
  }
  resultado += "]";
  return resultado;
}

// Imprimir la matriz de rigidez en formato legible en la consola
console.log(`Matriz de rigidez 2:\n${imprimirMatriz(matrizRigidez2)}`);

const n3 = rigidezPorPiso.length;

// Crear la matriz de rigidez y rellenarla con 1s en la diagonal principal
const matrizRigidez3 = [];
for (let i = 0; i < n3; i++) {
  matrizRigidez3[i] = new Array(n3).fill(1);
}

// Asignar los valores de rigidez del array rigidezPorPiso a la diagonal inferior en orden inverso
for (let i = 0; i < n3 - 1; i++) {
  matrizRigidez3[i + 1][i] = rigidezPorPiso[n3 - 2 - i];
}

// Función para imprimir la matriz en un formato legible en la consola
function imprimirMatriz(matriz) {
  let resultado = "[\n";
  for (let i = 0; i < matriz.length; i++) {
    resultado += "  [ ";
    for (let j = 0; j < matriz[i].length; j++) {
      resultado += matriz[i][j];
      if (j !== matriz[i].length - 1) {
        resultado += ", ";
      }
    }
    resultado += " ]";
    if (i !== matriz.length - 1) {
      resultado += ",\n";
    } else {
      resultado += "\n";
    }
  }
  resultado += "]";
  return resultado;
}

// Imprimir la matriz de rigidez en formato legible en la consola
console.log(`Matriz de rigidez 3:\n${imprimirMatriz(matrizRigidez3)}`);

//calculo de masas

const masasPorPiso = [];

for (let i = 0; i < inputValue2; i++) {
  let masasPiso;

  if (i === 0) {
    masasPiso = (p_one/9.81).toFixed(2);

  } else if (i === inputValue2 - 1) {

    masasPiso = (p_two/9.81).toFixed(2);
  } else {

    masasPiso = (p_three/9.81).toFixed(2);
  }

  masasPorPiso.push(masasPiso);
}

console.log("masas por piso:", masasPorPiso);


function superponerMatrices(matriz1, matriz2, matriz3) {
  const resultado = [];
  for (let i = 0; i < matriz1.length; i++) {
      resultado[i] = [];
      for (let j = 0; j < matriz1[0].length; j++) {
          resultado[i][j] = Math.max(matriz1[i][j], matriz2[i][j], matriz3[i][j]);
      }
  }
  return resultado;
}

// Superponer las matrices
const matrizSuperpuesta = superponerMatrices(matrizRigidez, matrizRigidez2, matrizRigidez3);

// Imprimir la matriz superpuesta
console.log("Matriz Superpuesta:");
console.log(matrizSuperpuesta);



  return (
    <>
      <div className="flex">
        <div className="flex-col w-[75%] m-auto">
          <p className=" text-lg text-emerald-700 font-bold my-4">
            03. Frecuencias y Modos de Vibración
          </p>
          <p className="text-sm my-4 text-justify">
            Estimación del Peso (P) según el Artículo 26 de la norma E.030, se
            calcula adicionando a la carga permanente y total de la edificación
            un porcentaje de la carga viva o sobrecarga, para este caso
            considere edificaciones de las categorías A y B, tomando el 50% de
            la carga viva.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex w-[75%] m-auto space-x-10 max-sm:flex-col max-sm:space-x-0  ">
          <div className="bg-emerald-700 rounded-md w-1/3 max-sm:w-full p-4">
            <div className="flex my-4 justify-between px-2 max-sm:px-0">
              <label className="font-medium text-gray-900 font justify-between  text-xs mx-2">
                Altura h1
              </label>
              <input
                className="dark:text-white text-gray-700 border border-solid rounded-md justify-center items-center text-center border-gray-300 w-[100px] text-xs py-1"
                placeholder="cm"
                value={h1}
                onChange={(e) => updateH1(parseFloat(e.target.value))}
                type="number"
              />
            </div>
            <div className="flex my-4 justify-between px-2 max-sm:px-0">
              <label className="font-medium text-gray-900 font justify-between  text-xs mx-2">
                Altura h2
              </label>
              <input
                className="dark:text-white text-gray-700 border border-solid rounded-md justify-center items-center text-center border-gray-300 w-[100px] text-xs py-1"
                placeholder="cm"
                value={h2}
                onChange={(e) => updateH2(parseFloat(e.target.value))}
                type="number"
              />
            </div>
            <div className="flex my-4 justify-between px-2 max-sm:px-0">
              <label className="font-medium text-gray-900 font justify-between  text-xs mx-2">
                filas columna
              </label>
              <input
                className="dark:text-white text-gray-700 border border-solid rounded-md justify-center items-center text-center border-gray-300 w-[100px] text-xs py-1"
                placeholder="cm"
                value={fcol}
                onChange={(e) => updateFcol(e.target.value)}
                type="number"
              />
            </div>
            <div className="flex my-4 justify-between px-2 max-sm:px-0">
              <label className="font-medium text-gray-900 font justify-between  text-xs mx-2">
                filas vigas
              </label>
              <input
                className="dark:text-white text-gray-700 border border-solid rounded-md justify-center items-center text-center border-gray-300 w-[100px] text-xs py-1"
                placeholder="cm"
                value={fvig}
                onChange={(e) => updateFvig(e.target.value)}
                type="number"
              />
            </div>
            <div className="flex my-4 justify-between px-2 max-sm:px-0">
              <label className="font-medium text-gray-900 font justify-between  text-xs mx-2">
                Size v1{" "}
              </label>
              <input
                className="dark:text-white text-gray-700 border border-solid rounded-md justify-center items-center text-center border-gray-300 w-[100px] text-xs py-1"
                placeholder="cm"
                value={v1}
                onChange={(e) => updateV1(e.target.value)}
                type="number"
              />
            </div>
          </div>

          <div className="overflow-x-auto w-2/3 max-sm:w-full">
            <p className="text-xs font-medium text-emerald-700 mb-6 max-sm:my-4">
              Resultados Previos:
            </p>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="">
                  <th className="py-2"></th>
                  <th className="text-xs py-2">Peso (tnf)</th>
                  <th className="text-xs py-2">Rigidez (tnf/m)</th>
                  <th className="text-xs py-2">
                    <p>Masas</p>
                    <p>tnf*seg^2/m</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Generar filas dinámicamente */}
                {Array.from({ length: inputValue2 }, (_, index) => (
                  <tr className="text-center text-xs" key={index}>
                    <th className="px-4 py-2">{inputValue2 - index}º Piso</th>
                    <td className="px-4 py-2">{pesosPorPiso[index]}</td>
                    <td className="px-4 py-2">{rigidezPorPiso[index]}</td>
                    <td className="px-4 py-2">{masasPorPiso[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex">
        <p className="flex w-[75%] m-auto text-xs pb-6">
          Nota : Estos Datos son fundamentales para el cálculo de los modos de
          vibración.
        </p>
      </div>
      <div className="flex w-[75%] m-auto space-x-10 max-sm:flex-col max-sm:space-x-0 mb-6">
        <div className="flex justify-center text-xs max-sm:text-[6px] ">
          <Matriz matriz={matrizSuperpuesta} />
        </div>
        <div>
          <div className="flex-col">
            <div className="font-bold">Matriz de Rigidez</div>
            <p className="text-sm my-4 text-justify">
              (cambiar esta edescrip)Estimación del Peso (P) según el Artículo
              26 de la norma E.030, se calcula adicionando a la carga permanente
              y total de la edificación un porcentaje de la carga viva o
              sobrecarga, para este caso considere edificaciones de las
              categorías A y B, tomando el 50% de la carga viva.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculoNodos

export const Matriz = ({ matriz }) => {
  return (
    <div>
      <h2 className='text-xs font-medium text-emerald-700 mb-2 max-sm:my-4'>Resultados Previos:</h2>
      <table>
        <tbody>
          {matriz.map((fila, indiceFila) => (
            <tr key={indiceFila}>
              {fila.map((valor, indiceColumna) => (
                <td key={indiceColumna}>{valor}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
