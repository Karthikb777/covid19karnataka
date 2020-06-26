import React, { useContext, useEffect } from 'react';
import { DataContext, DataProvider } from './AppState';
import Home from './Home';
import './App.css';

function App() {
 
  return (
    <DataProvider>
    <div className="App">
       <Home />
    </div>
    </DataProvider>
  );
}

export default App;
