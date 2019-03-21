import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import './List.css';

class List extends Component {
  render() {
    const listItems = this.props.listData.map((item, index) => {
      return (
        <ListGroupItem className="list-group-item-action" key={index}>
          <div className="d-flex justify-content-between mb-2">
            <ListGroupItemHeading className="mb-0">
              {item.name}
            </ListGroupItemHeading>
            <button onClick={() => this.props.removeListItem(index)}>
              <IoMdTrash />
            </button>
          </div>
          <ListGroupItemText className="mb-0">
            {item.description}
          </ListGroupItemText>
        </ListGroupItem>
      );
    });

    return <ListGroup>{listItems}</ListGroup>;
  }
}

export default List;
