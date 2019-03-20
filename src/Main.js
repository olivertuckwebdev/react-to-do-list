import React, { Component } from 'react';
import List from './List';

class Main extends Component {
  render() {
    return (
      <main className="py-5">
        <div className="container">
          <List />
        </div>
      </main>
    );
  }
}

export default Main;
