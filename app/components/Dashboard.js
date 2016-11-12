// @flow
import React, { Component } from 'react';
import StatsCard from './StatsCard';
import RaisedButton from 'material-ui/RaisedButton';


const Dashboard = (props) => {
  return (
    <div>
      <h1>This be dashboard</h1>
      <div className="dashboardCard">
        <StatsCard stats={props.dashboard.stats} />
      </div>
      <RaisedButton
        style={{position: 'relative', top:'25px', left:'500px'}}
        primary={true}
        label="Decks"
        onClick={props.onDrawerToggle.bind(this)}
      />
    </div>
  );
}

export default Dashboard