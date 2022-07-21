import React, { useEffect } from "react";

//Components
import Home from './components/Home';

//Styles
import { GlobalStyle } from './GlobalStyle'

const App = () => {
  useEffect(() => {
    document.title = "Alec Hooyman"
  }, [])
  return (
    <div className="App">
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
