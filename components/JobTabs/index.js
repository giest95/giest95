import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//styles
import { Wrapper } from './JobTabs.styles';

const JobTabs = () => (
    <Wrapper>
        <div>
        <Tabs>
            <TabList>
            <Tab>
                USVenture
            </Tab>
            <Tab>
                Neenah Foundary
            </Tab>
            <Tab>
                ACC Property Management
            </Tab>
            </TabList>
            <TabPanel>
                <div className="panel-content">
                    <h3>Procure to Pay Specialist @ USVenture</h3>
                    <p className='time'>August 2020 - November 2021</p>
                    <ul>
                        <li>Used UIPath to remove the need for time-consuming or repetative tasks</li>
                        <li>Learned C# in order to tie processes into the system</li>
                        <li>Performed multiple accounting duties and clerical duties</li>
                        <ul>
                            <li>Manage invoice exceptions from 3rd party invoice system</li>
                            <li>Process payments including ACH, wire, and check</li>
                            <li>Post Journal entry reversals and corrections</li>
                            <li>Utilize D365, Certify, and Invoice Manager</li>
                        </ul>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="panel-content">
                    <h3>Accounts Payable @ Neenah Foundary</h3>
                    <p className='time'>March 2020</p>
                    <ul>
                        <li>Complete payments and control expenses by receiving, processing, verifying and reconciling invoices</li>
                        <li>Match invoices to checks, obtain all necessary signatures and distribute checks accordingly</li>
                        <li>Respond to vendor inquiries</li>
                        <li>Data entry and mail sorting</li>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="panel-content">
                    <h3>Accountant @ ACC Property Management</h3>
                    <p className='time'>March 2019 - December 2019</p>
                    <ul>
                        <li>Accounting duties for 15 properties</li>
                        <ul>
                            <li>Bank reconciliations</li>
                            <li>Monthly and quarterly financial statement preparation</li>
                            <li>Accounts Payable</li>
                            <li>Maintaining accurate resident ledgers</li>
                        </ul>
                    </ul>
                </div>
            </TabPanel>
        </Tabs>
        </div>
    </Wrapper>     
);

export default JobTabs;