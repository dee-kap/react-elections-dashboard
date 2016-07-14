import React, { Component } from 'react';

export class ResultsLegend extends Component {
  render() {
    return (
      <div className="inline-block legend-container">
      <div className="legend-square bg-success inline-block"></div>
      <div className="legend-text text-muted">Ordinary</div>

      <div className="legend-square bg-info inline-block"></div>
      <div className="legend-text text-muted">Postal</div>

      <div className="legend-square bg-warning inline-block"></div>
      <div className="legend-text text-muted">Pre-Poll</div>

      <div className="legend-square bg-brown inline-block"></div>
      <div className="legend-text text-muted">Provisional</div>

      <div className="legend-square bg-danger inline-block"></div>
      <div className="legend-text text-muted">Absent</div>


      </div>
    );
  }
}

export default ResultsLegend;
