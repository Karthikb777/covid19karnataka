import React, { useContext } from 'react';
import { DataContext } from '../AppState';

function About() {
	const { Dark } = useContext(DataContext);
	const [ dark, setDark ] = Dark;
	const isDark = () => {
		if(dark) {
			return("dark-mode");
			}
		else {
			return("");
			}
			};
	const isDarkText = () => {
		if(dark) {
			return("uk-text-lead-dark");
			}
		else {
			return("uk-text-lead");
			}
			};
	
	return(
	 <div className={isDark()}>
		<div className={isDarkText()}>About</div>
		<div className={isDark()}><p>This is a project created to track the daily and total statistics of covid 19 cases in Karnataka.<br/>
			The source of the data is from an open source API from <a href="https://github.com/covid19india/api" target="_blank" rel="noopener noreferrer">covid19india.org.</a><br/>
			This project is made using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">Reactjs.</a><br/>
			The charts are made using <a href="https://recharts.org/" target="_blank" rel="noopener noreferrer">Recharts.</a><br/>
			The source code for this project can be found <a href="https://github.com/Karthikb777/covid19karnataka/" target="_blank" rel="noopener noreferrer">here.</a>
			<br/><br/>

			<p>Changelog:<br/><br/>
			
				version 1.2:<br/>
					- Updated the site due to changes in the covid19india API.<br/>
					- Cleaned up the code.<br/>
					- Some bug fixes.<br/><br/>
	
				version 1.1:<br/>
					- Added dark mode.<br/><br/>
	
				version 1.0:<br/>
					- Initial version.<br/>
				</p>
			
		    <del>A message for the people who are viewing this site on anything other than a smartphone.
			This site is made on a smartphone because i don't have access to a laptop or a desktop. So, I develop on my android smartphone only.
			So, please don't hate me if you see things out of place on this site because of resizing issues. I hope you understand. Thank you! </del>

			Was made on a smartphone. <br/><br/>
			
			Stay safe, wear a mask and let's work together to stop Covid19 in our country!
		</p></div>
	 </div>
	);
}

export default About;