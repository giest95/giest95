import React from "react";

//styles
import { Wrapper, Content } from './Jobs.styles';

//components
import JobTabs from "../JobTabs";

const Jobs = () => {
    return(
        <Wrapper>
            <h2 className="numberedHeadings">Where I've Worked</h2>
            <Content>
                <JobTabs />
            </Content>
        </Wrapper>
    )
};
export default Jobs;