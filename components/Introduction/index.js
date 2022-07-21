import React from "react";

//styles
import { Wrapper, Content } from './Introduction.styles';

const Introduction = () => (
    <Wrapper>
        <Content>
                <h1>Hello World! My name is,</h1>
                <h2 id="name">Alec Hooyman.</h2>
                <h3>I build what you need on the web.</h3>
                <p>I'm a software engineer specializing in back-end processes.</p>
        </Content>
    </Wrapper>
);

export default Introduction;