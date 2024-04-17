"use client"
import ContextApp from '@/components/01_intefaz_calculos/ContextApp'
import Intro from '@/components/01_intefaz_calculos/Intro'
import NavBarCalculo from '@/components/01_intefaz_calculos/NavBarCalculo'
import OnePre from '@/components/01_intefaz_calculos/OnePre'
import TabContent from '@/components/01_intefaz_calculos/TabContent'
import React from 'react'

function page() {
  return (
    <>
      <NavBarCalculo />
      <Intro />
      <OnePre />
      <ContextApp />
      
    </>
  )
}

export default page