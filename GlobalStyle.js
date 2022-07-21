import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --orange: #da4900;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
        /* background: var(--darkGrey);
        color: var(--white); */
        scrollbar-width: thin;
        scrollbar-color: var(--orange) var(--darkGrey);
        scroll-behavior: smooth;
    }

    body {
        /* text-align: center; */
        background: var(--darkGrey);
        color: var(--white);
        counter-reset: section;
        /* margin-left: 10vw;
        margin-right: 10vw; */
        margin: 0px;


        @media screen and (max-width: 720px) {
            padding: 0px;
            margin-left: 5px;
            margin-right: 0px;
            width: 100vw;
        }

        hr#pageBreak{
            width: 200%;
            margin-left: -100%;
            margin-bottom: 0px;
            color: var(--orange);
        }

        h2.numberedHeadings::before {
            counter-increment: section;
            color: var(--orange);
            content: "0" counter(section) ".";
            margin-right: 10px;
        }

        h2.numberedHeadings {
            display: flex;
            flex-direction: row;

            @media screen and (max-width: 720px) {
            min-width: 280px;
        }
        }

        h2.numberedHeadings::after {
            content: "";
            display: block;
            position: relative;
            top: 15px;
            width: 300px;
            height: 1px;
            margin-left: 20px;
            background-color: var(--orange);

            @media screen and (max-width: 720px) {
            width: 100px;
            }
        }
    }
`;