import React, { Component } from 'react';

export class ElectoralsPage extends Component {

  constructor() {
    super();
    this.state = {electorates: []};
    this.getElectorates = this._getElectorates.bind(this);
  }

  _getElectorates() {
    $.get('https://elec-960cb.firebaseio.com/electorates.json', (data) => {
      this.setState({electorates: data});
    });
  }

  render() {
    this.getElectorates();
    const electorates = this.state.electorates.map(function(e, index) {
      return (
          <tr key={index}>
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

export default ElectoralsPage;
