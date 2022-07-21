import React from "react";

//fade in
import Fade from 'react-reveal/Fade';

//components
import Header from "./Header";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Certifications from "./Certifications";
import Portfolio from "./Portfolio";
import Jobs from "./Jobs";
import Footer from "./Footer";


const Home = () => {
    return (
        <>
            <Header />
            <Introduction />
            <hr id="pageBreak"/>
            <AboutMe />
            <Certifications />
            <Portfolio />
            <Jobs />
            <Footer />
        </>
    )
};

export default Home;