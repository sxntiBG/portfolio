import { React, useState } from 'react'
import { LuDownload } from "react-icons/lu";

export default function BotonCV() {

  return (
    <div className="relative">
      <a href="./assets/CV/CV - Santiago Zapata Ospina.pdf" 
        download>
      <button 
        className="bg-[#a987c9] text-white px-8 py-2 rounded-full mb-2 transition-transform transform hover:font-bold hover:scale-105 hover:bg-[#915bb8] duration-300 ease-in-out flex items-center gap-2"
      >
        <LuDownload className="text-white"/>
        Descargar CV
      </button>
      </a>
    </div>
  )
}
