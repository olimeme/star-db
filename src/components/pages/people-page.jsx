import { PersonList, PersonDetails } from "../sw-components";
import { withPage } from "../hoc-helpers";

const PeoplePage = withPage(PersonList, PersonDetails);
export default PeoplePage;
