import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div className="navi">
          <nav className="navbar navbar-expand-lg navbar-dark bg-custom-2 mt-0">
            <a class="navbar-brand" href="#a">
              Iron Library
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto py-md-3">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
