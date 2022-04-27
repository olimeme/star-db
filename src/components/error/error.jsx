import React from "react";
import "./error.css";
import icon from "./death-star.png";

const Error = () => {
  return (
    <div className="jumbotron error-block rounded">
      <img src={icon} alt="" />
      <h4>Oops...</h4>
      <p>
        Something has gone wrong... <br /> but we are working on it!
      </p>
    </div>
  );
};

export default Error;
