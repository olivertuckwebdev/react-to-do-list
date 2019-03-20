import React, { Component } from 'react';
import List from './List';

class Main extends Component {
  render() {
    const listItems = [
      {
        name: 'To-do 1',
        description:
          'Donec id elit non mi porta gravida at eget metus. Maecenas sed diameget risus varius blandit.'
      },
      {
        name: 'To-do 2',
        description:
          'Donec id elit non mi porta gravida at eget metus. Maecenas sed diameget risus varius blandit.'
      },
      {
        name: 'To-do 3',
        description:
          'Donec id elit non mi porta gravida at eget metus. Maecenas sed diameget risus varius blandit.'
      }
    ];

    return (
      <main className="py-5">
        <div className="container">
          <List listData={listItems} />
        </div>
      </main>
    );
  }
}

export default Main;
