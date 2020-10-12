import React, { useContext } from 'react';
import { DataContext } from '../AppState';
// import { Link } from 'react-router-dom';

function DailyData({match}) {
const { Confirmed, Recovered, Deceased, Dark } = useContext(DataContext);
const [ confirmed ] = Confirmed;
const [ recovered ] = Recovered;
const [ deceased ]   = Deceased;
// const [ districtData, setDistrictData ] = District;
// const [ districtsDaily, setDistrictsDaily ] = DistrictDaily;
// const [ total, setTotal ] = Total;
// const [ updated, setUpdated ] = useState("");
const [ dark ] = Dark;
const Confirmed_reversed = [...confirmed].reverse();
const Recovered_reversed = [...recovered].reverse();
const Deceased_reversed = [...deceased].reverse();

const isDark = () => {
		if(dark) {
			return("uk-text-lead-dark");
			}
		else {
			return("uk-text-lead");
			}
			};

  if(confirmed === undefined || recovered === undefined || deceased === undefined) {  
 return(<div className="uk-text-meta">Loading...</div>);
  }; 
  
  
  switch(match.params.case) {
  	case "confirmed" : return(
  <>
  <div className={isDark()}>Confirmed</div>
 <table className="uk-table uk-table-divider">
    <thead>
        <tr>
            <th>Date</th>
            <th>Cases</th>
        </tr>
    </thead>
    <tbody>
    {Confirmed_reversed.map( confirm => (
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
  <div className={isDark()}>Recovered</div>
 <table className="uk-table uk-table-divider">
    <thead>
        <tr>
            <th>Date</th>
            <th>Cases</th>
        </tr>
    </thead>
    <tbody>
    {Recovered_reversed.map( recover => (
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
  <div className={isDark()}>Deceased</div>
 <table className="uk-table uk-table-divider">
    <thead>
        <tr>
            <th>Date</th>
            <th>Cases</th>
        </tr>
    </thead>
    <tbody>
    {Deceased_reversed.map( decease => (
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

