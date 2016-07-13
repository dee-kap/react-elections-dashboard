import React, { Component } from 'react';
import Nominations from './Nominations';


export class ElectorateCard extends Component {
  render() {
    let electorate = this.props.electorate;

    return (
      <div className="col-md-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">{electorate.DivisionNm} {electorate.StateAb}</h3>
          </div>
          <div className="panel-body">
            Voter Enrolment: {electorate.Enrolment}
          </div>
        </div>
        
      </div>
    );
  }
}

export default ElectorateCard;
