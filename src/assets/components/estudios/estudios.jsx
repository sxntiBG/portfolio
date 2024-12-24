import React from "react";

const Estudios = ({ carrera, nombre, anioInicio, anioFinal }) =>{
    return(
        <div className="card">
            <h2>{carrera}</h2>
            <p>{nombre}</p>
            <span><img src="" alt="Calendario" /> {anioFinal === null ? anioInicio : `${anioInicio} - ${anioFinal}`} </span>
        </div>
    );
}

export default Estudios;