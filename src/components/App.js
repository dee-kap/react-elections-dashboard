import React, { PropTypes } from 'react';
import Header from './common/Header';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid container-main">
        {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes =  {
  children: PropTypes.object.isRequired
};

export default App;
