import styled from "styled-components";

export const Wrapper = styled.section`
    background: whitesmoke;
    color: black;
    padding-top: 2vh;
    padding-left: 20vw;
    padding-right: 20vw;
    height: 125vh;
    /* margin-left: 5vw;
    margin-right: 5vw; */

    @media screen and (max-width: 720px){
        margin-left: -5px;
        padding-left: 20px;
        height: 900px;
        max-width: 100vw;

        .projectImage{
            visibility: hidden;
        }
    }
`;

export const ProjectsOdd = styled.div`
    position: relative;
    float: left;
    padding-bottom: 50px;

    @media screen and (max-width: 720px){
        max-width: 100vw;
    }

    img{
        border-radius: 5px;
    }

    a.projectName{
        text-decoration: none;
        color: var(--orange);
        position: absolute;
        top: 25px;
        right: -400px;
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px){
            position: relative;
            right: 0px;
            top: -350px;
        }
        

        :visited{
            color: var(--orange);
        }
    }

    h3{
        margin: 0px;
    }

    p{
        position: absolute;
        top: 75px;
        right: -400px;
        width: 450px;
        padding: 25px;
        border-radius: 10px;
        background: lightgray;
        box-shadow: 2px 2px 1px gray;

        @media screen and (max-width: 720px){
            left: 0px;
            top: 50px;
            width: 90vw;
        }
    }

    ul{
        position: absolute;
        left: 750px;
        bottom: 150px;
        list-style-type: none;
        margin: 0;
        padding: 0;
        opacity: 75%;

        @media screen and (max-width: 720px){
            left: 0px;
            bottom: 175px;
        }

        li{
            display: inline;
            padding-right: 10px;
        }
    }
`;

export const ProjectsEven = styled.div`
    position: relative;
    float: right;
    padding-bottom: 50px;
    padding-right: 20px;

    img{
        border-radius: 5px;
        right: 10px;
    }

    a.projectName{
        text-decoration: none;
        color: var(--orange);
        position: absolute;
        top: 50px;
        left: -675px;
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px){
            top: -100px;
            left: 230px;
        }

        :visited{
            color: var(--orange);
        }
    }

    h3{
        margin: 0px;
        max-width: 500px;
        padding-left: 20px;
    }

    p{
        position: absolute;
        top: 150px;
        left: -400px;
        width: 450px;
        padding: 25px;
        border-radius: 10px;
        background: lightgray;
        box-shadow: 2px 2px 1px gray;

        @media screen and (max-width: 720px){
            top: 50px;
            left: 250px;
            width: 90vw;
        }
    }

    ul{
        position: absolute;
        right: 650px;
        bottom: 200px;
        list-style-type: none;
        margin: 0;
        padding: 0;
        opacity: 75%;
        width: 200px;

        @media screen and (max-width: 720px){
            right: 30px;
            bottom: 275px;
        }

        li{
            display: inline;
            padding-right: 10px;
            height: 5px;
        }
    }
`;