import React, { useContext, useEffect, useState } from 'react';
import { Link,BrowserRouter as router } from 'react-router-dom';
import { LineChart, Line, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataContext, DataProvider } from './AppState';
import DailyData from './components/DailyData';
import './App.css';

function StateTotalCases() {
const { Confirmed, Recovered, Deceased, Total } = useContext(DataContext);
const [ confirmed, setConfirmed ] = Confirmed;
const [ recovered, setRecovered ] = Recovered;
const [ deceased, setDeceased ]   = Deceased;
const [ total, setTotal ] = Total;

  if(confirmed === undefined || recovered === undefined || deceased === undefined || total === undefined) { 
 return(<div className="uk-text-meta">Loading...</div>);
     };
  return(
    <div>
      <Link to="/confirmed">
      <div className="uk-alert-danger uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom">
      <ResponsiveContainer width="95%" height={150}>
        <LineChart data={confirmed} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
  <Line type="monotone" dot={false} dataKey="value" stroke="red" />
  <Tooltip />
</LineChart>
</ResponsiveContainer>
      <p className="uk-padding-small uk-text-center">Confirmed cases: {total.confirmed}</p>
</div>
</Link>
		<Link to="/recovered">
		<div className="uk-alert-success uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom">
		<ResponsiveContainer width="95%" height={150}>
		<LineChart data={recovered} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
  <Line type="monotone" dot={false} dataKey="value" stroke="green" />
  <Tooltip />
</LineChart>
</ResponsiveContainer>
    <p className="uk-padding-small uk-text-center">Recovered cases: {total.recovered}</p>
</div>
</Link>
		<Link to="/deceased">
		<div className="uk-alert-primary uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom">
		<ResponsiveContainer width="95%" height={150}>
		<LineChart data={deceased} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
  <Line type="monotone" dot={false} dataKey="value" stroke="blue" />
  <Tooltip />
</LineChart>
</ResponsiveContainer>
	<p className="uk-padding-small uk-text-center">Deceased cases: {total.deceased}</p>
</div>
</Link>
	<div className="uk-text-meta uk-margin-medium-bottom">Click on the cards above to see the daily data.</div>
    </div> 
  );
};

export default StateTotalCases;

