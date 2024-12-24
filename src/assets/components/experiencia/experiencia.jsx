import React from "react";

const Experiencia = ({ imgEmpresa, nombreEmpresa, cargo, anioComienzo, anioFinal, descripcion }) => {
    return(
        <div className="card">
        <div className="img">
            <img src={imgEmpresa} alt={nombreEmpresa} />
        </div>
        <div className="informacion-empresa">
            <h2>{cargo}</h2>
            <p>{nombreEmpresa}</p>
            <p>{anioFinal === null ? anioComienzo : `${anioComienzo} - ${anioFinal}`}</p>
            <p>{descripcion}</p>
        </div>
    </div>
    );
}

export default Experiencia;