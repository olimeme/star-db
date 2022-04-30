import React, { Component } from "react";
import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import StarshipDetails from "../starship-details";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}
