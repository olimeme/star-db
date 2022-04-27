import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import Error from "../error";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
    loading: true,
    error: false,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoad = (planet) => {
    this.setState({ ...planet });
  };

  onError = () => {
    this.setState({ error: true });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService
      .getPlanetById(id)
      .then(this.onPlanetLoad)
      .catch(this.onError)
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { id, name, population, rotationPeriod, diameter, loading, error } =
      this.state;

    if (loading) return <Spinner message={"Loading the universe..."} />;
    else if (error) return <Error />;
    else
      return (
        <div className="random-planet jumbotron rounded">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            className="planet-image"
            alt=""
          />
          <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Population</span>
                <span>{population}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Rotation Period</span>
                <span>{rotationPeriod}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Diameter</span>
                <span>{diameter}</span>
              </li>
            </ul>
          </div>
        </div>
      );
  }
}
