import React from "react";
import "./spinner.css";

const Spinner = ({ message }) => {
  return (
    <div className="spinner jumbotron rounded">
      <h4 className="text-success">{message}</h4>
    </div>
  );
};

export default Spinner;
