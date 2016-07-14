import React, { Component } from 'react';
import string from 'string';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export class MembersPage extends Component {

  constructor() {
    super();
    this.state = {members: []};
    this.getMembers = this.getMembers.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.nameFormatter = this.nameFormatter.bind(this);
  }

  componentDidMount() {
    this.getMembers();
  }

  getMembers(search) {
    $.get('https://elec-960cb.firebaseio.com/housecandidates.json', (data) => {
      if(!search) {
        this.setState({members: data});
      } else if(search.length > 1) {
        search = search.toLowerCase();
        let members = data.filter((value, index) => {
          if(value.GivenNm.toLowerCase().startsWith(search) || value.Surname.toLowerCase().startsWith(search)) {
            return value;
          }
        });
        this.setState({members: members});
      }
    });
  }

  onSearchTextChange(event) {
    this.getMembers(event.target.value);
  }

  nameFormatter(cell, row) {
    return string(cell).capitalize().orig;

  }

	render() {
    let options = {
      noDataText: 'Loading data...',
      sizePerPage: 25,
      searchDelayTime: 700,
      clearSearch: true
    };
 
		return (
			<div>
        
        <BootstrapTable options={options} data={this.state.members} paginationSize="25" striped={true} hover={true} pagination={true} search={true}>
          <TableHeaderColumn dataField="GivenNm" isKey={true} dataSort={true}>Given Name</TableHeaderColumn>
          <TableHeaderColumn dataField="Surname" dataFormat={this.nameFormatter} dataSort={true}>Surame</TableHeaderColumn>
          <TableHeaderColumn dataField="StateAb" dataSort={true}>State</TableHeaderColumn>
          <TableHeaderColumn dataField="PartyNm" dataSort={true}>Party</TableHeaderColumn>
        </BootstrapTable>

      </div>
		);
	}
}

export default MembersPage;
