import React from "react";

const Proyectos = ({ imgProyecto, nombreProyecto, descripcion, habilidades, urlRepositorio }) =>{
    return(
        <div className="card">
            <div className="img">
                <img src={imgProyecto} alt="Proyecto 1" />
            </div>
            <div className="body-card">
                <h2>{nombreProyecto}</h2>
                <p>{descripcion}</p>
            </div>
            <div className="tecnologias">
                {habilidades.map((habilidad, index) => (
                    <span key={index}>{habilidad}</span>
                ))}
            </div>
            <div className="repositorio">
                <img src="" alt="GitHub" />
                <a href={urlRepositorio}>Ver repositorio</a>
            </div>
        </div>
    );
}

export default Proyectos;