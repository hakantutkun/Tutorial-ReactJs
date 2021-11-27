// Import react
import React from 'react';

// Import Components
import Header from './components/Header';
import Home from './components/Home';

// Import Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GlobalStyle />
    </div>
  );
}

export default App;
