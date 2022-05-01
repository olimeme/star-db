import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import "./item-list.css";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    itemList: null,
  };

  componentDidMount() {
    const {getData} = this.props;
    getData().then((itemList) => {
      this.setState({ itemList });
    });
  }

  renderItems = (arr) => {
    const label = this.props;
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const { itemList } = this.state;

    if (!itemList) return <Spinner message="where is everyone...?" />;
    else
      return (
        <ul className="item-list list-group">{this.renderItems(itemList)}</ul>
      );
  }
}
