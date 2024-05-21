"use client";
import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import NavBarCalculo from '@/components/01_intefaz_calculos/NavBarCalculo'



function page() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <NavBarCalculo />
                <div className="min-h-screen  flex flex-col justify-center mt-20 ">
                    <div className="w-[90%] px-6 bg-stone-100 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
                        <div className="flex max-w-prose mx-auto lg:text-lg">
                            <h1 className="prose text-2xl font-bold text-sky-500 mr-2">
                                Speed
                            </h1>
                            <h2 className="prose text-2xl font-bold text-gray-500">
                                Enterprise
                            </h2>
                        </div>
                        <div className="flex max-w-prose mx-auto lg:text-lg">
                            <p className="prose text-xs font-normal text-gray-500">
                                <em>Fundado por Barreto Darli ©2022</em>
                            </p>
                        </div>
                        <div className='flex lg:text-lg max-w-prose mx-auto mt-4'>
                            <div className='h-[310px] w-1/3 bg-red-400 mr-4'>contenedor 1</div>
                            <div className='h-[310px] w-2/3 bg-sky-400'>contenedor 2</div>
                        </div>



                        <Link href="/">
                            <button className="text-sm rounded-lg mt-5 mx-14 bg-emerald-700 px-4 py-2 text-white font-medium">
                                Volver al Inicio
                            </button>
                        </Link>
                    </div>

                </div>
            </motion.div>
        </>
    )
}

export default page