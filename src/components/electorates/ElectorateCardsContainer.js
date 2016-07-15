import React, { Component } from 'react';
import ElectorateCard from './ElectorateCard';

export class ElectorateCardsContainer extends Component {
  render() {

    let cards = this.props.electorates.map((electorate, index) => {
      return(
        <ElectorateCard key={index} electorate={electorate} />
        );
    });


    return (
      <div id="cards-container">
        <ul>
          {cards}
        </ul>
      </div>
    );
  }
}

ElectorateCardsContainer.propTypes =  {
  electorates: React.PropTypes.array
};


export default ElectorateCardsContainer;
