"use client";
import NavBarCalculo from '@/components/01_intefaz_calculos/NavBarCalculo'
import Descripcion from '@/components/02_intefaz-landingpage/Descripcion';
import PresentacionHome from '@/components/02_intefaz-landingpage/PresentacionHome';
import React from 'react'

function page() {
  return (
    <>
     <NavBarCalculo />
     <PresentacionHome />
     <Descripcion />
    </>
  )
}

export default page