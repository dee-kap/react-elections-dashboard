import React, { Component } from 'react';

export class ResultFirstPreferenceByCandidate extends Component {

  constructor(props) {
    super(props);
    this.state = {votes: {}};
    this.getVotes = this.getVotes.bind(this);
  }

  componentDidMount() {
    this.getVotes();
  }

  getVotes() {
    $.get('https://elec-960cb.firebaseio.com/housefirstprefresults.json', (data) => {

      data.forEach((value, index) => {
        if(value.CandidateID == this.props.candidate.CandidateID) {
          this.setState({votes: value});
          return;
        }
      });

    });
  }


  render() {
    let votes = this.state.votes;


    let ordinaryVotesWidth = (votes.OrdinaryVotes / votes.TotalVotes) * 100;
    let postalVotesWidth = (votes.PostalVotes / votes.TotalVotes) * 100;

    var ordinaryVotesStyle = {
        float: 'left',
        height: 40,
        width: ordinaryVotesWidth + '%'
      };

      var postalVotesStyle = {
          float: 'left',
              height: 40,
              width: postalVotesWidth + '%'
            };

    let vote = (
          <div className="votes-bar-container">
            <div style={ordinaryVotesStyle} className="bg-success"></div>
            <div style={postalVotesStyle} className="bg-danger"></div>
            <div className="votes-bar-text text-primary">{votes.TotalVotes || 0 } votes</div>
          </div>);

    
    
    return (
      <div>
        {vote}
      </div>
    );
  }
}

export default ResultFirstPreferenceByCandidate;
