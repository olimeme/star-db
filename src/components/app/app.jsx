import React from 'react'
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import StarshipDetails from '../starship-details';
import RandomPlanet from '../random-planet';

const App = () => {
  return (
    <div>
        <Header />
        <RandomPlanet />
    </div>
  )
}

export default App