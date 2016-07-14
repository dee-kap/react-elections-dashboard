import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application is created using React.js.</p>

        <p>It is a learning exercise and there is no guarantee of data accuracy.</p>

        <p>Credits:</p>

        <ol>

        <li>React.js</li>
        <li>Bootswatch</li>
        <li>AEC for data</li>
        </ol>
      </div>

      );
  }
}

export default AboutPage;