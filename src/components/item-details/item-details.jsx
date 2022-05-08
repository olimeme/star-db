import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import "./item-details.css";

export const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

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
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getDataById !== prevProps.getDataById ||
      this.props.getItemImageById !== prevProps.getItemImageById
    ) {
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
    if (!this.state.item) return <span>Select an item!</span>;
    const { item } = this.state;
    const { id, name } = item;
    const { getItemImageById } = this.props;
    return this.state.loading ? (
      <Spinner message="Loading..." />
    ) : (
      <div className="person-details card">
        <img src={getItemImageById(id)} alt="" className="person-image" />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
