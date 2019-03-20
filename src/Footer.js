import React, { Component } from 'react';
import Copyright from './Copyright';

class Footer extends Component {
  // copyright component with year property set to current year
  render() {
    return (
      <footer className="py-5 border-top">
        <div className="container">
          <Copyright year={new Date().getFullYear()} />
        </div>
      </footer>
    );
  }
}

export default Footer;
