import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';

class List extends Component {
  render() {
    const listItems = this.props.listData.map((item, index) => {
      return (
        <ListGroupItem className="list-group-item-action" key={index}>
          <ListGroupItemHeading>{item.name}</ListGroupItemHeading>
          <ListGroupItemText className="mb-1">
            {item.description}
          </ListGroupItemText>
        </ListGroupItem>
      );
    });

    return <ListGroup>{listItems}</ListGroup>;
  }
}

export default List;
