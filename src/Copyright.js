import React, { Component } from 'react';

class Copyright extends Component {
  // copyright component with year property set to current year
  render() {
    return (
      <p className="mb-0 text-secondary">
        &copy; Oliver Tuck {this.props.year}
      </p>
    );
  }
}

export default Copyright;
