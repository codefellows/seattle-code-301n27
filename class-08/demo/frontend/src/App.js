import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import axios from 'axios';
import Photos from './Photos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      photos: []
    }
  }

  updateSearchQuery = (event) => this.setState({ searchQuery: event.target.value });

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = `${process.env.REACT_APP_SERVER}/photos?searchQuery=${this.state.searchQuery}`;
      console.log("URL: ", url);
      const response = await axios.get(url);
      this.setState({ photos: response.data })
    } catch (error) {

    }
  }

  render() {
    return (
      <div className="App">
        <h1>My Awesome Photo App!</h1>
        <Container>
          <Form onSubmit={this.handleSubmit} >
            <Form.Group>
              <Form.Label>Find photos about...</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a search term here..."
                onChange={this.updateSearchQuery}
              />
            </Form.Group>
          </Form>
        </Container>

        {this.state.photos.length > 0 &&
          <>
            <h2>You searched for: {this.state.searchQuery}</h2>
            <Photos
              photos={this.state.photos}
            />
          </>
        }
      </div>
    );
  }
}

export default App;
