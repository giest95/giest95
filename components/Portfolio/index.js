import React from "react";

//styles
import { Wrapper, ProjectsOdd, ProjectsEven } from './Portfolio.styles';

//fade in
import Fade from 'react-reveal/Fade';

//images
import Paycord from '../../img/paycord.png';
import NFT from '../../img/NFT.png'

const Portfolio = () => {
    return(
        <Wrapper>
            <Fade>
            <h2 className="numberedHeadings">Projects</h2>
            <ProjectsOdd>
            <a className="projectImage" href="https://www.paycord.net/v3/beta_dashboard.php" target={"_blank"} rel="noreferrer">
            <img style={{resizeMode: "cover", height: 350}} src={Paycord} alt="Paycord Site"/>
            </a>

            <a className="projectName" href="https://www.paycord.net/v3/beta_dashboard.php" target={"_blank"} rel="noreferrer"><h3>Paycord</h3></a>

            <p>A dashboard for Discord server owners to process payments for roles within their community. This has been used on over 100 Servers and processed over $500,000 in transactions. (Requires Discord sign in)</p>

            <ul>
                <li>API</li>
                <li>JavaScript</li>
                <li>Azure</li>
                <li>PHP</li>
                <li>MySQL</li>
            </ul>

            </ProjectsOdd>
            </Fade>

            <Fade>
            <ProjectsEven>
            <a className="projectImage" href="https://github.com/giest95/BlenderNFT" target={"_blank"} rel="noreferrer">
            <img style={{resizeMode: "cover", height: 500}} src={NFT} alt="Blender NFT"/>
            </a>

            <a className="projectName" href="https://github.com/giest95/BlenderNFT" target={"_blank"} rel="noreferrer"><h3>Blender Procedural Generator</h3></a>

            <p>A dashboard for Discord server owners to process payments for roles within their community. This has been used on over 100 Servers and processed over $500,000 in transactions. (Requires Discord sign in)</p>

            <ul>
                <li>Python</li>
                <li>Blender API</li>
            </ul>

            </ProjectsEven>
            </Fade>
        </Wrapper>
    )
};
export default Portfolio;