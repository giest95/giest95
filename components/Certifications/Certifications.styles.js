import styled from "styled-components";

export const Wrapper = styled.section`
    background: lightgray;
    color: black;
    padding-top: 2vh;
    padding-left: 20vw;
    padding-right: 20vw;
    height: 60vh;
    /* margin-left: 5vw;
    margin-right: 5vw; */

    @media screen and (max-width: 720px){
        padding-top: 10px;
        padding-left: 20px;
        padding-right: 15px;
        margin-left: -5px;
        margin-right: 0;
        width: 100vw;
        height: fit-content;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    a{
        img{
            height: 400px;
        }
    }

    @media screen and (max-width: 720px){
        grid-template-columns: repeat(1, 1fr);

        a{
            img{
                height: 220px;
            }
        }
    }


`