import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import "./item-details.css";

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getDataById } = this.props;
    if (!itemId) return;
    this.setState({ loading: true });
    getDataById(itemId).then((item) => {
      this.setState({ item, loading: false });
    });
  }

  render() {
    if (!this.state.item) return <span>Select a person!</span>;
    const { id, name, gender, birthYear, eyeColor } = this.state.item;
    const { getItemImageById } = this.props;
    return this.state.loading ? (
      <Spinner message="Loading..." />
    ) : (
      <div className="person-details card">
        <img src={getItemImageById(id)} alt="" className="person-image" />
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
      </div>
    );
  }
}
