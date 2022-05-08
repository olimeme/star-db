import { PlanetList, PlanetDetails } from "../sw-components";
import { withPage } from "../hoc-helpers";

const PlanetsPage = withPage(PlanetList, PlanetDetails);
export default PlanetsPage;
