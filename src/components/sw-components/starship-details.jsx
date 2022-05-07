import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

export const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="costInCredits" label="Cost in Credits" />
      <Record field="length" label="Length" />
      <Record field="crew" label="Crew" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getDataById: swapiService.getStarshipById,
    getItemImageById: swapiService.getStarshipImageById,
  };
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
