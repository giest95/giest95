import React from "react";

//styles
import { Wrapper, Content } from "./Certifications.styles";

//fade in
import Fade from 'react-reveal/Fade';

//images
import AlgoritmicToolbox from '../../img/Algorithmic Toolbox.png';
import AzureFundamentals from '../../img/Azure Fundamentals.png';

const Certifications = () => (
    <Wrapper>
        <Fade>
        <h2 className="numberedHeadings">Certifications</h2>
        <Content>
        <a href="https://www.credly.com/earner/earned/badge/21857c63-909d-481b-a693-8c0f983f2308" target={"_blank"}>
            <img style={{resizeMode: "cover"}} src={AzureFundamentals} alt="Azure Credentials"/>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/verify/J86MGQFBPL8N" target={"_blank"}>
            <img style={{resizeMode: "cover"}} src={AlgoritmicToolbox} alt="Coursera Credentials"/>
        </a>
        </Content>
        </Fade>
    </Wrapper>
);

export default Certifications;