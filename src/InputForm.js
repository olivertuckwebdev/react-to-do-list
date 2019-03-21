import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      description: ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, description } = this.state;

    return (
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Description"
            rows="4"
            value={description}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Button color="primary" onClick={this.submitForm}>
            Add to list
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default InputForm;
