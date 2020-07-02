import React, { useContext, useEffect } from 'react';
import { DataContext, DataProvider } from './AppState';
import Home from './Home';
import './App.css';
import './Uikit.css';

function App() {
	/*const { Dark } = useContext(DataContext);
	const [ dark, setDark ] = Dark;
	const isDark = () => {
		if(dark) {
			return("dark-mode");
			}
		else {
			return("");
			}
			};*/
 
  return (
    <DataProvider>
    <div className="">
       <Home />
    </div>
    </DataProvider>
  );
}

export default App;
