"use client";
import Footer from '@/components/01_intefaz_calculos/Footer';
import NavBarCalculo from '@/components/01_intefaz_calculos/NavBarCalculo'
import Descripcion from '@/components/02_intefaz-landingpage/Descripcion';
import MyModal from '@/components/02_intefaz-landingpage/MyModal';
import PresentacionHome from '@/components/02_intefaz-landingpage/PresentacionHome';
import React from 'react'

function page() {
  return (
    <>
     <NavBarCalculo />
     <PresentacionHome />
     <Descripcion />
     <MyModal />
     <Footer />
    </>
  )
}

export default page