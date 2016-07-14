import React, { Component } from 'react';
import { browserHistory } from 'react-router';


export class ElectoratesTable extends Component {

  constructor(props) {
    super(props);
    this.goToElectorate = this.gotToElectorate.bind(this);

  }

  gotToElectorate(state, divisionName, divisionId) {
    const path = `/electorate/${state}/${divisionName}/${divisionId}`;
    browserHistory.push(path);
  }

  render() {
    const electorates = this.props.electorates.map((e, index) => {
      return (
          <tr key={index} 
            onClick={()=>{this.goToElectorate(e.StateAb, e.DivisionNm, e.DivisionId)}}>
            <td>{index + 1}</td>
            <td>{e.StateAb}</td>
            <td>{e.DivisionNm}</td>
            <td>{e.Nominations}</td>
            <td>{e.Enrolment}</td>
          </tr>
        );
    });

    return (
      <div>
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>#</th>
                  <th>State</th>
                  <th>Division</th>
                  <th>Nominations</th>
                  <th>Enrolments</th>
              </tr>
          </thead>
          <tbody>
              {electorates}
          </tbody>
      </table>
      </div>

    );
  }

}

ElectoratesTable.propTypes = {
  electorates: React.PropTypes.array
    
};

export default ElectoratesTable;