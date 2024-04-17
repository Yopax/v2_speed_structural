"use client"
import { ContextOneProvider } from "@/app/context/GeneralContext";
import React from "react";
import Predimensionamiento from "./Predimensionamiento";


function ContextApp() {
  return (
    <ContextOneProvider>
      <Predimensionamiento />
    </ContextOneProvider>
  );
}

export default ContextApp;