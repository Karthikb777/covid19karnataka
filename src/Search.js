import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { DataContext, DataProvider } from './AppState';
import './Uikit.css';

function Search() {
const { Confirmed, Recovered, Deceased, District, DistrictDaily, Total, Dark } = useContext(DataContext);
const [ confirmed, setConfirmed ] = Confirmed;
const [ recovered, setRecovered ] = Recovered;
const [ deceased, setDeceased ]   = Deceased;
const [ districtData, setDistrictData ] = District;
const [ districtsDaily, setDistrictsDaily ] = DistrictDaily;
const [ total, setTotal ] = Total;
const [ dark, setDark ] = Dark;
const [ updated, setUpdated ] = useState("");
const [ key, setKey ] = useState("");
const [ searchRes, setSearchRes ] = useState([]);

	const submitData = (e) => {
		e.preventDefault();
	 };
		
	const searchData = (e) => {
			setKey(e.target.value);
			districtData.filter( dist => {
	if(e.target.value !== '' && dist.district.includes(e.target.value)) {
		if(!searchRes.includes(dist.district)) {
	setSearchRes(prev => [...prev,dist.district]);
	} }
	else if(e.target.value === '') {
		setSearchRes([]);
		};
			}
		);
	};
	
	const resetSearch = () => {
		setKey("");
		setSearchRes([]);
		};

	console.log(searchRes);
	return(
	<>
	<form className="uk-search uk-search-default uk-margin-small-bottom">
	  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
 	 <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
 	 <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
 	 </svg>
  	<input className="uk-search-input search-form" type="search" value={key} onChange={searchData} placeholder="Search districts..." />
	</form>
	
	<div className="dark-mode-search rounded" data-uk-dropdown="pos: bottom-justify">
    <div className="uk-dropdown-grid uk-child-width-1-2@m" data-uk-grid>
        <div>
            <ul className="uk-nav uk-dropdown-nav link-search">   
            	<li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
</svg> Click on the results...</li>
            { 	
				searchRes.map( search => (

			    <li key={search} onClick={resetSearch}><Link to={`/district/${search}`}>
<svg className="bi bi-geo-alt" width="0.8em" height="0.8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> {search}</Link></li>
			))}
              
            		</ul>
        		</div>
    		</div>
		</div>
	</>
	);
	
};

export default Search;
	
				

	

	
	
