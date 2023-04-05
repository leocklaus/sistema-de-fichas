import React from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { SellersContextProvider } from './contexts/SellersContext';

function App() {
  return (
    <>
      <SellersContextProvider>
        <Router />
        <GlobalStyles />
      </SellersContextProvider>
    </>
  );
}

export default App;
