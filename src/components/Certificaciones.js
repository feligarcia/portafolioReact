import React from "react";
import { Contenedor, H2Styled } from "../styleds/H2Styled";

export const Certificaciones = () =>{
    return(
        <Contenedor>
            <H2Styled name="Certificaciones" />
            <div className="Education-container">
                <div className="Education-item">
                    <h2>Windows Azure</h2>
                    <p>Manejo de la nube de microsoft</p>
                </div>
            </div>
        </Contenedor>

    )
}
