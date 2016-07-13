import React, { Component } from 'react';

export class ResultsLegend extends Component {
  render() {
    return (
      <div className="inline-block legend-container">
      <div className="legend-square bg-success inline-block"></div>
      <div className="legend-text">Ordinary</div>

      <div className="legend-square bg-info inline-block"></div>
      <div className="legend-text">Postal</div>

      <div className="legend-square bg-warning inline-block"></div>
      <div className="legend-text">Pre-Poll</div>

      <div className="legend-square bg-brown inline-block"></div>
      <div className="legend-text">Provisional</div>

      <div className="legend-square bg-danger inline-block"></div>
      <div className="legend-text">Absent</div>


      </div>
    );
  }
}

export default ResultsLegend;
