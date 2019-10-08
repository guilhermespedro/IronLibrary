import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ verify, render, component: ViewComponent, ...other }) => {
  return (
    <Route
      {...other}
      render={props => {
        const authorized = verify();
        if (authorized) {
          if (typeof render === "function") {
            return render(props);
          } else if (typeof ViewComponent !== "undefined") {
            return <ViewComponent {...props} />;
          }
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
