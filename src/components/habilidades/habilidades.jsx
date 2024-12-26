import React from "react";

const Habilidades = ({ urlImagen, nombre }) => {
  return (
    <div className="habilidades flex flex-col justify-center items-center mt-10 bg-white p-6 w-[20%] h-[150px] rounded-xl group shadow-md transition-shadow duration-300 hover:shadow-lg">
      <img
        src={urlImagen}
        alt={nombre}
        className="imgHabilidad w-[60px] transition-transform duration-300 group-hover:scale-110"
      />
      <p className="nombreHabilidad font-bold mt-3 transition-transform duration-300 group-hover:scale-110">
        {nombre}
      </p>
    </div>
  );
};

export default Habilidades;
