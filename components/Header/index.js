import React from "react";

//tooltip for contact me button
import ReactTooltip from 'react-tooltip';

//styles
import { Wrapper, Resume, ContactMe, TooltipText, ContactMePhone } from "./Header.styles";

//Assets
import pdf from '../../Assets/Alec Hooyman Resume.pdf';

function copyEmail() {
    navigator.clipboard.writeText("alechooyman@gmail.com");
    var tooltip = document.getElementById("toolTipText");
    tooltip.innerHTML = "Email Address Copied!"
};
  
function resetTooltipText() {
    var tooltip = document.getElementById("toolTipText");
    tooltip.innerHTML = "Copy Email to Clipboard"
};

const Header = () => (
    <Wrapper>
        <Resume href={pdf} target="_blank">
            Resumé
        </Resume>
            <ContactMe onClick={copyEmail} onMouseOut={resetTooltipText} data-tip data-for="copyEmail">
                Contact Me!
            </ContactMe>
            <ContactMePhone href="mailto: alechooyman@gmail.com">
                Contact Me!
            </ContactMePhone>
            <ReactTooltip id="copyEmail" place="bottom" effect="solid" type="light">
                <TooltipText id='toolTipText'>
                    Copy Email to Clipboard
                </TooltipText>
            </ReactTooltip>
    </Wrapper>
);

export default Header;