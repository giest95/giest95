import styled from 'styled-components';

export const Wrapper = styled.section`
background: lightgray;
color: black;
padding-top: 2vh;
padding-left: 20vw;
padding-right: 20vw;
/* margin-left: 5vw;
margin-right: 5vw; */
height: 40vh;

@media screen and (max-width: 720px){
        height: 900px;
        margin-left: -5px;
        padding-top: 0px;
        padding-left: 15px;
        padding-right: 20px;
        width: 100vw;
        line-height: 25px;

        h2{
            position: relative;
            top: 500;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: stretch;

    @media screen and (max-width: 720px){
        padding-top: 0px;
        margin-top: 0px;
    }
`;

export const Tabs = styled.div`
 margin-right: 5px;
 width: 15vw;
`;

export const Panes = styled.div`
    width: 50vw;
`;
