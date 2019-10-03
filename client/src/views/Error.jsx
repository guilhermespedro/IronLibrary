import React from "react";

const ErrorView = props => {
  return (
    <div>
      <h1>ERRO DO PRELHAZ {props.match.params.code}</h1>
    </div>
  );
};

export default ErrorView;
