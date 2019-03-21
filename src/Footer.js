import React, { Component } from 'react';
import Copyright from './Copyright';

class Footer extends Component {
  render() {
    return (
      <footer className="py-5 border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <Copyright year={new Date().getFullYear()} />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
