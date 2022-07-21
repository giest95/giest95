import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-bottom: 60px;
    text-align: center;
    border-bottom: 1px solid var(--orange);
    position: relative;
    margin-left: calc(50% - 49vw);
    width: 98vw;

    @media screen and (max-width: 720px) {
        padding-top: 15px;
    }
`;

export const Resume = styled.a`
    display: block;
    width: 100px;
    height: fit-content;
    padding: 8px;
    text-align: center;
    border-radius: 5px;
    border: 2px solid var(--orange);
    color: white;
    line-height: 25px;
    position: absolute;
    left: 5px;
    text-decoration: none;

    @media screen and (max-width: 720px) {
        width: 80px;
    }
`;

export const ContactMe = styled.button`
    display: block;
    position: absolute;
    bottom: 5px;
    right: 5px;
    border-radius: 4px;
    border-color: var(--orange);
    padding: 10px;
    width: 100px;
    margin: 10px;
    line-height: 20px;
    background: var(--darkGrey);
    color: white;
    

    @media screen and (max-width: 720px) {
        width: 95px;
        visibility: hidden;
    }
`;

export const TooltipText = styled.span`
    color: #000;
    background: white;
`;

export const ContactMePhone = styled.a`
    visibility: hidden;
    display: block;
    width: 110px;
    height: fit-content;
    padding: 8px;
    text-align: center;
    border-radius: 5px;
    border: 2px solid var(--orange);
    color: white;
    line-height: 25px;
    position: absolute;
    right: 5px;
    text-decoration: none;

    @media screen and (max-width: 720px) {
        visibility: visible;
    }
`;
