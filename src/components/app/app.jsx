import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import Error from "../error";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";

import SwapiService from "../../services/swapi-service";
import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    return hasError ? (
      <Error />
    ) : (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div>
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
