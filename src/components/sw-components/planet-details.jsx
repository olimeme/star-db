import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

export const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotation_period" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getDataById: swapiService.getPlanetById,
    getItemImageById: swapiService.getPlanetImageById,
  };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);
