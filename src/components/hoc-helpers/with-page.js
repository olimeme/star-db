import React, { Component } from "react";
import Row from "../row";

const withPage = (ItemList, ItemDetails) => {
  return class extends Component {
    state = {
      selectedItem: null,
    };

    onItemSelected = (selectedItem) => {
      this.setState({ selectedItem });
    };

    render() {
      const { selectedItem } = this.state;

      return (
        <Row
          left={<ItemList onItemSelected={this.onItemSelected} />}
          right={<ItemDetails itemId={selectedItem} />}
        />
      );
    }
  };
};

export default withPage;
