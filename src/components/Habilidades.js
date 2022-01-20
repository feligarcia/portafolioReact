import React from "react";
import { Contenedor, H2Styled } from "../styleds/H2Styled";

export const Habilidades = () =>{
    return(
        <Contenedor>
            <H2Styled name="Habilidades" />
            <div className="Education-container">
                <div className="Education-item">
                    <h2>Conductor profesional</h2>
                    <p>Conducción de vehiculos carreras drone</p>
                    <h2>Fotografia</h2>
                    <p>Fotografo freelance National Geographic</p>
                </div>
            </div>
        </Contenedor>

    )
}
