import React, { Component } from 'react';
import { Dropdown, SplitButton, MenuItem } from 'react-bootstrap';
import ElectorateSelector from './ElectorateSelector';
import ElectorateCardsContainer from './ElectorateCardsContainer';

export class ElectoratesToolbar extends Component {

  render() {

    return (
      <div>
        <ElectorateSelector onStateSelect={this.props.onStateSelect} 
            electorates={this.props.electorates}
            onElectorateSelect={this.props.onElectorateSelect}
            selectedState={this.props.selectedState} />
        <div className="inline-block right">
          <button type="button" className="btn btn-default" 
            onClick={this.props.onDisplayCards}
            aria-label="Left Align">
              <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
          </button>
          <button type="button" className="btn btn-default" 
            onClick={this.props.onDisplayTable}
            aria-label="Left Align">
              <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
          </button>
        </div>

      </div>
    );

  }

}

export default ElectoratesToolbar;
