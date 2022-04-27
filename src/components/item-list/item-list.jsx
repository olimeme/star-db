import React, { Component } from "react";
import "./item-list.css";

export default class ItemList extends Component {
  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">Luke</li>
        <li className="list-group-item">Duke</li>
        <li className="list-group-item">Suke</li>
      </ul>
    );
  }
}
