"use client"
import { motion } from "framer-motion";
import ComponentContext3 from '@/components/01_intefaz_calculos/ComponentContext3'
import Intro from '@/components/01_intefaz_calculos/Intro'
import NavBarCalculo from '@/components/01_intefaz_calculos/NavBarCalculo'
import OnePre from '@/components/01_intefaz_calculos/OnePre'
import React from 'react'
import { ContextOneProvider } from "@/app/context/GeneralContext";
import Predimensionamiento from '@/components/01_intefaz_calculos/Predimensionamiento'
import CalculoNodos from '@/components/01_intefaz_calculos/CalculoNodos'
import Footer from '@/components/01_intefaz_calculos/Footer'

function page() {
  return (
    <>
      <ContextOneProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <NavBarCalculo />
        <Intro />
        <OnePre />
        <Predimensionamiento />

        <ComponentContext3 />
        <Footer />
        </motion.div>
      </ContextOneProvider>
    </>
  );
}

export default page