import React from "react";

const ErrorView = props => {
  return (
    <div>
      <h1>Page Not Found! We will repair ASAP {props.match.params.code}</h1>
    </div>
  );
};

export default ErrorView;
