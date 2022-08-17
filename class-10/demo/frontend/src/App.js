import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      searchQuery: ''
    }
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const url = `${process.env.REACT_APP_SERVER}/recipes?ingredient=${this.state.searchQuery}`
    const response = await axios.get(url);
    this.setState({ recipes: response.data }, () => console.log("Recipes from Server: ", this.state.recipes));
  }

  render() {
    return (
      <>
        <form>
          <label>enter an ingredient</label>
          <input onChange={(e) => this.setState({ searchQuery: e.target.value }, () => {
            console.log(this.state.searchQuery);
          })} type="text" name="ingredient"></input>
          <button onClick={this.onSubmit}>submit</button>
        </form>

        {this.state.recipes.map((recipe, idx) => (
          <div key={idx}>
            <h2>{recipe.label}</h2>
            <img src={recipe.image_url} alt={recipe.label} />
            {recipe.ingredients.map(ingr => (
              <li key={Math.random()}>{ingr}</li>
            ))}
          </div>
        ))}
      </>
    )
  }
}

export default App;
