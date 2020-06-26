import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StateTotalCases from './StateTotalCases';
import Districts from './Districts';
import DailyData from './components/DailyData';
import DistrictDailyData from './components/DistrictDailyData';
import About from './components/About';
import { DataContext, DataProvider } from './AppState';

function Home() {
const { Confirmed, Recovered, Deceased, District, DistrictDaily, Total } = useContext(DataContext);
const [ confirmed, setConfirmed ] = Confirmed;
const [ recovered, setRecovered ] = Recovered;
const [ deceased, setDeceased ]   = Deceased;
const [ districtData, setDistrictData ] = District;
const [ districtsDaily, setDistrictsDaily ] = DistrictDaily;
const [ total, setTotal ] = Total;
const [ updated, setUpdated ] = useState("");

  useEffect(() => {
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
    
    const districtDaily = await fetch('https://api.covid19india.org/districts_daily.json');
    const districtDailyRes = await districtDaily.json();
    setDistrictsDaily(districtDailyRes.districtsDaily.Karnataka);

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

  if(confirmed === undefined || recovered === undefined || deceased === undefined) { 
 return(<div className="uk-text-meta">Loading...</div>);  
  }; 

  return(
  <Router>
  <Switch>
    <div className="uk-container">
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
	return(
	<>
	<nav className="uk-navbar uk-margin" uk-navbar>
    <div className="uk-navbar-left">

        <Link to="/covid19karnataka"><div className="uk-navbar-item"><div className="uk-logo uk-position-center-left">COVID19<span className="uk-text-primary">KARNATAKA</span></div></div></Link>
		 <div className="uk-navbar-item">
            <div><Link to="/about" className="uk-link-muted uk-position-center-right">About</Link></div>
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

export default Home;

