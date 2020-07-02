import React, { useState, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [ confirmed, setConfirmed ] = useState([]);
	const [ recovered, setRecovered ] = useState([]);
	const [ deceased, setDeceased ]   = useState([]);
	const [ districtData, setDistrictData ] = useState([]);
	const [ districtsDaily, setDistrictsDaily ] = useState({});
	const [ total, setTotal ] 		= useState({});
	const [ dark, setDark ]		   = useState(false);
	
	return(
		<DataContext.Provider value={{ Confirmed: [ confirmed, setConfirmed ], Recovered: [ recovered, setRecovered ], Deceased: [ deceased, setDeceased ], District: [ districtData, setDistrictData ], DistrictDaily: [ districtsDaily, setDistrictsDaily ], Total: [ total, setTotal ], Dark: [ dark, setDark ] }}>
			{props.children}
		</DataContext.Provider>
		);
	}
	
	