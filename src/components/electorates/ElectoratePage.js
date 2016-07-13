import React, { Component } from 'react';
import Nominations from './Nominations';
import ElectorateSelector from './ElectorateSelector';

export class ElectoratePage extends Component {

  // write code to fetch electorate data based on id
  // then  use the data to populate this page


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
      
        <h1>Electorate of {this.state.division.DivisionNm} {this.state.division.StateAb} Number of voters enrolled: {this.state.division.Enrolment}</h1>
        <div className="col-md-4 center">Nominations</div>
        <div className="center">Results</div>

        <Nominations division={this.state.division} />
      </div>
    );
  }
}

export default ElectoratePage;
