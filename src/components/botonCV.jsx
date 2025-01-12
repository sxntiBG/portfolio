import { React, useState } from 'react'
import { LuDownload } from "react-icons/lu";

export default function BotonCV() {
  const [showCVOptions, setShowCVOptions] = useState(false)

  const toggleCVOptions = () => {
    setShowCVOptions(!showCVOptions)
  }

  return (
    <div className="relative">

      <button 
        onClick={toggleCVOptions}
        className="bg-[#a987c9] text-white px-8 py-2 rounded-full mb-2 transition-transform transform hover:font-bold hover:scale-105 hover:bg-[#915bb8] duration-300 ease-in-out flex items-center gap-2"
      >
        <LuDownload className="text-white"/>
        Descargar CV
      </button>
      {showCVOptions && (
        <div className="absolute mt-2 w-full bg-white  rounded-md shadow-lg z-10">
          <a 
            href="./assets/CV/Hoja de vida - Santiago Zapata Ospina.pdf" 
            download 
            className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 "
            onClick={() => setShowCVOptions(false)}
          >
            CV
          </a>
          <a 
            href="./assets/CV/CV-SantiagoZapataOspina.pdf" 
            download 
            className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 "
            onClick={() => setShowCVOptions(false)}
          >
            CV (ATS)
          </a>
        </div>
      )}
    </div>
  )
}
