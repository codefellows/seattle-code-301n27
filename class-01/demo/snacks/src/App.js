import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Snack from './Snack';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Snack title={"Pretzels"} description={"Salty and Crunchy!"} />
        <Snack title={"Oreos"} description={"Chocolately, crunchy with a lovely cream"}/>
        <Snack title={"Cherry Tomatoes"} description={"juicy and Delicious"}/>
        <Snack title={"Pickles"} description={"Salty and Crunchy!"} />
        <Footer />
      </div>
    );
  }
}

export default App;
