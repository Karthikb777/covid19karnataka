import React, { useContext, useEffect, useState } from 'react';
import { DataContext, DataProvider } from '../AppState';
import { Link } from 'react-router-dom';

function DailyData({match}) {
const { Confirmed, Recovered, Deceased, District, DistrictDaily, Total } = useContext(DataContext);
const [ confirmed, setConfirmed ] = Confirmed;
const [ recovered, setRecovered ] = Recovered;
const [ deceased, setDeceased ]   = Deceased;
const [ districtData, setDistrictData ] = District;
const [ districtsDaily, setDistrictsDaily ] = DistrictDaily;
const [ total, setTotal ] = Total;
const [ updated, setUpdated ] = useState("");


  if(confirmed === undefined || recovered === undefined || deceased === undefined) {  
 return(<h3>loading</h3>);
  }; 
  
  switch(match.params.case) {
  	case "confirmed" : return(
  <>
  <div className="uk-text-lead">Confirmed</div>
 <table className="uk-table uk-table-divider">
    <thead>
        <tr>
            <th>Date</th>
            <th>Cases</th>
        </tr>
    </thead>
    <tbody>
    {confirmed.map( confirm => (
        <tr className="uk-animation-slide-bottom-medium" key={confirm.name} >
            <td>{confirm.name}</td>
            <td>{confirm.value}</td>
        </tr>
        ) )}
    </tbody>
</table>
</>
);
  		break;
  	case "recovered" : return(
  <>
  <div className="uk-text-lead">Recovered</div>
 <table className="uk-table uk-table-divider">
    <thead>
        <tr>
            <th>Date</th>
            <th>Cases</th>
        </tr>
    </thead>
    <tbody>
    {recovered.map( recover => (
        <tr className="uk-animation-slide-bottom-medium">
            <td>{recover.name}</td>
            <td>{recover.value}</td>
        </tr>
        ) )}
    </tbody>
</table>
</>
);
  		break;
  	case "deceased" : return(
  <>
  <div className="uk-text-lead">Deceased</div>
 <table className="uk-table uk-table-divider">
    <thead>
        <tr>
            <th>Date</th>
            <th>Cases</th>
        </tr>
    </thead>
    <tbody>
    {deceased.map( decease => (
        <tr className="uk-animation-slide-bottom-medium">
            <td>{decease.name}</td>
            <td>{decease.value}</td>
        </tr>
        ) )}
    </tbody>
</table>
</>
);
		break;
	default: return null;
  }
    
 
};



export default DailyData;

