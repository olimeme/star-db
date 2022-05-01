import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Error from "../error";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import "./people-page.css";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    const { selectedPerson, hasError } = this.state;

    if (hasError) {
      <Error />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(item) => `${item.name} (${item.birthYear})`}
      />
    );

    const personDetails = <PersonDetails personId={selectedPerson} />;

    return hasError ? (
      <Error />
    ) : (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
