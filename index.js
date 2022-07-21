import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {<App />}
  </React.StrictMode>,
  document.getElementById('root')
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//testing
/* import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './testingStyles.css';

import TestingTabs from './components/TestingTabs';

function App() {
  return (
    <div>
      <TestingTabs />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement); */
