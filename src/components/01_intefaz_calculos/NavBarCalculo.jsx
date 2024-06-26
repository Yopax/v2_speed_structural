import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BarMovile = "text-gray-600 font-semibold hover:text-sky-700 max-[768px]:text-[12px] max-[320px]:text-[10px] dark:text-stone-200  "
const CenterBar="text-gray-600 font-semibold hover:text-blue-600 max-[768px]:text-[12px] max-[320px]:text-[10px] dark:text-stone-300"

function NavBarCalculo() {
    return (
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="navbar bg-white">
          <div className="navbar-start ">
            {/*Barra hamburguesa*/}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <li className={BarMovile}>
                    <Link href="/normas" target="blank">
                      Normas
                    </Link>
                  </li>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <li className={BarMovile}>
                    <Link href="/calculos/analisis" target="blank">
                      App
                    </Link>
                  </li>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <li className={BarMovile}>
                    <Link href="/about">Autor</Link>
                  </li>
                </motion.button>
              </ul>
            </div>
            <div className="flex flex-col">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="/">
                  <div className="max-[320px]:flex-col flex ml-[50px] max-[425px]:ml-0 max-[320px]:leading-none ">
                    <h5 className="font-bold mr-1 text-sky-700 hover:text-emerald-600 max-[768px]:text-[16px] ">
                      Speed
                    </h5>
                    <h5 className="font-bold  text-emerald-600 hover:text-sky-700 max-[768px]:text-[16px]">
                      Structural.
                    </h5>
                  </div>
                </Link>
              </motion.button>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-x-10 text-[14px]  mr-0 md:mr-[50px] max-[470px]:gap-4 max-[470px]:text-[12px] max-[320px]:text-[10px] max-[320px]:gap-x-3 ">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <li className={CenterBar}>
                  <Link href="/normas">Normas</Link>
                </li>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <li className={CenterBar}>
                  <Link target='_blank' href="/calculos/analisis">App</Link>
                </li>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <li className={CenterBar}>
                  <Link href="/about">Autor</Link>
                </li>
              </motion.button>
            </ul>
          </div>
          <div className="navbar-end ">
            <Link href="https://drive.google.com/uc?export=download&id=1GCSSfFEDgHazRhXfghiIS3HKh8k00Uyn">
              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.2 }}
              >
                <p className=" bg-emerald-600 hover:bg-blue-600 text-white text-sm leading-6 font-medium py-1 px-3 rounded-lg">
                  Descargar manual
                </p>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default NavBarCalculo;
