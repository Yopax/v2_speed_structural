"use client";
import { motion } from "framer-motion";
import NavBarCalculo from '@/components/01_intefaz_calculos/NavBarCalculo'
import React from 'react'
import About from "@/components/05_interfaz_about/About";

function page() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <NavBarCalculo />
        <About />
      </motion.div>
    </>
  )
}

export default page