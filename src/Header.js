import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="py-5 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <h1 className="mb-0 display-4">React to-do list</h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
