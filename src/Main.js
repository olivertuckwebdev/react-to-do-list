import React, { Component } from 'react';
import InputForm from './InputForm';
import List from './List';

class Main extends Component {
  state = {
    listItems: []
  };

  removeListItem = index => {
    const { listItems } = this.state;

    this.setState({
      listItems: listItems.filter((listItem, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = listItem => {
    this.setState({ listItems: [...this.state.listItems, listItem] });
  };

  render() {
    return (
      <main className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <InputForm handleSubmit={this.handleSubmit} />
              <List
                listData={this.state.listItems}
                removeListItem={this.removeListItem}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
