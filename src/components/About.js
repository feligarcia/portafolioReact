import React from 'react'
import {AboutAvatar, AboutH2, AboutImg, AboutLocation, AboutName, AboutProfession, AboutStyle} from '../styleds/AboutStyled'

const About = () => {
    return(
        <AboutStyle className="About">
        <div className="About-container">
            <AboutAvatar className="About-avatar">
                <figure>
                <AboutImg src="https://avatars.githubusercontent.com/u/89276262?v=4" alt="Mi Avatar"/>
                    </figure>
                </AboutAvatar>
                <AboutName className="About-name">
                    <AboutH2>Juan Felipe Garcia</AboutH2>
                </AboutName>
                <AboutProfession className="About-profession">
                    <p>Desarrollador FrontEnd</p>
                </AboutProfession>
                <AboutLocation className="About-description">
                   <p>Medellín, Colombia</p>
                </AboutLocation>
                <div className="About-social">
                     Redes sociales
                </div>
            </div>
        </AboutStyle>
                    
                    
                    
)
}
export default About