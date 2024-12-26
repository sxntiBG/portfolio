import React from "react";

const Experiencia = ({ imgEmpresa, nombreEmpresa, cargo, anioComienzo, anioFinal, mesComienzo, mesFinal, descripcion, habilidades }) => {

    const fecha = () =>{
        if(anioFinal === undefined && mesComienzo === undefined && mesFinal === undefined){
            return `${anioComienzo}`;
        }else if(mesFinal === undefined){
            return `${mesComienzo}, ${anioComienzo} - ${anioFinal}`;
        }else{
            return `${mesComienzo}, ${anioComienzo} - ${mesFinal}, ${anioFinal}`;
        }
    }

    return(
        <div className="flex justify-around items-start mt-10 bg-white p-6 rounded-xl w-[95%] shadow-md transition-shadow duration-300 hover:shadow-lg">
        <div className="img">
            <img src={imgEmpresa} alt={nombreEmpresa} className="rounded-lg w-[100px] shadow-md transition-shadow duration-300 hover:shadow-lg"/>
        </div>
            <div className="informacion-empresa w-[80%]">
            <h2 className="text-xl font-bold text-[#a987c9] mb-2">{cargo}</h2>
            <p className="text-lg font-semibold mb-2">{nombreEmpresa}</p>
            <p className="text-sm text-[#a987c9] mb-4">{fecha()}</p>
            <div className="tecnologias pb-4 pt-2 w-[100%] flex justify-start flex-wrap gap-2 mb-4 ">
                {habilidades.map((habilidad, index) => (
                    <span key={index} className="px-2 py-1 bg-[#e3e2e7] text-gray-700 text-sm rounded-full">{habilidad}</span>
                ))}
            </div>
            <p>{descripcion}</p>
        </div>
    </div>
    );
}

export default Experiencia;