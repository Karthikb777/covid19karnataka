import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { DataContext } from './AppState';
import './App.css';
import './Uikit.css';

function StateTotalCases() {
const { Confirmed, Recovered, Deceased, Total, Dark } = useContext(DataContext);
const [ confirmed ] = Confirmed;
const [ recovered ] = Recovered;
const [ deceased ]   = Deceased;
const [ total ] = Total;
const [ dark ] = Dark;

const isDarkConfirmed = () => {
		if(dark) {
			return("uk-alert-danger uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom dark-mode");
			}
		else {
			return("uk-alert-danger uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom light-mode");
			}
			};

const isDarkRecovered = () => {
		if(dark) {
			return("uk-alert-success uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom dark-mode");
			}
		else {
			return("uk-alert-success uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom light-mode");
			}
			};
			
const isDarkDeceased = () => {
		if(dark) {
			return("uk-alert-primary uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom dark-mode");
			}
		else {
			return("uk-alert-primary uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom light-mode");
			}
			};

  if(confirmed === undefined || recovered === undefined || deceased === undefined || total === undefined) { 
 return(<div className="uk-text-meta">Loading...</div>);
     };
  return(
	  <>
    <div className="uk-grid uk-grid-small uk-child-width-expand@s" uk-grid>
      <Link className='uk-link-reset' to="/confirmed">
      <div className={isDarkConfirmed()}>
      <ResponsiveContainer width="95%" height={150}>
        <LineChart data={confirmed} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
  <Line type="monotone" dot={false} dataKey="value" stroke="red" />
  <Tooltip />
</LineChart>
</ResponsiveContainer>
      <p className="uk-padding-small uk-text-center">Confirmed cases: {total.confirmed}</p>
</div>
</Link>
		<Link className='uk-link-reset' to="/recovered">
		<div className={isDarkRecovered()}>
		<ResponsiveContainer width="95%" height={150}>
		<LineChart data={recovered} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
  <Line type="monotone" dot={false} dataKey="value" stroke="green" />
  <Tooltip />
</LineChart>
</ResponsiveContainer>
    <p className="uk-padding-small uk-text-center">Recovered cases: {total.recovered}</p>
</div>
</Link>
		<Link className='uk-link-reset' to="/deceased">
		<div className={isDarkDeceased()}>
		<ResponsiveContainer width="95%" height={150}>
		<LineChart data={deceased} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
  <Line type="monotone" dot={false} dataKey="value" stroke="blue" />
  <Tooltip />
</LineChart>
</ResponsiveContainer>
	<p className="uk-padding-small uk-text-center">Deceased cases: {total.deceased}</p>
</div>
</Link>
    </div> 
	<div className="uk-text-meta uk-margin-medium-bottom">Click on the cards above to see the daily data.</div>
	</>
  );
};

export default StateTotalCases;

