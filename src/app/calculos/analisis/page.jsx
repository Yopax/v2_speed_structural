"use client"
import ComponentContext3 from '@/components/01_intefaz_calculos/ComponentContext3'
import Intro from '@/components/01_intefaz_calculos/Intro'
import NavBarCalculo from '@/components/01_intefaz_calculos/NavBarCalculo'
import OnePre from '@/components/01_intefaz_calculos/OnePre'
import React from 'react'
import { ContextOneProvider } from "@/app/context/GeneralContext";
import Predimensionamiento from '@/components/01_intefaz_calculos/Predimensionamiento'

function page() {
  return (
    <>
      <ContextOneProvider>
        <NavBarCalculo />
        <Intro />
        <OnePre />
        <Predimensionamiento />
        <ComponentContext3 />
      </ContextOneProvider>
    </>
  );
}

export default page