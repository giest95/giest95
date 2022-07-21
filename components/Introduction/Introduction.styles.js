import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 65vh;
    text-align: left;
    margin-top: 30vh;
    padding-left: 10vw;

    @media screen and (max-width: 720px){
        height: 100vh;
        margin-bottom: 15vh;
        margin-top: 15vh;
        margin-left: 5px;
        padding-left: 0;
    }
`;

export const Content = styled.section`
    line-height: 1;

    h1 {
            font-size: 2rem;
            font-weight: 600;
        }

    h2 {
        font-size: 3.5rem
    }

    h2#name {
        color: var(--orange);
    }

    h3 {
        font-size: 2rem;
        font-weight: 600;
    }

    p {
        font-size: 1.5rem;
    }
`;