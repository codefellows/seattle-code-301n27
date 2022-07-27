import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

// THIS IS NOT A HABIT I WANT YOU TO GET INTO
// THIS IS NOT VERY "REACT LIKE"
// PLEASE DO NOT STORE GLOBAL VARS THIS WAY
// USE STATE 
const allNumerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'user',
      activity: 'activity',
      animal: '',
      numerals: allNumerals
    }
  }

  handleFormSubmitted = e => {
    e.preventDefault();
    console.log('submitted');
  }
  
  handleUsernameTyped = e => {
    // e.preventDefault();
    if(e.target.value.length > 0) {
      this.setState({
        user: e.target.value
      });
    } else {
      this.setState({
        user: 'user'
      });
    }
  }

  updateActivity = e => this.setState({ activity: e.target.value });
  updateAnimal = e => this.setState({ animal: e.target.value});

  handleChange = event => {
    const selection = event.target.value;
    let updatedNumerals;

    if (selection === "odds"){
      updatedNumerals = allNumerals.filter(num => num % 2 === 1);
      this.setState({ numerals: updatedNumerals});
    } else if (selection === "evens") {
      updatedNumerals = allNumerals.filter(num => num % 2 === 0);
      this.setState({ numerals: updatedNumerals});
    } else {
      this.setState({ numerals: allNumerals });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Form Demo!</h1>
        <h3>My Numerals: {this.state.numerals}</h3>

        <br/>
        <h2>Welcome {this.state.user}!</h2>
        <h3>I like to {this.state.activity}</h3>
        <h3>I am a {this.state.animal} person!</h3>
        <br/>

        <form onSubmit={this.handleFormSubmitted}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" onInput={this.handleUsernameTyped} />
          <br />
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" name="dob" id="dob" />
          <br />
          <input type="submit" />
        </form>

      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              onInput={this.handleUsernameTyped}
              />
          </Form.Group>

          <Form.Group>
            <Form.Label>Favorite Activity</Form.Label>
            <Form.Control onChange={this.updateActivity} />
          </Form.Group>

          <Form.Group>
            <Form.Label>What kind of pet parent are you?</Form.Label>
            <Form.Control 
              onChange={this.updateAnimal} 
              as="select"
            >
              <option>Choose One!</option>
              <option>Cat</option>
              <option>Dog</option>
              <option>Bird</option>
              <option>Rabbit</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Select onChange={this.handleChange} >
              <option value="none">none</option>
              <option value="odds">odds</option>
              <option value="evens">evens</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>

      </div>
    );
  }
}

export default App;
