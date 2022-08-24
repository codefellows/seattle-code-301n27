import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class AddACatForm extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    const newCat = {
      name: event.target.formName.value,
      color: event.target.formColor.value,
      location: event.target.formLocation.value,
      hasClaws: event.target.formClaws.checked,
    };
    console.log("Here is our NEW CAT: ", newCat);
    this.props.handleCreateCat(newCat);
  }

  render() {
    return (
      <Container>

        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Cat's Name</Form.Label>
            <Form.Control
              type='text'
              placeholder="cat's name goes here..."
            />
          </Form.Group>

          <Form.Group controlId="formColor">
            <Form.Label>Cat's Fur Color</Form.Label>
            <Form.Control
              type='text'
              placeholder="cat's fur color goes here..."
            />
          </Form.Group>

          <Form.Group controlId="formLocation">
            <Form.Label>Cat's Location</Form.Label>
            <Form.Control
              type='text'
              placeholder="cat's location goes here..."
            />
          </Form.Group>

          <Form.Group controlId="formClaws">
            <Form.Check
              type="checkbox"
              label="Has Claws?"
            />
          </Form.Group>

          <Button type="submit">Create Cat!</Button>
        </Form>
      </Container>
    )
  }
}

export default AddACatForm;