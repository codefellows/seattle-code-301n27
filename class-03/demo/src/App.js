import React from 'react';
import './App.css';
import Parent from './Parent';
import OverdraftModal from './OverdraftModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div className="App">
        <h1>Passing Money Demo!</h1>
        <Parent openModal={this.openModal} />
        <OverdraftModal 
          showModal={this.state.showModal} 
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

export default App;
