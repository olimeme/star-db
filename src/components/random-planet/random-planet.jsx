import React from 'react';
import './random-planet.css';

const RandomPlanet = () => {
  return (
    <div>
      <div className="random-planet">
        <div className="random-planet-img">
          <img src="" alt="" />
        </div>
        <div className="random-planet-desc">
          <h2>Planet Name</h2>
          <p>Population: </p>
          <p>Rotation Period: </p>
          <p>Diameter: </p>
        </div>
      </div>
    </div>
  )
}

export default RandomPlanet