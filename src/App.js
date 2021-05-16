import React from 'react';
import { DataProvider } from './AppState';
import Wrapper from './Wrapper';
import './App.css';
import './Uikit.css';

function App() { 
  return (
    <DataProvider>
    <div className=''>
       <Wrapper />
    </div>
    </DataProvider>
  );
}
export default App;
