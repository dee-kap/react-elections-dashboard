import React, { Component } from 'react';
import { browserHistory } from 'react-router';


export class ElectorateCard extends Component {

  constructor(props) {
    super(props);
    this.goToElectorate = this.gotToElectorate.bind(this);

  }

  gotToElectorate(state, divisionName, divisionId) {
    const path = `/electorate/${state}/${divisionName}/${divisionId}`;
    browserHistory.push(path);
  }

  render() {
    let electorate = this.props.electorate;


    return (
      <div className="col-md-4">
        <div className="panel panel-info">
          <div className="panel-heading" onClick={()=>{this.goToElectorate(electorate.StateAb, electorate.DivisionNm, electorate.DivisionId)}}>
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
