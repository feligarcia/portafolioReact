import React from 'react'
import styled from 'styled-components'
import About from '../components/About'
import { Education } from '../components/Education'
import { Education1 } from '../components/Education'
import { Experiencia } from '../components/Experiencia'
import { Habilidades } from '../components/Habilidades'
import { Certificaciones } from '../components/Certificaciones'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    justify-content: center;
    align-items: center;
    
    font-family: system-ui;
    color: #4424A1;
    font-size: 1em;
    text-shadow: 1px 1px rgba(0,0,0,.5);
`
const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width:100%;
    `
const StyledP = styled.p`
color: #f5e960;
    padding: .15em .4em;
    background: #dfb2f4;
    border-radius: 20px;
    border: 2px solid #f2f5ff;
    &:hover{
        background: black;
    }
`
const StyledExp = styled.div`
    border:solid;
    border-color:#FFC6C1;
    `
const StyledEdu = styled.div`
border:solid;
border-color:#2C6072;
`
const StyledCert = styled.div`
    border:solid;
    border-color:#50E063;
    `
const StyledHab = styled.div`
border:solid;
border-color:#37E39C;
`



const App = () =>{
    return (
        
        <StyledDiv>
            <About />
            <StyledInfo>        
                <StyledEdu> <Education /> 
                <Education1 /> </StyledEdu>
                <StyledExp> <Experiencia /> </StyledExp>
              <StyledCert> <Certificaciones /> </StyledCert> 
              <StyledHab>  <Habilidades /> </StyledHab>
            </StyledInfo>
        </StyledDiv>
        
    )
}
export default App