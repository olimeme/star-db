import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import "./person-details.css";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;
    this.setState({ loading: true });
    this.swapiService.getPersonById(personId).then((item) => {
      this.setState({ person: item, loading: false });
    });
  }

  render() {
    if (!this.state.person) return <span>Select a person!</span>;
    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    const {loading} = this.state;

    return this.state.loading ? <Spinner message="Loading..." /> : (<div className="person-details card">
    <img
      src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      alt=""
      className="person-image"
    />
    <div className="card-body">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Gender</span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Birth Year</span>
          <span>{birthYear}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Eye Color</span>
          <span>{eyeColor}</span>
        </li>
      </ul>
    </div>
  </div>);
  }
}
