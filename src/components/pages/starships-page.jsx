import { StarshipList, StarshipDetails } from "../sw-components";
import { withPage } from "../hoc-helpers";

const StarshipsPage = withPage(StarshipList, StarshipDetails);
export default StarshipsPage;
