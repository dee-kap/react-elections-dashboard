import React, { Component } from 'react';
import ElectoratesTable from './ElectoratesTable';
import ElectoratesToolbar from './ElectoratesToolbar';
import ElectorateSelector from './ElectorateSelector';
import ElectorateCardsContainer from './ElectorateCardsContainer';


export class ElectoralsPage extends Component {

  constructor() {
    super();
    this.state = {electorates: [], displayCards: true, selectedState: ''};
    this.getElectorates = this.getElectorates.bind(this);
    this.onStateSelect = this.onStateSelect.bind(this);
    this.onDisplayCards = this.onDisplayCards.bind(this);
    this.onDisplayTable = this.onDisplayTable.bind(this);
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

  onStateSelect(state) {
    this.setState({electorates: []});
    this.getElectorates(state);
    this.setState({selectedState: state});
  }

  onElectorateSelect(divisionId) {

  }

  onDisplayCards() {
    this.setState({displayCards: true});
  }

  onDisplayTable() {
    this.setState({displayCards: false});
  }

  render() {

    let dataView = (<ElectorateCardsContainer 
      electorates={this.state.electorates} />);

    if (!this.state.displayCards) {
      dataView = (<ElectoratesTable 
        electorates={this.state.electorates} />);
    }


    return(
      <div>
        <ElectoratesToolbar onStateSelect={this.onStateSelect} 
          onElectorateSelect={this.onElectorateSelect} 
          onDisplayCards={this.onDisplayCards}
          onDisplayTable={this.onDisplayTable}
          electorates={this.state.electorates}
          selectedState={this.state.selectedState} />
        <div>
          <hr/>
          {dataView}
        </div>
      </div>
    );
    

    
  }
}

export default ElectoralsPage;
