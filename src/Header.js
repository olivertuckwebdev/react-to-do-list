import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="py-5 border-bottom">
        <div className="container">
          <h1 className="mb-0 display-4">React to-do list</h1>
        </div>
      </header>
    );
  }
}

export default Header;
