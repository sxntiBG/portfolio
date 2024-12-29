import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const Proyectos = ({ imgProyecto, nombreProyecto, descripcion, habilidades, urlRepositorio, urlDemo }) =>{
    return(
        <div className="card flex flex-col justify-center items-center mt-10 bg-white rounded-xl lg:w-[46.5%] shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="img bg-red-100 w-[95%] rounded-t-3xl">
                <img src={imgProyecto} alt="Proyecto 1" className="w-[100%] rounded-t-xl"/>
            </div>
            <div className="body-card px-4 pt-4">
                <h2 className="text-xl font-bold ">{nombreProyecto}</h2>
                <p className="py-2">{descripcion}</p>
            </div>
            <div className="tecnologias pb-4 pt-2 w-[95%] flex justify-start flex-wrap gap-2 mb-4 pl-2">
                {habilidades.map((habilidad, index) => (
                    <span key={index} className="px-2 py-1 bg-[#e3e2e7] text-gray-700 text-sm rounded-full">{habilidad}</span>
                ))}
            </div>
            <div className="flex justify-between items-center w-[100%] pl-4 pb-4 gap-2">
                <div className="flex items-center gap-2">
                <FiGithub className="text-[#a987c9] "/>
                <a href={urlRepositorio} target="_blank"  rel="noopener noreferrer" className="text-[#a987c9] hover:text-black">Ver repositorio</a>

                </div>
                <div className="flex items-center gap-2 pr-8">
                <FaExternalLinkAlt className="text-[#a987c9] "/>
                <a href={urlDemo} target="_blank"  rel="noopener noreferrer" className="text-[#a987c9] hover:text-black">Ver demo</a>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;