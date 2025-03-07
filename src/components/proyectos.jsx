import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Proyectos = ({ imgProyecto, nombreProyecto, descripcion, habilidades, urlRepositorio, urlDemo }) => {
    const handleRepoClick = (e) => {
        if (!urlRepositorio) {
            e.preventDefault();
            Swal.fire({
                icon: "warning",
                title: "Repositorio privado",
                text: "Este repositorio es privado!"
            });
        }
    };

    return (
        <div className="card flex flex-col  items-center mt-10  rounded-xl h-[650px] bg-white lg:w-[46.5%] shadow-md transition-shadow duration-300 hover:shadow-lg ">
            <div className="img bg-red-100 w-full rounded-t-3xl h-[250px]">
                <img src={imgProyecto} alt="Proyecto 1" className="w-[100%] rounded-t-xl h-full" />
            </div>
            <div className="body-card px-4 pt-4 h-[250px]">
                <h2 className="text-xl font-bold ">{nombreProyecto}</h2>
                <p className="py-2">{descripcion}</p>
            </div>
            <div className="tecnologias pb-4 pt-2 w-[95%] flex justify-start flex-wrap gap-2 mb-4 pl-2 h-[85px]">
                {habilidades.map((habilidad, index) => (
                    <span key={index} className="px-2 py-1 bg-[#e3e2e7] text-gray-700 text-sm rounded-full h-[30px]">{habilidad}</span>
                ))}
            </div>
            <div className="flex justify-between items-center w-[100%] pl-4 pb-4 gap-2">
                <div className="flex items-center gap-2">
                    <FiGithub className="text-[#a987c9] " />
                    <a
                        href={urlRepositorio || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a987c9] hover:text-black"
                        onClick={handleRepoClick}
                    >
                        Ver repositorio
                    </a>
                </div>
                <div className="flex items-center gap-2 pr-8">
                    <FaExternalLinkAlt className="text-[#a987c9] " />
                    <a href={urlDemo} target="_blank" rel="noopener noreferrer" className="text-[#a987c9] hover:text-black">Ver demo</a>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;
