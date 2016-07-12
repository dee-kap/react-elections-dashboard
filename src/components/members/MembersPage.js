import React, { Component } from 'react';

export class MembersPage extends Component {

  constructor() {
    super();
    this.state = {members: []};
    this.getMember = this._getMembers.bind(this);
  }

  _getMembers() {
    $.get('https://elec-960cb.firebaseio.com/housecandidates.json', (data) => {
      this.setState({members: data});
    });

  }

	render() {
    this.getMember();
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
        <h1>Members</h1>
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
