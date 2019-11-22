import React, { Component } from 'react';
import {connect} from 'react-redux';

import './MyRuns.css';

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}

class MyRuns extends Component {
  componentDidMount = () => {
    this.props.dispatch({type: 'FETCH_RUNS_FOR_CALENDAR'})
  }

  handleDeleteClick = (id) => {
    console.log('delete clicked', id)
  }

  render() {
    return (
      <div className="add-run-container">
        <div className="myRuns">
            <h1>My Runs</h1>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Distance</th>
                  <th>Time</th>
                  <th>Delete</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>
                {this.props.runsForCalendarReducer.map(run => {
                  return <tr key={run.run_id}><td>{run.month}/{run.day}</td><td>{run.distance}</td><td>{run.time}</td>
                         <td><span onClick={() => this.handleDeleteClick(run.run_id)} className="deleteRun">delete</span></td><td></td></tr>
                })}
              </tbody>
            </table>
            {/* <pre>{JSON.stringify(this.props.runsForCalendarReducer)}</pre> */}
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(MyRuns);