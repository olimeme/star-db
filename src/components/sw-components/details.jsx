import React, { Component } from "react";
import ItemDetails, { Record } from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

export const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPersonById, getPersonImageById }) => {
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
      }}
    </SwapiServiceConsumer>
  );
};
export const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanetById, getPlanetImageById }) => {
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
      }}
    </SwapiServiceConsumer>
  );
};
export const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getStarshipById, getStarshipImageById }) => {
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
      }}
    </SwapiServiceConsumer>
  );
};
