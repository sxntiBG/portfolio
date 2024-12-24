import React from "react";

const Habilidades = ({ urlImagen, nombre }) => {
    return(
        <div className="habilidades">
            <img src={urlImagen} alt={nombre} className="imgHabilidad"/>
            <p className="nombreHabilidad">{nombre}</p>
        </div>
    );
}

export default Habilidades;