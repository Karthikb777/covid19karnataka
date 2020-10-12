import React, { useContext } from 'react';
import { DataContext } from './AppState';
import Home from './Home';
import './App.css';
import './Uikit.css';

// this is a wrapper function, mainly implemented to due to ensure proper working of dark mode
function Wrapper() {
	const { Dark } = useContext(DataContext);
	const [ dark ] = Dark;
	const isDark = () => {
		if(dark) {
			return("dark-mode");
        }
		else {
			return("");
			}
        };
 
    return (
        <div className={isDark()}>
           <Home />
        </div>
      );
    }
    
    export default Wrapper;
    