import React, { Component } from 'react';

export class MembersPage extends Component {

  constructor() {
    super();
    this.state = {members: []};
    this.getMembers = this.getMembers.bind(this);
  }

  getMembers(search) {
    $.get('https://elec-960cb.firebaseio.com/housecandidates.json', (data) => {
      if(!search) {
        this.setState({members: data.slice(0, 25)});
      }
    });
  }

	render() {
    this.getMembers();
    const members = this.state.members.map(function(m, index) {
      return (
          <tr key={index}>
            <td></td>
            <td>{m.GivenNm}</td>
            <td>{m.Surname}</td>
            <td>{m.StateAb}</td>
            <td>{m.PartyNm}</td>
          </tr>
        );
    });

		return (
			<div>
        <table className="table table-striped">
          <thead>
              <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>State</th>
                  <th>Party</th>
              </tr>
          </thead>
          <tbody>
              {members}
          </tbody>
      </table>

      </div>
		);
	}
}

export default MembersPage;
