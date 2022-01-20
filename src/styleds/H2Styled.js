import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
font-family: 'Roboto', sans-serif;
font-weight: 200;
letter-spacing: 8px;
margin: 1em 0 0 0;
color: #448AFF;
text-align: left;
`;

export const Contenedor = styled.div`


`;


export const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>