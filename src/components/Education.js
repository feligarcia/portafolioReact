import React from "react";
import { Contenedor, H2Styled } from "../styleds/H2Styled";

export const Education = () =>{
    return(
        <Contenedor>
            <H2Styled name="Mis estudios" />
            <div className="Education-container">
                <div className="Education-item">
                    <h2>La academia Geek <span>2022</span></h2>
                    <p>Desarrollo Front-End</p>
                </div>
            </div>
        </Contenedor>

    )
}

export const Education1 = () =>{
    return(
        <Contenedor>
            
            <div className="Education-container">
                <div className="Education-item">
                    <h2>Google Academy</h2>
                    <p>Certificacion en Google Cloud</p>
                </div>
            </div>
        </Contenedor>

    )
}
