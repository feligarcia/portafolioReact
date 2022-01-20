import React from "react";
import { Contenedor, H2Styled } from "../styleds/H2Styled";

export const Experiencia = () =>{
    return(
        <Contenedor>
            <H2Styled name="Mi Experiencia" />
            <div className="Education-container">
                <div className="Education-item">
                    <h2>La Tiendita</h2>
                    <p>Desarrollo de la pagina Web y backend</p>
                </div>
            </div>
        </Contenedor>

    )
}
