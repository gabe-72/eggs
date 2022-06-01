import React from "react";
import Gridbox from "./Gridbox";
import "../stylesheets/App.css";

export default class App extends React.Component {
  render() {
    const filenames = ["chicken-eggs.jpg", "duck-eggs.jpg", "emu-eggs.jpg", "goose-eggs.jpg", "quail-eggs.jpg"];

    return (
      <div>
        <Gridbox filenames={filenames} col="3" />
      </div>
    );
  }
};