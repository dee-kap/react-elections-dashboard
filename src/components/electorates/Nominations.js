import React, { Component } from 'react';
import ResultFirstPreferenceByCandidate from './ResultFirstPreferenceByCandidate';
import ResultTwoPartyPreferredByCandidate from './ResultTwoPartyPreferredByCandidate';
import 'whatwg-fetch';

export class Nominations extends Component {

  constructor(props) {
    super(props);
    this.state = {nominations: []};
    this.getNominations = this.getNominations.bind(this);
  }

  componentDidMount() {
    this.getNominations();
  }

  getNominations() {
    fetch('https://elec-960cb.firebaseio.com/housecandidates.json')
      .then((response) => {
        return response.json();
      }).then((data) => {
        let filteredMembers = data.filter((member) => {
          return member.DivisionID == this.props.division.DivisionId;
        });
        this.setState({nominations: filteredMembers});

      });
  }

  render() {

    const members = this.state.nominations.map((candidate, index) => {
      return(
        <li key={index} className="list-group-item">
          <div className="media">
            <div className="media-body">
              <div className="col-md-4 electorate-candidate-container">
              <h4 className="media-heading">{candidate.GivenNm} {candidate.Surname}</h4>
              <h5>{candidate.PartyNm} </h5>
              </div>
              <div className="col-md-8">
              First preference:  <ResultFirstPreferenceByCandidate candidate={candidate} />
              Two candidate preferred: <ResultTwoPartyPreferredByCandidate candidate={candidate} />
              </div>
            </div>
          </div>
        </li>
      );

    });

    return (
      <div>
        <ul className="list-group">
          {members}
        </ul>
      </div>
    );
  }
}

Nominations.propTypes = {
  division: React.PropTypes.object
};

export default Nominations;
