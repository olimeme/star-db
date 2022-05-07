import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import Error from "../error";
import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components";
import { SwapiServiceProvider } from "../swapi-service-context";

import SwapiService from "../../services/swapi-service";
import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    selectedStarship: null,
    selectedPlanet: null,
    hasError: false,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  onPlanetSelected = (id) => {
    this.setState({ selectedPlanet: id });
  };

  onStarshipSelected = (id) => {
    this.setState({ selectedStarship: id });
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    const { selectedPerson, selectedPlanet, selectedStarship, hasError } =
      this.state;

    return hasError ? (
      <Error />
    ) : (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div>
            <Header />
            <RandomPlanet />
            <PersonList />
            <PlanetList />
            <StarshipList />
            <PersonDetails itemId={5} />
            <PlanetDetails itemId={11} />
            <StarshipDetails itemId={9} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
