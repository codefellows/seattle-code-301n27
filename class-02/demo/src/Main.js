
// The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.
import React from 'react';
import Snack from './Snack';
import data from './data.json';

class Main extends React.Component {
  render() {
    return (
      <>
        <Snack title={data[0].title} description={data[0].description} imageURL={data[0].imageURL} />
        <Snack title={data[1].title} description={data[1].description} imageURL={data[1].imageURL}/>
        <Snack title={data[2].title} description={data[2].description} imageURL={data[2].imageURL}/>
        <Snack title={data[3].title} description={data[3].description} imageURL={data[3].imageURL} />
      </>
    )
  }
}

export default Main;
