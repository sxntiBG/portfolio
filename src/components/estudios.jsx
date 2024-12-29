import React from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

const Estudios = ({
  carrera,
  nombre,
  anioComienzo,
  anioFinal,
  mesComienzo,
  mesFinal,
  rutaCertificado
}) => {
  const fecha = () => {
    if (
      anioFinal === undefined &&
      mesComienzo === undefined &&
      mesFinal === undefined
    ) {
      return `${anioComienzo}`;
    } else if (mesFinal === undefined) {
      return `${mesComienzo}, ${anioComienzo} - ${anioFinal}`;
    } else {
      return `${mesComienzo}, ${anioComienzo} - ${mesFinal}, ${anioFinal}`;
    }
  };

  return (
    <div className="card flex flex-col justify-center items-start mt-10 bg-white p-6 rounded-xl lg:w-[46.5%] w-full shadow-md transition-shadow duration-300 hover:shadow-lg">
      <h2 className="text-xl font-bold mb-2">{carrera}</h2>
      <p className="text-lg font-semibold mb-2 text-[#a987c9]">{nombre}</p>
      <span className="flex justify-start items-center gap-2">
        <IoCalendarClearOutline /> {fecha()}
      </span>
      {rutaCertificado !== undefined && (
  <div className="flex items-center gap-2">
    <LuDownload className="text-[#a987c9]" />
    <a
      href={rutaCertificado}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#a987c9] hover:text-black"
    >
      Ver certificado
    </a>
  </div>
)}

    </div>
  );
};

export default Estudios;
