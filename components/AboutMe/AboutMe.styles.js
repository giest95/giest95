import styled from "styled-components";

export const Wrapper = styled.section`
    background: whitesmoke;
    color: black;
    padding-top: 2vh;
    padding-left: 20vw;
    padding-right: 20vw;
    height: 50vh;
    /* width: 60vw; */

    @media screen and (max-width: 720px){
        padding-top: 10px;
        padding-left: 20px;
        padding-right: 15px;
        margin-left: -5px;
        margin-right: 0;
        width: 100vw;
        
        line-height: 25px;
        height: fit-content;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-areas: 
        'main right'
        'footer right';

    @media screen and (max-width: 720px) {
        display: grid;
        grid-template-areas: 
            'main'
            'footer';
    }
`;

export const Text = styled.section`
    grid-area: 'main';
`;

export const Image = styled.img`
    grid-area: 'right';
    width: 180px;
    height: 280px;
    border-radius: 15px;
    margin-left: 3vw;

    @media screen and (max-width: 720px) {
        grid-area: 'footer';
        width: 250px;
        height: 333px;
    }
`;