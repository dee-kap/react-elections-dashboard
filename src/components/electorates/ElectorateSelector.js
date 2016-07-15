import React, { Component } from 'react';
import { Dropdown, SplitButton, MenuItem } from 'react-bootstrap';

export class ElectorateSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedState: '', stateDropdownTitle: 'Select State'};
  }

  getElectorates(state) {
    $.get('https://elec-960cb.firebaseio.com/electorates.json', (data) => {

      if(state) {
        let filteredElectorates = data.filter((item) => {
          return item.StateAb === state;
        });
        this.setState({electorates: filteredElectorates});
      } else {
        this.setState({electorates: data});
      }
    });
  }


  render() {

    const STATES = ['ACT', 'NT', 'NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA'];

    let states = STATES.map((state, index) => {
      return(
        <MenuItem eventKey={state} key={index}>{state}</MenuItem>
      );

    });

    let electorates = this.props.electorates.map((electorate, index) => {
      return(
        <MenuItem eventKey={electorate.DivisionId} key={index}>{electorate.DivisionNm}</MenuItem>
      );
    });

    let selectedState = 'Select State';
    if(this.props.selectedState) {
      selectedState = this.props.selectedState;
    }

    return (
      <div className="btn-toolbar inline-block" role="toolbar" 
        aria-label="Toolbar with button groups">
          <div className="btn-group" role="group" aria-label="First group">
              <SplitButton bsStyle={'Default'.toLowerCase()} 
                title={selectedState} 
                onSelect={this.props.onStateSelect}>
                {states}
              </SplitButton>
          </div>
          <div className="btn-group none" role="group" aria-label="Second group">
          <SplitButton bsStyle={'Default'.toLowerCase()} title={'Select Electorate'} 
                onSelect={this.props.onElectorateSelect}>
                {electorates}
              </SplitButton>
          </div>
      </div>
    );

  }
}

ElectorateSelector.propTypes =  {
  electorates: React.PropTypes.array,
  selectedState: React.PropTypes.string,
  onStateSelect: React.PropTypes.func,
  onElectorateSelect: React.PropTypes.func
};


export default ElectorateSelector;
