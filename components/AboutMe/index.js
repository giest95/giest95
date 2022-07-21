import React from "react";

//styles
import { Wrapper, Content, Text, Image } from './AboutMe.styles';

//fade in
import Fade from 'react-reveal/Fade';

//image
import Me from '../../img/Me.jpg';

const AboutMe = () => (
    <Wrapper>
        <Fade>
        <h2 className="numberedHeadings">About Me</h2>
        <Content>
            <Text>
                <p>I am an accountant turned programmer. While in quarintine, two of my friends and I began developing a payment system that tied Discord to Stripe. From this, I found my passion for programming. Turns out there is nothing more satisfying than making an interface as user freindly as possible.{/* I attended school at UW-Stout where I graduated Magna Cum Laude with a B.S. in Business Administration. I performed all accounting duties for 15 low income housing complexes before being terminated due to underperfomance for not reaching 21 complexes. After this I moved on to a temp role with accounts payable for the Neenah foundry where I was laid off due to the start of the Pandemic. */}</p>
                <p>I saw the potential that programming has in accounting. I began learning UIPath to complete workflows and cut down the time needed to complete tasks, from hours to a couple of minutes. After this, I began attempting to tie these processes into the system to allow for full automation. However, this was about the time that I was told I had the wrong job title to continue working on things of this nature. It was at that moment when I knew it was time for me to find a role where I could be apart of a team developing automated sytems.</p>
                <p>I like coding because of how fast and automatic everything is once it is established. One of my favorite parts of programing is improving established and growing systems. I am an efficent, dedicated, and hard working learner that enjoys the trials that come with programming.</p>
            </Text>
            <Image src={Me} alt="MyPic" />
        </Content>
        </Fade>
    </Wrapper>
);

export default AboutMe;