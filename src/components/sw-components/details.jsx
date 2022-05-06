import React, { Component } from "react";
import ItemDetails, { Record } from "../item-details";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
  getPersonById,
  getPlanetById,
  getStarshipById,
  getPersonImageById,
  getPlanetImageById,
  getStarshipImageById,
} = swapiService;

export const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getDataById={getPersonById}
      getItemImageById={getPersonImageById}
    >
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};
export const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getDataById={getPlanetById}
      getItemImageById={getPlanetImageById}
    >
      <Record field="population" label="Population" />
      <Record field="rotation_period" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};
export const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getDataById={getStarshipById}
      getItemImageById={getStarshipImageById}
    >
      <Record field="model" label="Model" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="costInCredits" label="Cost in Credits" />
      <Record field="length" label="Length" />
      <Record field="crew" label="Crew" />
    </ItemDetails>
  );
};
