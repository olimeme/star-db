import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import Error from "../error";
import ItemList from "../item-list";
import ItemDetails from "../item-details";

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

    const getPersonImageById = (id) => {
      return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    };

    const getPlanetImageById = (id) => {
      return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    };

    const getStarshipImageById = (id) => {
      return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    };

    const peopleList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(item) => `${item.name} (${item.birthYear})`}
      />
    );

    const personDetails = (
      <ItemDetails
        itemId={selectedPerson}
        getDataById={this.swapiService.getPersonById}
        getItemImageById={getPersonImageById}
      />
    );

    return hasError ? (
      <Error />
    ) : (
      <ErrorBoundry>
        <div>
          <Header />
          <RandomPlanet />
          <Row left={peopleList} right={personDetails} />
        </div>
      </ErrorBoundry>
    );
  }
}
