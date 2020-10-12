import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { DataContext, DataProvider } from './AppState';
import StateTotalCases from './StateTotalCases';
import Search from './Search';
import './Uikit.css';
import Districts from './Districts';
import DailyData from './components/DailyData';
import DistrictDailyData from './components/DistrictDailyData';
import About from './components/About';


function Home() {
const { Confirmed, Recovered, Deceased, District, DistrictDaily, Total, Dark } = useContext(DataContext);
const [ confirmed, setConfirmed ] = Confirmed;
const [ recovered, setRecovered ] = Recovered;
const [ deceased, setDeceased ]   = Deceased;
const [ districtData, setDistrictData ] = District;
const [ districtsDaily, setDistrictsDaily ] = DistrictDaily;
const [ total, setTotal ] = Total;
const [ dark, setDark ] = Dark;
const [ updated, setUpdated ] = useState("");

  useEffect(() => {
    setDark(false);
    fetchData();
    }, [] );  	

   const fetchData = async () => {
   const fetchDistrictData = await fetch('https://api.covid19india.org/v2/state_district_wise.json');
   const districtRes = await fetchDistrictData.json();
   districtRes.filter( res => {
   	if(res.statecode === "KA") {
       res.districtData.map( dist => {
       	setDistrictData( prev => [...prev,dist]);
		 });
	}
});

    const totalData = await fetch('https://api.covid19india.org/v3/data.json');
    const totalRes = await totalData.json();
    setTotal(totalRes.KA.total);
    setUpdated(totalRes.KA.meta.tested.last_updated);
	
	/* District daily data feature is removed because covid19india api stopped providing districy daily data */

    const districtDaily = await fetch('https://api.covid19india.org/state_district_wise.json');
	const districtDailyRes = await districtDaily.json();
	console.log(districtDailyRes.Karnataka.districtData);
    setDistrictsDaily(districtDailyRes.Karnataka.districtData);

    // the code below is used to fetch data for creating graphs for daily cases
    const testData = await fetch('https://api.covid19india.org/states_daily.json');
    const testres = await testData.json();
    testres.states_daily.map(state => { 
    	switch(state.status) {
    	case 'Confirmed': setConfirmed( prevData => [...prevData, { name: state.date.toString(), value: parseInt(state.ka) }]);
    				break;
        case 'Recovered': setRecovered( prevData => [...prevData, { name: state.date.toString(), value: parseInt(state.ka) }]);
        			break;
        case 'Deceased': setDeceased( prevData => [...prevData, { name: state.date.toString(), value: parseInt(state.ka) }]);
        			break;        
}
    	});  
};

	const isDark = () => {
		if(dark) {
			return("uk-container dark-mode");
			}
		else {
			return("uk-container light-mode");
			}
			};

  if(confirmed === undefined || recovered === undefined || deceased === undefined) { 
 return(<div className="uk-text-meta">Loading...</div>);  
  }; 
// district search functionality testing
/*districtData.map( dist => {
	if(dist.district.toLowerCase().includes("ba")) {
	console.log(dist.district);
	}
	});*/
  return(
  <Router>
  <Switch>
    
	<div className={isDark()}>
       <Header updated={updated} tested={total.tested} />
       <Route path='/covid19karnataka' exact component={StateTotalCases} />
       <Route path='/covid19karnataka' exact component={Districts} />
       <Route path='/district/:dist' exact component={DistrictDailyData} />
       <Route path='/:case' exact component={DailyData} />
       <Route path='/about' exact component={About} />
       <div className="uk-margin-large-top"></div>
    </div>
	
    </Switch>
    </Router>
  );
};

function Header({ updated, tested }) {
	const { Dark } = useContext(DataContext);
	const [ dark, setDark ] = Dark;
		
	const toggleTheme = () => {
		setDark(!dark);
		};
		
	return(
	<>
	<nav className="uk-navbar uk-margin-small-top" uk-navbar>
    <div className="uk-navbar-left">

        <Link className='uk-link-muted' to="/covid19karnataka"><div className="uk-navbar-item"><div className="uk-logo uk-position-center-left uk-remove-margin-bottom">COVID19<span className="uk-text-primary">KARNATAKA</span></div></div></Link>
		 <div className="uk-navbar-item">
			<div className="uk-position-center-right uk-margin-xlarge-right"><Link to="/about" className="uk-link-muted">About</Link></div>
	</div>
	 	<div className="uk-navbar-item">
		 <div className="uk-position-center-right uk-margin-small-right uk-margin-medium-bottom" onClick={toggleTheme}><ThemePicker /></div>
	</div>
    </div>
	</nav>
     
    <div className="uk-text-meta">
	<svg className="bi bi-arrow-clockwise" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"/>
  <path fill-rule="evenodd" d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"/>
</svg>  Last updated: {updated}</div>
    <div className="uk-text-meta uk-margin-small-bottom">
	<svg className="bi bi-check2-circle" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
</svg>  Total people tested: {tested}</div>
    </>
	)
	};
	
	function ThemePicker() {
		const { Dark } = useContext(DataContext);
	const [ dark, setDark ] = Dark;
		if(dark) {
			return(
			<svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-brightness-high-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
  <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>
			);
		}
		else {
			return(
			<svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-moon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
</svg>
			);
		};
	};

export default Home;

