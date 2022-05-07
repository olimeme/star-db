import React from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => (
  <span>
    {name} {model}
  </span>
);

export const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);
export const PlanetList = withData(
  withChildFunction(ItemList, renderNameAndModel),
  getAllPlanets
);
export const StarshipList = withData(
  withChildFunction(ItemList, renderNameAndModel),
  getAllStarships
);
