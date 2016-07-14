import React, { Component } from 'react';
import Nominations from './Nominations';
import ElectorateSelector from './ElectorateSelector';
import ResultsLegend from '../common/ResultsLegend';

export class ElectoratePage extends Component {

  constructor(props) {
    super();
    this.state = {division: {}};
    this.getDivisionDetails = this.getDivisionDetails.bind(this);
    //this.onStateSelect = this.onStateSelect.bind(this);
  }

  componentDidMount() {
    
  }

  getDivisionDetails() {
    $.get('https://elec-960cb.firebaseio.com/electorates.json', (data) => {
      let division = {};
      let divisionId = this.props.params.divisionId;
      data.forEach((value, index) => {
        if(value.DivisionId == divisionId) {
          division = value;
          return;
        }

      });
      this.setState({division: division});
    });
  }

  render() {
    this.getDivisionDetails();
    return (
      <div>
      
        <div className="electorate-title-container">
        <h1>{this.state.division.DivisionNm} {this.state.division.StateAb}</h1>
        <h2>Number of voters enrolled: {this.state.division.Enrolment}</h2>
        <hr/>
        <div>
          <div className="col-md-4 text-right text-muted">Candidates</div>
          <div className="center text-muted">Results<ResultsLegend /> </div>
        </div>
        </div>

        <Nominations division={this.state.division} />
      </div>
    );
  }
}

export default ElectoratePage;
